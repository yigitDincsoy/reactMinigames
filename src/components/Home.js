import styled from "styled-components";

function Home()
{
    return(
        <main className="homepage">
            <div className="helloMessage">
            <p>Welcome to hire.cat 🐈, where you can hire digital artists, software developers, music creators and more!</p>
            </div>
            <div className="div_wgrd_total">
                <WGRD_UNIT name="Artists" desc= "Take a look at our artists" background="orange"/>
                <WGRD_UNIT name="Developers" desc= "Our skilled developers" background="green"/>
                <WGRD_UNIT name="Music Creators" desc= "Our independent musicians" background="blue"/>
                <WGRD_UNIT name="Others" desc= "Others" background="red"/>
            </div>
        </main>
    )
}


function WGRD_UNIT(props) {
    
    const Content = styled.div`
    color: white;
    background-color: ${props.background};
    width: 20%;
    display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
    `;

    const SmallerContent = styled.p`
    color: black;
    text-align: center;
    font-size: 5px;
    `;

    return(
       <Content>
       <h1>{props.name}</h1> 
       <SmallerContent>{props.desc}</SmallerContent>
       </Content>
    )
}




export default Home;