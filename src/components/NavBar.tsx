import { Handbag, Heart, Search, User } from "lucide-react"
import { NavLink } from "react-router-dom"
import type { LinkItem } from "../types/navItemProps";
import NavItemCategory from "./NavItemCategory";
import { useNavScroll } from "../hooks/useNavScroll";

const NavBar = () => {
    const links: LinkItem[] = [
        { name: 'Hombres', path: '/category/hombres' },
        { name: 'Mujeres', path: '/category/mujeres' },
        { name: 'Regalos', path: '/category/regalos' },
        { name: 'Accesorios', path: '/' },
    ];

    const { isScrolled, isHovered, setIsHovered } = useNavScroll({ max: 50 });

    const headerContainerClass = `
        fixed top-0 w-full z-50 
        flex flex-col items-center justify-center
        transition-all duration-700 ease-in-out
    `;

    const ofertaElementsClass = `
        w-full flex justify-center items-center bg-black text-white text-xs uppercase tracking-widest relative
        transition-all duration-700 ease-[cubic-bezier(0.4, 0, 0.2, 1)] overflow-hidden
        ${isScrolled ? 'h-0' : 'h-6'}
    `;

    const navContainerClass = `
        flex items-center justify-between w-full h-16 px-12
        transition-colors duration-700 ease-in-out
        ${isScrolled || isHovered 
            ? 'bg-white shadow-sm text-black' 
            : 'bg-transparent text-white'
        }
        relative
    `;

    const sideElementsClass = `
        transition-opacity duration-700
        opacity-100 
        relative z-[70] 
    `;

    /* --- CAMBIOS AQUÍ --- */
    const logoAnimClass = `
        absolute left-1/2 -translate-x-1/2
        
        flex items-center justify-center
        
        h-[0.85em]
        
        overflow-hidden
        
        transition-all duration-[1000ms] ease-[cubic-bezier(0.25,1,0.5,1)]
        origin-center
        
        ${isScrolled 
            ? 'top-1/2 -translate-y-1/2 text-4xl text-black' 
            : 'top-[50vh] -translate-y-[80%] text-[30vh] md:text-[35vh] text-white' 
        }
        
        ${!isScrolled && isHovered ? '!text-black' : ''}
    `;

    const iconHoverClass = 'hover:scale-110 transition-transform hover:fill-black ';

    return (
        <>
            <header className={headerContainerClass}>
                <div className={ofertaElementsClass}> 
                    <div className="w-full text-center py-1">
                        Ofertas! 
                    </div>
                </div>
                <section 
                    className={navContainerClass}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <nav className={`flex-1 ${sideElementsClass}`}>
                        <ul className="flex items-center gap-8">
                            {links.map((link) => (
                                <NavItemCategory key={link.name} to={link.path}>
                                    {link.name}
                                </NavItemCategory>
                            ))}
                        </ul>
                    </nav>

                    <div className="flex-none relative z-[60] pointer-events-none select-none w-[200px] md:w-[280px] h-full">
                        
                        <NavLink 
                            to="/" 
                            className={`no-underline group pointer-events-auto ${logoAnimClass}`}
                        >
                            {/* CAMBIO CRÍTICO 2: 
                                Quitamos el -translate-y-[12%] porque ahora confiamos en 
                                que 'flex items-center' del padre lo centre en la nueva caja más alta. 
                                Solo dejamos leading-none para limpiar.
                            */}
                            <span className="block font-logo font-semibold tracking-tighter uppercase leading-none">
                                Messina
                            </span>
                        </NavLink>

                    </div>

                    <ul className={`flex-1 flex justify-end items-center gap-4 ${sideElementsClass}`}>
                        <li>
                            <Search size={18} strokeWidth={1.5} className="hover:scale-110 transition-transform" />
                        </li>
                        <li>
                            <NavLink to='/profile'>
                                <User size={18} strokeWidth={1.5} className={iconHoverClass} />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/wishlist'>
                                <Heart size={18} strokeWidth={1.5} className={iconHoverClass} />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/cart'>
                                <Handbag size={18} strokeWidth={1.5} className={iconHoverClass} />
                            </NavLink>
                        </li>
                    </ul>
                </section>
            </header>
        </>
    )
}

export default NavBar