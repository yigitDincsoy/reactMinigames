import './Home.css';

function Home()
{
    return(
        <main className="homepage">
            <div className="helloMessage">
                <div id="textArea">
            <p>Hello, my name is Yiğit! <em>(pron. yit) </em></p>
            <p>I am a junior software developer in Halifax, NS and I am currently looking for <span id="coolText">full-time employment.</span></p>
            <p>On this website (work in-progress) you can find some of my React based web game prototypes.</p>
            <p>1. Life Simulator</p>
            <p>2. Medieval Estate Simulator (Requires JSON Server & db.json)</p>

            </div>
            </div>
            
        </main>
    )
}

export default Home;