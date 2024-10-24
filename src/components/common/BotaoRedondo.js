import styled from "styled-components"

export default function BotaoRedondo({ children, onClick, cor }) {
    return (
        <BotaoWrapper $cor={cor} onClick={onClick}>{children}</BotaoWrapper>
    )
}

const BotaoWrapper = styled.div`
width: 20px;
height: 20px;
border-radius: 50px;
background-color: ${props => props.$cor === "vermelho" ? "red" : '#39468b'};
display: flex;
align-items: center;
justify-content: center;
color: white;
margin-left: 5px;
font-size: 15px;

&:hover{
    cursor: pointer;
    filter:brightness(1.2);
}
`