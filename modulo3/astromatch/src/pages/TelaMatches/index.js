import React, { useEffect, useState } from "react";
import axios from "axios";
import { BsFillArrowLeftCircleFill, BsTrashFill } from "react-icons/bs";
import {CardList, LimparVoltar, Limpar, Voltar, Lista, } from "./style";



export default function TelaMatches(props) {
    const [matches, setMatches] = useState([])

    
    useEffect(() => {pegaMatches()}, [matches])


    const pegaMatches = () => {
        const urlGet= "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/felipe-alcantara-barros/matches"
        axios.get(urlGet)
            .then(response => setMatches(response.data.matches))
            .catch(erro => console.log(erro))
    }
    
    const urlPut= "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/felipe-alcantara-barros/clear"
    const limparLista = () => {
        axios.put(urlPut)
            .then(response => pegaMatches(response.data.matches))
            .catch(erro => console.log(erro))
    }

    const renderizar = matches.map((mat) => {
        return (
            <div className="ajustMachs" key={mat.id}>
                <img src={mat.photo} alt={mat.name} />
                <p>{mat.name}</p>
            </div>
        )
    })
    return (
        <CardList>
            <LimparVoltar>
                <Limpar onClick={() => limparLista(matches)}> <BsTrashFill /></Limpar>
                <Voltar onClick={props.trocaTela}> <BsFillArrowLeftCircleFill /></Voltar>
            </LimparVoltar>
            <Lista>
                {renderizar}
            </Lista>
        </CardList>
    )
}