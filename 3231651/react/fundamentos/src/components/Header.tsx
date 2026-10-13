import { type ReactNode } from "react"

interface HeaderProps {
    shopName: string
    isPrincipal?: boolean,
    children: ReactNode
}


export function Header({ shopName, isPrincipal = false, children }: HeaderProps) {
    return (
        <header>
            <h1>{shopName}</h1>
            {children}
        </header>
    )
}