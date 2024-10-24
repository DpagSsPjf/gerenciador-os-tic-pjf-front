import styled from "styled-components";

export default function Botao({
    children,
    transparente,
    pequeno,
    onClick }) {
    return (<Wrapper $transparente={transparente}
        $pequeno={pequeno}
        onClick={onClick}>{children}</Wrapper>)
}

const Wrapper = styled.button`
background-color: ${props => props.$transparente ? 'white' : '#39468b'};
width: ${props => props.$pequeno ? '100px' : '300px'};
height: ${props => props.$pequeno ? '35px' : '100px'};
border-radius: 10px;
margin-top: 15px;
font-size: ${props => props.$pequeno ? '15px' : '45px'};
color: ${props => props.$transparente ? '#39468b' : 'white'};
border: ${props => props.$transparente ? '3px solid #39468b' : 'none'};

&:hover{
    filter:brightness(1.2) ;
}
`