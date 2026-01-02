import { Handbag, Heart, Search, User } from "lucide-react"
import { NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <header>
        <span className=" block "> Ofertas! </span>
        <section className="flex space-btw">
            <nav>
                <ul className="flex justify-center items-center gap-4 text-[0.875rem]">
                        <li>
                            <NavLink to='/category/Hombres'>HOMBRES</NavLink>
                        </li>
                        <li>
                            <NavLink to='/category/Mujeres'>MUJERES</NavLink>
                        </li>
                        <li>
                            <NavLink to='/category/Nosotros'>REGALOS</NavLink>
                        </li>
                        <li>
                            <NavLink to='/'>ACCESORIOS</NavLink>
                        </li>
                </ul>
            </nav>
            <div>
                <NavLink to="/" className="no-underline">
                    {/* AQUÍ ESTÁ LA MAGIA: Agregamos 'font-logo' */}
                    <span className="font-logo text-3xl font-bold tracking-wide text-black transition-colors duration-500">
                        Messina
                    </span>
                </NavLink>
            </div>
            <ul className="iconosNavBar flex justify-center gap-6 ">
                    <li>
                        <NavLink to='/cart'>
                            <Search />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/cart'>
                            <User />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/cart'>
                            <Heart />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/cart'>
                            <Handbag />
                        </NavLink>
                    </li>
                </ul>
        </section>

    </header>
  )
}

export default NavBar