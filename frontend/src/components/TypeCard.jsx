import { Link } from "react-router-dom";

export default function TypeCard({ index, name }) {

    // The element button must not appear as a descendant of the a element. Her sier ai at link kan styles som en button, og at button kan fjernes??
    // Element h2 not allowed as child of element button in this context. (Suppressing further errors from this subtree.)
    // Vi kan bare fjerne alle h2 inni buttons for de godtar å bare ha tekst inni seg, må bare få stylet det

    return (
        <>
            <Link to={`/type/${name}`} key={index} className={`typecard ${name}`}>
                    <img src={`/src/assets/${name}.png`} alt="image of poketype"/>
                    <h2>{name.charAt(0).toUpperCase() + name.slice(1)}</h2>
            </Link>
        </>
    )
}