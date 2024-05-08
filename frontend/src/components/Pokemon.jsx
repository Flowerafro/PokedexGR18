import { useParams } from "react-router-dom"

export default function Pokemon() {
    const {slug} = useParams()

    return (
        <h2>{slug}</h2>
    )
}