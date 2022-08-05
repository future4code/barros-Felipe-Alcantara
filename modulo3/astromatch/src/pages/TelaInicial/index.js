import React, { useEffect, useState } from "react";
import axios from "axios";
import {Container, Matches, ContainerBotton, Deslike, Like, } from "./style"
import CardPerfil from "../../components/CardPerfil";
import { BsFillChatRightFill, BsFillArrowLeftCircleFill } from "react-icons/bs";
import { IoCloseCircle } from "react-icons/io5";
import { FaHeart } from "react-icons/fa"



export default function TelaInicial(props) {
    const [perfil, setPerfil] = useState({})
    const [atualiza, setAtualiza] = useState(false)

    useEffect(() => {pegaPerfil()}, [atualiza])

    const urlGetProfile="https://us-central1-missao-newton.cloudfunctions.net/astroMatch/felipe-alcantara-barros/person"
    const pegaPerfil = () => {
        axios.get(urlGetProfile)
            .then(response => setPerfil(response.data.profile))
            .catch(erro => console.log(erro))}

    const urlPost= `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/felipe-alcantara-barros/choose-person`
    const escolherPessoa = (id) => {
        const body = {
            id: id,
            choice: true
        }
        axios.post(urlPost,body)
            .then(response => setAtualiza(!atualiza))
            .catch(erro => console.log(erro))
    }

    return (
        <Container>
            <Matches>
                <span onClick={props.trocaTela}><BsFillChatRightFill/></span>
            </Matches>
            <CardPerfil perfil={perfil} />
            <ContainerBotton>
                <Deslike onClick={pegaPerfil}>
                     <IoCloseCircle /> 
                </Deslike>
                <Like onClick={() => {escolherPessoa(perfil.id) }}>
                    <FaHeart />
                </Like>
            </ContainerBotton>
        </Container>

    )
}