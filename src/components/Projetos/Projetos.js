import styled from "styled-components"
import { Logo } from "../common"
import { useEffect, useState } from "react"
import { listarProjetos } from "../../services/axios";

export default function Projetos() {

    const [projetos, setProjetos] = useState();

    useEffect(() => {
        const promise = listarProjetos();
        promise.then(res => {
            setProjetos(res.data)
            console.log(res.data)
        }).catch(e => console.log(e))
    }, [])
    return (
        <ProjetosWrapper>
            <Logo pequeno={"true"} fixado={"true"} />
            {projetos && projetos.map((value, index) => <CartaoProjeto key={index} dadosProjeto={value} />)}
        </ProjetosWrapper>
    )
}



function CartaoProjeto({ dadosProjeto }) {
    return (
        <CartaoWrapper>
            <h3>{dadosProjeto.nome_projeto}</h3>
            <div>
                <p>Cidade: {dadosProjeto.cidade} </p>
                <p>Número do Contrato: {dadosProjeto.num_contrato}</p>
                <p>Contratada: {dadosProjeto.contratada}</p>
                <p>Data Fim: {dadosProjeto.fim_vigencia}</p>
            </div>
        </CartaoWrapper>
    )
}

const CartaoWrapper = styled.div`
background-color: red;
width: 250px;
height: 275px;
border-radius: 7px;
display: flex;
flex-direction: column;
align-items: center;
padding: 10px;
box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;

div{
    width: 100%;
    p{
        margin-top: 10px;
    }
}
h3{
    font-size: 20px;
    font-weight: bold;
}
`

const ProjetosWrapper = styled.main`
display: flex;
align-items: center;
justify-content: center;
height: 100vh;
`