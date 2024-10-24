import styled from "styled-components"
import { BotaoRedondo } from "../common"

function ListaGestores({ novoProjeto, setNovoProjeto }) {

    function removerGestor(value) {
        setNovoProjeto({
            ...novoProjeto,
            gestores: novoProjeto.gestores.filter(gestor => gestor !== value)
        })
    }

    return (
        <StyledUl>
            {novoProjeto.gestores.map((value, index) =>
                <li key={index}>
                    {value}
                    <BotaoRedondo cor="vermelho" onClick={() => removerGestor(value)}> - </BotaoRedondo>
                </li>)}
        </StyledUl>
    )
}


function ListaFiscais({ novoProjeto, setNovoProjeto }) {

    function removerFiscal(value) {
        setNovoProjeto({
            ...novoProjeto,
            fiscais: novoProjeto.fiscais.filter(gestor => gestor !== value)
        })
    }
    return (
        <StyledUl>
            {novoProjeto.fiscais.map((value, index) =>
                <li key={index}>
                    {value}
                    <BotaoRedondo cor="vermelho" onClick={() => removerFiscal(value)}> - </BotaoRedondo>
                </li>)}
        </StyledUl>
    )
}

export { ListaGestores, ListaFiscais }

const StyledUl = styled.ul`
li{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
    background-color: #BFC3D9;
    height: 25px;
    width: 360px;
    border-radius:5px;
    padding: 3px;
    font-size: 13px;
}
`