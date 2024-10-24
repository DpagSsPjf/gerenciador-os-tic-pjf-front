import axios from "axios";

const ulrApi = process.env.REACT_APP_BASE_URL;

function criarNovoProjeto(novoProjeto) {
    const promise = axios.post(`${ulrApi}projeto`, novoProjeto);
    return promise;
}

function listarProjetos() {
    const promise = axios.get(`${ulrApi}projeto`);
    return promise;
}

export { criarNovoProjeto, listarProjetos }