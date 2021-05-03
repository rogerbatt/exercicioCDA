import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../../Navbar";
import moment from 'moment'
import 'moment/locale/pt-br'

const VerCP = () => {
  const [cp, setCP] = useState({
    nome: "",
    descricao: "",
    multa: "",
    tempoPrisao: "",
    dataCriacao: "",
    status: "",
  });
  const { id } = useParams();
  useEffect(() => {
    carregarCP();
  // eslint-disable-next-line
  }, []);
  const carregarCP = async () => {
    const res = await axios.get(`https://my-json-server.typicode.com/cidadealta/exercise/codigopenal/${id}`);
    setCP(res.data);
  };
  return (
    <div className="container">
      <Navbar />
      <h1 className="display-4 mt-5">Código nº: {id} - {cp.nome}</h1>
      <hr />
      <ul className="list-group">
        <li className="list-group-item">Nome: {cp.nome}</li>
        <li className="list-group-item">Descrição: {cp.descricao}</li>
        <li className="list-group-item">Multa: R$ {cp.multa}</li>
        <li className="list-group-item">Tempo de prisão: {cp.tempoPrisao}</li>
        <li className="list-group-item">Data de criação: {moment(cp.dataCriacao).locale('pt-br').format('LLL')}</li>
        <li className="list-group-item">Status: {cp.status === 1 ? '🟢 Ativa': '🔴 Inativo' }</li>
      </ul><br/>
      <Link className="btn btn-primary" to="/Home">
        Voltar
      </Link>
    </div>
  );
};

export default VerCP;
