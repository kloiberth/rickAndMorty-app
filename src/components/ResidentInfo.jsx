import axios from "axios";
import { useState,  useEffect } from "react";

const ResidentInfo = ({url}) => {

    const[resident, setResident] = useState({});

    useEffect(() => {

        axios.get(url)
        .then(res => setResident(res.data))
    }, []);


    return (
        <>
        <div className="resident__card flex__card grid__card">
            {
                /* compara el status */
             resident.status === "Alive"
                ? (
                    <div className="resident__status">
                        <div className="square" style={{background: "green"}}></div>
                        <p className="status__info">Alive</p>
                    </div>
                ) : resident.status === "Dead"? (
                    <div className="resident__status">
                        <div className="square" style={{background: "red"}}></div>
                        <p className="status__info">Dead</p>
                    </div>
                ) : (
                    <div className="resident__status">
                        <div className="square" style={{background: "grey"}}></div>
                       <p className="status__info">Unknown</p> 
                    </div>
                )
            }
            <h2 className="resident__title">{resident.name}</h2>

            <img src={resident.image} alt={resident.name} className="resident__img"/>

            <div className="resident__info">
                <p className="flex__p"><span>Species:</span> {resident.species}</p>
                <p className="flex__p"><span>Origin:</span> {resident.origin?.name}</p>
                <p className="flex__p"><span>amounts that appears:</span> {resident.episode?.length}</p>
            </div>
        </div>
        </>
    );
};

export default ResidentInfo;