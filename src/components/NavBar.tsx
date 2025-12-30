import { NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <header>
        <span className=" block "> Ofertas! </span>
        <section>
            <NavLink to='\hombres'>
                <p>Hombre</p>
            </NavLink>
            <NavLink to='\mujeres'>
                <p>Mujer</p>
            </NavLink>
            <NavLink to='\perdumeria'>
                <p>Perfumeria</p>
            </NavLink>
            <NavLink to='\hombres'>
                <p>Accesorios</p>
            </NavLink>
        </section>
        <section>
            <NavLink to='\'>
                    <img src="../assets/MessinaIcon.png" alt="Logo Messina" />
            </NavLink>
        </section>
        <section>

        </section>
    </header>
  )
}

export default NavBar