import { Handbag, Heart, Search, User } from "lucide-react"
import { NavLink } from "react-router-dom"

const NavBar = () => {
  return (
<header>
  <span className= "flex text-center justify-center items-center bg-black text-white text-xs h-6 uppercase tracking-widest"> Ofertas! </span>
  
  <section className="flex items-center justify-between w-full h-16 px-12 bg-white">
    
    {/* HIJO 1: NAV (Contenedor Izquierdo) */}
    {/* Agregamos flex-1 para que ocupe 1/3 del espacio disponible */}
    <nav className="flex-1"> 
      <ul className="flex items-center gap-3 text-[0.8rem] tracking-wide">
        <li className="hover:scale-105 hover:underline transition-transform"><NavLink to='/category/Hombres'>HOMBRES</NavLink></li>
        <li className="hover:scale-105 transition-transform"><NavLink to='/category/Mujeres'>MUJERES</NavLink></li>
        <li className="hover:scale-105 transition-transform"><NavLink to='/category/Nosotros'>REGALOS</NavLink></li>
        <li className="hover:scale-105 transition-transform"><NavLink to='/'>ACCESORIOS</NavLink></li>
      </ul>
    </nav>

    {/* HIJO 2: DIV (Contenedor Central) */}
    {/* Usamos flex-none para que no intente estirarse, solo ocupa su contenido */}
    <div className="flex-none text-center">
      <NavLink to="/" className="no-underline">
        <span className="text-4xl font-logo font-semibold tracking-tighter uppercase">
          Messina
        </span>
      </NavLink>
    </div>

    {/* HIJO 3: UL (Contenedor Derecho) */}
    {/* Agregamos flex-1 para que ocupe el mismo tercio que el NAV izquierdo */}
    {/* Bloque Derecho: Iconos */}
    <ul className="flex-1 flex justify-end items-center gap-4">
        <li>
            <NavLink to='/cart'>
                {/* size=18 (más chico) y strokeWidth=1.5 (más fino) */}
                <Search size={18} strokeWidth={1.5} className="hover:scale-110 transition-transform"/>
            </NavLink>
        </li>
        <li>
            <NavLink to='/cart'>
                <User size={18} strokeWidth={1.5} className="hover:scale-110 transition-transform"/>
            </NavLink>
        </li>
        <li>
            <NavLink to='/cart'>
                <Heart size={18} strokeWidth={1.5} className="hover:scale-110 transition-transform"/>
            </NavLink>
        </li>
        <li>
            <NavLink to='/cart'>
                <Handbag size={18} strokeWidth={1.5} className="hover:scale-110 transition-transform"/>
            </NavLink>
        </li>
    </ul>

  </section>
</header>
  )
}

export default NavBar