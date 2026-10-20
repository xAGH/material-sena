import type { ReactNode } from "react";

export interface Finca {
    nombre: string;
    municipio: string;
    altitud: number;
    variedad: string;
    precioKilo: number;
}

interface HeaderProps {
    shopName: string
    subtitle?: string | undefined;
    finca?: Finca;
    children: ReactNode
}

export function Header({ children, shopName, finca, subtitle = "Tienda de café" }: HeaderProps) {
    shopName = "khajkdh"
    return <>
        {children}
        <h1 className="">{shopName}</h1>
        <p>{subtitle}</p>
    </>
}