import axios from "axios";
import { useState,  useEffect } from "react";

const ResidentInfo = ({url}) => {

    const[resident, setResident] = useState({});

    const getStatus = () => {
        if(resident.status === "Alive") {
            return(
                <div className="square" style={{background: "green"}}></div>
            )
        } else if(resident.status === "Dead") {
            return(
                <div className="square" style={{background: "red"}}></div>
            )
        } else{
            return(
                <div className="square" style={{background: "grey"}}></div>
            )
        }
    }

    useEffect(() => {

        axios.get(url)
        .then(res => setResident(res.data))
    }, []);


    return (
        <>
        <div className="resident__card flex__card">
            <h2 className="resident__title">{resident.name}</h2>

            <img src={resident.image} alt={resident.name} className="resident__img"/>

            <div className="resident__info">
                <p className="flex__p"><span>Status:</span> {resident.status}</p> {
                    resident.status === "Alive"
                    ? (
                        <div className="square" style={{background: "green"}}></div>
                    ) : resident.status === "Dead"? (
                        <div className="square" style={{background: "red"}}></div>
                    ) : (
                        <div className="square" style={{background: "gray"}}></div>
                    )
                }
                <p className="flex__p"><span>Species:</span> {resident.species}</p>
                <p className="flex__p"><span>Origin:</span> {resident.origin?.name}</p>
                <p className="flex__p"><span>amounts that appears:</span>{resident.episode?.length}</p>
            </div>
        </div>
        </>
    );
};

export default ResidentInfo;