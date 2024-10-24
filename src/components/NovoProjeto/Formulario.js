import styled from "styled-components"
import { Botao, BotaoRedondo } from "../common"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { ListaFiscais, ListaGestores, } from "./ListaFuncionarios"
import { criarNovoProjeto } from "../../services/axios"
export default function Formulario() {

    const navigate = useNavigate()

    const [novoProjeto, setNovoProjeto] = useState({
        nomeProjeto: '',
        cidade: '',
        numContrato: '',
        objetoContratado: '',
        contratada: '',
        cnpj: '',
        preposto: '',
        inicioVigencia: '',
        fimVigencia: '',
        solicitante: '',
        emailSolicitante: '',
        unidade: '',
        secretario: '',
        fiscais: [],
        gestores: [],
    });

    const [fiscalGestor, setFiscalGestor] = useState({
        fiscal: '',
        gestor: ''
    })

    function addFiscal() {

        if (fiscalGestor.fiscal !== '') {
            setNovoProjeto({
                ...novoProjeto,
                fiscais: [...novoProjeto.fiscais, fiscalGestor.fiscal]
            }
            );
            setFiscalGestor({
                ...fiscalGestor,
                fiscal: '',
            });
        }
    }

    function addGestor() {
        if (fiscalGestor.gestor !== '') {
            setNovoProjeto({
                ...novoProjeto,
                gestores: [...novoProjeto.gestores, fiscalGestor.gestor]
            }
            );
            setFiscalGestor({
                ...fiscalGestor,
                gestor: '',
            });
        }
    }

    function enviarFormulario() {
        console.log('oi')
        const promise = criarNovoProjeto(novoProjeto)
        promise.then(
            (res) => {
                navigate("/projetos")
            }
        ).catch(e => console.log(e))
    }

    function handleForm(event) {
        event.preventDefault();
    }

    return (
        <>
            <FormWrapper onSubmit={handleForm}>
                <label htmlFor="nomeProjeto">Nome do Projeto:</label>
                <input
                    placeholder="Digite o nome do novo projeto"
                    id="nomeProjeto"
                    name="nomeProjeto"
                    onChange={e => setNovoProjeto({
                        ...novoProjeto,
                        [e.target.name]: e.target.value
                    })}
                    value={novoProjeto.nomeProjeto}
                    required />

                <label htmlFor="cidade">Local do Projeto:</label>
                <input
                    placeholder="Digite a cidade do projeto"
                    id="cidade"
                    name="cidade"
                    onChange={e => setNovoProjeto({
                        ...novoProjeto,
                        [e.target.name]: e.target.value
                    })}
                    value={novoProjeto.cidade}
                    required />

                <label htmlFor="numContrato">Número do Contrato:</label>
                <input
                    placeholder="Digite o número do contrato"
                    id="numContrato"
                    name="numContrato"
                    onChange={e => setNovoProjeto({
                        ...novoProjeto,
                        [e.target.name]: e.target.value
                    })}
                    value={novoProjeto.numContrato}
                    required />

                <label htmlFor="objetoContratado">Objeto Contratado:</label>
                <textarea placeholder="Digite o objeto contratado"
                    id="objetoContratado"
                    name="objetoContratado"
                    onChange={e => setNovoProjeto({
                        ...novoProjeto,
                        [e.target.name]: e.target.value
                    })}
                    value={novoProjeto.objetoContratado}
                    required />

                <label htmlFor="contratada">Contratada:</label>
                <input
                    placeholder="Digite a razão social da contratada"
                    id="contratada"
                    name="contratada"
                    onChange={e => setNovoProjeto({
                        ...novoProjeto,
                        [e.target.name]: e.target.value
                    })}
                    value={novoProjeto.contratada}
                    required />

                <label htmlFor="cnpj">CNPJ contratada:</label>
                <input
                    placeholder="Digite o número do contrato"
                    id="cnpj"
                    name="cnpj"
                    onChange={e => setNovoProjeto({
                        ...novoProjeto,
                        [e.target.name]: e.target.value
                    })}
                    value={novoProjeto.cnpj}
                    required />

                <label htmlFor="preposto">Preposto:</label>
                <input
                    placeholder="Digite o preposto"
                    id="preposto"
                    name="preposto"
                    onChange={e => setNovoProjeto({
                        ...novoProjeto,
                        [e.target.name]: e.target.value
                    })}
                    value={novoProjeto.preposto}
                    required />

                <label htmlFor="inicioVigencia">Início da vigência do contrato:</label>
                <input
                    placeholder="Digite a data do início da vigência do contrato : dd/mm/yyyy"
                    id="inicioVigencia"
                    name="inicioVigencia"
                    onChange={e => setNovoProjeto({
                        ...novoProjeto,
                        [e.target.name]: e.target.value
                    })}
                    value={novoProjeto.inicioVigencia}
                    required />

                <label htmlFor="fimVigencia">Fim da vigência do contrato:</label>
                <input
                    placeholder="Digite a data do fim da vigência do contrato : dd/mm/yyyy"
                    id="fimVigencia"
                    name="fimVigencia"
                    onChange={e => setNovoProjeto({
                        ...novoProjeto,
                        [e.target.name]: e.target.value
                    })}
                    value={novoProjeto.fimVigencia}
                    required />

                <label htmlFor="solicitante">Solicitante:</label>
                <input
                    placeholder="Digite o nome do solicitante"
                    id="solicitante"
                    name="solicitante"
                    onChange={e => setNovoProjeto({
                        ...novoProjeto,
                        [e.target.name]: e.target.value
                    })}
                    value={novoProjeto.solicitante}
                    required />

                <label htmlFor="emailSolicitante">E-mail do solicitante:</label>
                <input
                    placeholder="Digite o e-mail do solicitante"
                    id="emailSolicitante"
                    name="emailSolicitante"
                    onChange={e => setNovoProjeto({
                        ...novoProjeto,
                        [e.target.name]: e.target.value
                    })}
                    value={novoProjeto.emailSolicitante}
                    required />

                <label htmlFor="unidade">Unidade:</label>
                <input
                    placeholder="Digite a unidade"
                    id="unidade"
                    name="unidade"
                    onChange={e => setNovoProjeto({
                        ...novoProjeto,
                        [e.target.name]: e.target.value
                    })}
                    value={novoProjeto.unidade}
                    required />

                <label htmlFor="secretario">Secretário:</label>
                <input
                    placeholder="Digite o nome do secretário"
                    id="secretario"
                    name="secretario"
                    onChange={e => {
                        setNovoProjeto({
                            ...novoProjeto,
                            [e.target.name]: e.target.value
                        })
                    }}
                    value={novoProjeto.secretario}
                    required />

                <label htmlFor="fiscal">Fiscais:</label>
                <ListaFiscais
                    novoProjeto={novoProjeto}
                    setNovoProjeto={setNovoProjeto} />
                <div>
                    <input
                        placeholder="Digite o nome do fiscal"
                        id="fiscal"
                        name="fiscal"
                        onChange={e => {
                            e.preventDefault();
                            setFiscalGestor({
                                ...fiscalGestor,
                                [e.target.name]: e.target.value
                            })
                        }}
                        value={fiscalGestor.fiscal}
                    />
                    <BotaoRedondo type="button" onClick={addFiscal}>+</BotaoRedondo>
                </div>

                <label htmlFor="gestor">Gestores:</label>
                <ListaGestores
                    novoProjeto={novoProjeto}
                    setNovoProjeto={setNovoProjeto} />
                <div>
                    <input
                        placeholder="Digite o nome do gestor"
                        id="gestor"
                        name="gestor"
                        value={fiscalGestor.gestor}
                        onChange={e => setFiscalGestor({
                            ...fiscalGestor,
                            [e.target.name]: e.target.value
                        })}
                    />
                    <BotaoRedondo type="button" onClick={() => {
                        addGestor()
                        console.log(novoProjeto)
                    }
                    }>+</BotaoRedondo>
                </div>
                <Botoes>
                    <Botao type="button" transparente={"true"} pequeno={"true"} onClick={() => navigate("/")}>Voltar</Botao>
                    <Botao type="submit" pequeno={"true"} onClick={() => enviarFormulario()}>Próximo</Botao>
                </Botoes>

            </FormWrapper >
        </>
    )
}

const FormWrapper = styled.form`
display: flex;
flex-direction:column;

label{
    font-size: 16px;
    margin: 20px 0px 5px 0px;
}

input{
    font-size: 13px;
    width: 360px;
    height: 25px;
    border-radius:5px;
    border: 1px solid grey;
    padding:5px;
}

textarea{
    width: 360px;
    height: 100px;
    resize: none;
    font-size: 13px;
    border-radius: 5px;
    font-family: "Roboto", sans-serif;
}
::placeholder{
    font-style: italic;
}
div{ 
    display: flex;
    flex-direction: row;
    align-items: center;
}
`

const Botoes = styled.div`
&&{
    width: 360px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;}
    margin: 20px 0px;
`