import { Link } from "react-router-dom";

export default function TypeCard({ index, name }) {

    return (
        <>
        <Link to={`/type/${name}`} key={index} className="typecard">
            <button className={`${name}`}>
                <img src={`/src/assets/${name}.png`}/>
                <h2>{name.charAt(0).toUpperCase() + name.slice(1)}</h2>
            </button>
        </Link>
        </>
    )
}