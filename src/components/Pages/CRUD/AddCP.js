import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";
import Navbar from "../../Navbar";
import Select from 'react-select';

const AddCP = () => {
  let history = useHistory();
  const [cp, setCP] = useState({
    nome: "",
    descricao: "",
    multa: "",
    tempoPrisao: "",
    status: "",
  });

  const { nome, descricao, multa, tempoPrisao, status} = cp;
  const onInputChange = e => {
    setCP({ ...cp, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("https://my-json-server.typicode.com/cidadealta/exercise/codigopenal", cp);
    history.push("/Home");
  };

  const options = [
    { value: '1', label: '🟢 Ativa' },
    { value: '2', label: '🔴 Inativo' }
  ];

  return (
    <div className="container">
      <Navbar />
      <div className="w-70 mx-auto shadow p-5">
        <h2 className="text-center mb-5">Novo Registro</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Nome"
              name="nome"
              value={nome}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Descrição"
              name="descricao"
              value={descricao}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Preço da multa"
              name="multa"
              value={multa}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Tempo de prisão"
              name="tempoPrisao"
              value={tempoPrisao}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <Select options = {options} placeholder = {status === 1 ? '🟢 Ativa': '🔴 Inativo' }/>
          </div>
          <button className="btn btn-primary btn-block">Adicionar</button>
        </form>
      </div>
    </div>
  );
};

export default AddCP;
