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
    `;

    const sideElementsClass = `
        transition-opacity duration-700
        opacity-100 pointer-events-auto
    `;

    const logoAnimClass = `
        block transition-all duration-[1000ms] ease-[cubic-bezier(0.25,1,0.5,1)]
        ${isScrolled 
            ? 'translate-y-0 scale-100 text-black'
            : 'translate-y-[25vh] scale-[3] md:scale-[7] text-white'
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

                    <div className="flex-none text-center relative z-[60]">
                        <NavLink to="/" className="no-underline group">
                            <span className={`text-4xl font-logo font-semibold tracking-tighter uppercase ${logoAnimClass}`}>
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