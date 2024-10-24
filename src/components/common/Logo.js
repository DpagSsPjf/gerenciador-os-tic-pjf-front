import styled from "styled-components"
import logo from "../../assets/logo.jpg"

export default function Logo({ pequeno }) {

    return (
        <Wrapper $pequeno={pequeno} src={logo} alt="Logo" />
    )
}

const Wrapper = styled.img`
width: ${props => props.$pequeno ? '250px' : '400px'};
`