import styled from "styled-components"
import { Logo, Botao } from "../common"
import { useNavigate } from "react-router-dom"

export default function Home() {

    const navigate = useNavigate();

    return (
        <Conteudo>
            <Logo />
            <div>
                <Botao onClick={() => navigate("/novo-projeto")}>Novo Projeto</Botao>
                <Botao transparente={"true"} onClick={() => navigate("/projetos")}>Projetos</Botao>
            </div>
        </Conteudo >
    )
}

const Conteudo = styled.main`
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: #FFFFFF;

div{
    display: flex;
    flex-direction: column;
}
`

