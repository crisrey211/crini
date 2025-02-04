interface AlertProps {
    message: string
}

export default function Alert({ message }: AlertProps) {
    return (
        <header className="bg-brand-900 h-9 w-full flex items-center justify-center text-white">
            <span className="text-xs font-medium">
                {message}
            </span>
        </header>)
}

