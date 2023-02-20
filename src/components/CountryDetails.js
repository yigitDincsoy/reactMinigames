import { useParams } from "react-router-dom";

function CountryDetails()
{

    const {countryname} = useParams()
    return(

        <main>
            <b>Some details about {countryname}</b>
        </main>
    )
}


export default CountryDetails;