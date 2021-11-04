import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:4000",
  timeout: 1000,
});

export const busca = async (url, setDado) => {
  const resposta = await api.get(url);
  setDado(resposta.data);
};

export const deletaPredio = async (url) => {
  const resposta = await api.delete(url);
};

export const deletaApartamento = async (url) => {
  const resposta = await api.delete(url);
};
