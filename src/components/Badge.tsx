import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface BadgeProps {
    label: string;
    onClick: () => void;
    active: boolean;
    icon: ReactNode
}

export default function Badge({ label, onClick, active, icon }: BadgeProps) {
    return (
        <button
            onClick={onClick}
            className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-full border transition-all",
                active ? "bg-black text-white" : "bg-white text-black border-black"
            )}
        >
            {icon}
            <span>{label}</span>
        </button>
    );
}
