import { useGlobal } from '../contexts/GlobalContext'
import { useAuth } from '../contexts/AuthContext'
import { NavLink, Link } from "react-router-dom";
import { useEffect } from 'react'

const Header = () => {
    const { allRoutes, isLogged, setIsLogged } = useGlobal();
    const { logout } = useAuth();


    useEffect(() => {
        setIsLogged(isLogged)
    }, [isLogged])

    return (
        <nav className='d-flex'>
            <h1 className="m-4">React Form Blog</h1>
            <ul className='d-flex'>
                {
                    allRoutes.map(route => {
                        return (
                            <li key={`go-to-${route.name}`}
                                className='m-3'>
                                <NavLink to={route.path} activeclassname="selected">{route.name}</NavLink>
                            </li>
                        )
                    })
                }
            </ul>
            <div>
                {
                    isLogged ?
                        <button className='btn btn-danger' onClick={logout}>Logout</button>
                        :
                        <Link to={'auth/login'} className='btn btn-primary'>Login</Link>
                }
                <Link to={'auth/register'} className='btn btn-secondary'>Register</Link>
            </div>
        </nav>
    )
}

export default Header