import AuthNav from "./Auth/AuthNav";


function Header()
{
    return(
        <header>
            <div className="myheader">
           Hire.cat
            <AuthNav/>
            </div>
        </header>
    )
}


export default Header;