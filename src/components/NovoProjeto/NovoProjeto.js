import styled from "styled-components"
import { Logo } from "../common"
import Formulario from "./Formulario"
export default function NovoProjeto() {
    return (
        <Conteudo>
            <Logo pequeno={"true"} />
            <Formulario />
        </Conteudo>
    )
}



const Conteudo = styled.main`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: #FFFFFF;

`