import { useState, useEffect } from "react";
import axios from "axios";
import ResidentInfo from "./ResidentInfo";

const Contents = () => {

    const[location, setLocation] = useState({});
	const[text, setText] = useState("");

	useEffect(() =>{

		axios.get(`https://rickandmortyapi.com/api/location/${ Math.floor(Math.random() * 126) + 1}`)
		.then(res => setLocation(res.data))
	}, []);

	const searchLocation = () => {
         axios.get(`https://rickandmortyapi.com/api/location/${text}`)
		.then(res => setLocation(res.data))
 
	}

    return (
        <>
        <main style={{height: location.residents?.length === 0 && "100vh"}}>
            <div className="container">
                <h1 className="title">Rick and Morty</h1>
                <div className="cont-input">
                     {text > 126 && <p className="input__warning">please enter the correct id</p>}
                    <input type="text" placeholder="type an id between 1 and 126" value={text} onChange={e => setText(e.target.value)}/>
                    <button onClick={searchLocation} className="input__btn" style={{visibility: text > 126 && "hidden"}}>search</button>
                </div>

                <div className="container__info">
                <h2 className="title-location">{location.name}</h2>

                <div className="info-location">
                    <p><span>Type:</span> {location.type}</p>
                    <p><span>Dimension:</span> {location.dimension}</p>
                    <p><span>Population:</span> {location.residents?.length}</p>
                </div>

                </div>
            </div>

            <section className="resident__container">
                {location.residents?.map(resident => (

                    <ResidentInfo
                    url={resident}
                    key={resident}
                    />
                ))}
            </section>
           
        </main>
        </>
    );
};

export default Contents;