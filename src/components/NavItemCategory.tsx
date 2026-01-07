import { NavLink } from 'react-router-dom'
import type { NavItemProps } from '../types/navItemProps'

const NavItemCategory = ({to, children}: NavItemProps) => {
    return (
        <li>
        <NavLink 
            to={to} 
            className="
            relative block 
            text-[11px] font-medium uppercase tracking-[0.2em] 
            transition-colors duration-100 hover:text-gray-600

            /* --- La Línea Animada --- */
            after:content-[''] 
            after:absolute 
            after:left-0 
            after:-bottom-1 
            after:h-[1px] 
            after:w-0 
            after:bg-current 
            
            /* --- Animación --- */
            after:transition-all 
            after:duration-500 
            after:ease-in-out 
            
            /* --- Trigger --- */
            hover:after:w-full
            "
        >
            {children}
        </NavLink>
        </li>
    )
}

export default NavItemCategory
