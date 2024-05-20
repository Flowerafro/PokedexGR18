import { Link } from "react-router-dom";

function PokeCard({name, id, index, image, typeColor}) {
    let paddedId;
    if (id < 10) {
        paddedId = '00' + id;
    } else if (id < 100) {
        paddedId = '0' + id;
    } else {
        paddedId = id;
    }

    return ( 
        <>
        <Link key={index} to={`/pokemon/${name}`} className={`pokecard `}> 
            <article className={`${typeColor}`}>
                {image ? (<img src={image} alt={name} />) : (<p className="noimage">No image found </p>)}
                <h2>{name}</h2>
                <p>#{paddedId}</p>
            </article>
        </Link>
        </>
    );
}

export default PokeCard;