import { NavLink } from "react-router-dom"

const Nabar = () => {

    const activeStyle = 'underline underline-offset-4'

    return (
        <nav className="flex justify-between items-center fixed z-10  top-0 w-full py-5 px-8 text-sm font-light">
            <NavLink className="font-semibold text-lg"
                to="/">
                Prueba Tecnica Santiago Hernandez
            </NavLink>

            <ul className="flex items-center gap-3">

                <li>
                    <NavLink to="/retoPalindromo"
                        className={({ isActive }) => isActive ? activeStyle : undefined}>
                        1 Reto Palindromo
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/retoListaObjetos"
                        className={({ isActive }) => isActive ? activeStyle : undefined}>
                        2 Reto Lista Objetos
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/retoFizzBuzz"
                        className={({ isActive }) => isActive ? activeStyle : undefined}>
                        3 Reto FizzBuzz
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/retoMockup"
                        className={({ isActive }) => isActive ? activeStyle : undefined}>
                        4 Reto Mockup
                    </NavLink>
                </li>


            </ul>
        </nav>
    )
}
export default Nabar