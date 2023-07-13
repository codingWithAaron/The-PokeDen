import React from "react"
import { Link } from "react-router-dom/cjs/react-router-dom.min"

function GenTwoPokemon({pokemon}){
    return (
        <>
            <div>
                <Link to="#">{pokemon.name}</Link>
            </div>
        </>
    )
}

export default GenTwoPokemon