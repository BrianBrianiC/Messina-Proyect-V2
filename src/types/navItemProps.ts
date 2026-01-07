import type { ReactNode } from "react";

export interface NavItemProps {
    to: string;
    children: ReactNode; // ReactNode permite texto, iconos, o lo que sea
}
export interface LinkItem {
    name: string
    path: string;
}