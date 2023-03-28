import {Link} from 'react-router-dom'

function Navigation()
{
    return(
        <div className="navbar">
            <Link className="navlink" to="/">Home</Link>
            <Link className="navlink" to="/minigame">Game: Life Simulator</Link>
            <Link className="navlink" to="/clicker">Game: Medieval Lord</Link>

        </div>
    )
}

export default Navigation