import {Link} from 'react-router-dom'

function Navigation()
{
    return(
        <div className="navbar">
            <Link className="navlink" to="/">Home</Link>
            <Link className="navlink" to="/minigame">Game: Life Simulator</Link>
            <Link className="navlink" to="/clicker">Game: Medieval Lord</Link>
            <Link className="navlink" to="/resume">Resume</Link>
        </div>
    )
}

export default Navigation