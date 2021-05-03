import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import Navbar from "../../Navbar";
import Select from 'react-select';

const EditCP = () => {
  let history = useHistory();
  const { id } = useParams();
  const [cp, setCP] = useState({
    nome: "",
    descricao: "",
    multa: "",
    tempoPrisao: "",
    status: "",
  });

  const { nome, descricao, multa, tempoPrisao, status } = cp;
  const onInputChange = e => {
    setCP({ ...cp, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    carregarCP();
    // eslint-disable-next-line
  }, []);

  const onSubmit = async e => {
    await axios.put(`https://my-json-server.typicode.com/cidadealta/exercise/codigopenal/${id}`, cp);
    history.push("/");
  };

  const carregarCP = async () => {
    const result = await axios.get(`https://my-json-server.typicode.com/cidadealta/exercise/codigopenal/${id}`);
    setCP(result.data);
  };

  const options = [
    { value: '1', label: '🟢 Ativa' },
    { value: '2', label: '🔴 Inativo' }
  ];

  return (
    <div className="container">
      <Navbar />
      <div className="w-70 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Editar Código Penal</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
          <h5>Nome:</h5>
            <input
              type="text"
              className="form-control form-control-lg"
              name="nome"
              value={nome}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
          <h5>Descrição:</h5>
            <input
              type="text"
              className="form-control form-control-lg"
              name="descricao"
              value={descricao}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
          <h5>Valor da multa:</h5>
            <input
              type="text"
              className="form-control form-control-lg"
              name="multa"
              value={multa}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
          <h5>Tempo de prisão:</h5>
            <input
              type="text"
              className="form-control form-control-lg"
              name="tempoPrisao"
              value={tempoPrisao}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <h5>Status:</h5>
            <Select options = {options} placeholder={status === 1 ? '🟢 Ativa': '🔴 Inativo' }/>
          </div>
          <button className="btn btn-warning btn-block" 
            onClick={() => {
              const confirmBox = window.confirm(
                "Deseja realmente editar?"
              )
            if (confirmBox === true) {
              onSubmit(cp.id)
            }
          }}onSubmit>Editar</button>
        </form>
      </div>
    </div>
  );
};

export default EditCP;
