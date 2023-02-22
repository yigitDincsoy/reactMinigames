import {Link} from 'react-router-dom'

function Navigation()
{
    return(
        <div className="navbar">

            <Link className="navlink" to="/">Home</Link>
            <Link className="navlink" to="/countries">Countries Info</Link>
            <Link className="navlink" to="/countries/details">Country Details</Link>
            <Link className="navlink" to="/countries/details/canada">Country Details Canada</Link>
            <Link className="navlink" to="/unicorn">Find next unicorn stock</Link>
            <Link className="navlink" to="/admin">Admin Dashboard</Link>
            <Link className="navlink" to="/about">About</Link>
            <Link className="navlink" to="/minigame">Minigame</Link>
        </div>
    )
}

export default Navigation