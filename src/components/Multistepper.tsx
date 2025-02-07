import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import MultiStepForm from '@/components/ui/multi-step-form'
import { formSteps } from "@/data/cotizacion"
import {
    User
} from 'lucide-react'
import { useRef, useState } from 'react'
import { toast } from 'sonner'

export default function ExtendedForm() {
    const [isCompact,] = useState(false)
    const formRef = useRef<HTMLFormElement>(null)

    const handleComplete = (selections: Record<string | number, string>) => {
        if (formRef.current) {
            const isValid = formRef.current.checkValidity()
            if (!isValid) {
                formRef.current.reportValidity()
                return false
            }
        }

        const selectedItems = {
            ...formSteps
                .map((step, index) => {
                    const selectedItem = step.items.find(
                        (item) => item.id === selections[index]
                    )
                    return {
                        [step.id]: selectedItem?.id,
                    }
                })
                .reduce((acc, curr) => ({ ...acc, ...curr }), {}),
            // Add form inputs if they exist
            ...(selections.name ? { name: selections.name } : {}),
            ...(selections.email ? { email: selections.email } : {}),
        }

        toast('Form completed!', {
            description: (
                <pre className="mt-2 p-4 bg-muted rounded-lg overflow-auto">
                    <code className="text-sm">
                        {JSON.stringify(selectedItems, null, 2)}
                    </code>
                </pre>
            ),
        })

        return true
    }

    return (
        <MultiStepForm
            title={
                <div className="flex items-center justify-between w-full flex-col space-y-4">
                    <div className="flex items-center gap-2">
                        <User className="h-6 w-6" />
                        <span className="font-semibold">Solicita una cotización a tu gusto</span>
                    </div>

                </div>
            }
            formSteps={formSteps}
            onComplete={handleComplete}
            variant={isCompact ? 'compact' : 'default'}
            imageClassName="bg-white hover:grayscale-0"
            cardClassName="pb-2"
            finalStep={
                <div className="flex items-center gap-2">
                    <span className="font-semibold">Thank you for trying</span>
                    <User className="h-5 w-5" />
                    <span className="font-semibold">Next-Stepper</span>
                </div>
            }
        >
            <form ref={formRef} className="space-y-4 p-4 border rounded-lg">
                <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                        id="name"
                        name="name"
                        required={true}
                        placeholder="Enter your name"
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        required={true}
                        placeholder="Enter your email"
                    />
                </div>
            </form>
        </MultiStepForm>
    )
}