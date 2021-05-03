import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../../Navbar";
import moment from 'moment'
import 'moment/locale/pt-br'

const Home = () => {
  const [CRUD, setCRUD] = useState([]);

  useEffect(() => {
    loadCP();
  }, []);

  const loadCP = async () => {
    const result = await axios.get("https://my-json-server.typicode.com/cidadealta/exercise/codigopenal");
    setCRUD(result.data);
  };

  const deleteCP = async id => {
    await axios.delete(`https://my-json-server.typicode.com/cidadealta/exercise/codigopenal/${id}`);
    loadCP();
  };

  const [searchTerm, setSearchTerm] = useState('')
  
  return (
    <div className="container">
      <Navbar />
      <div className="py-5">
        <h2>Painel do Código Penal</h2>
        <form class="mb-2">
          <input type="search" class="form-control col-6 col-md-4" onChange={event =>{setSearchTerm(event.target.value)}} placeholder="Procurar..."/>
        </form>
        <table class="table border shadow">
          <thead class="thead-dark">
            
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nome</th>
              <th scope="col">Data de criação</th>
              <th scope="col">
                Multa
              
              </th>
              <th scope="col">Status</th>
              <th scope="col">Editar</th>
            </tr>
          </thead>
          <tbody>
            {CRUD.filter((CRUD) => {
              if (searchTerm === "") {
                return CRUD
              } else if (CRUD.nome.toLowerCase().includes(searchTerm.toLowerCase())){
                return CRUD
              }
            }).map((CRUD, index) => (
              <tr>
                <th>{CRUD.id}</th>
                <td>{CRUD.nome}</td>
                <td>{moment(CRUD.dataCriacao).locale('pt-br').format('LLL')}</td>
                <td>R$ {CRUD.multa}</td>
                <th>{CRUD.status === 1 ? '🟢 Ativa': '🔴 Inativo' }</th> 
                <td>
                  <Link class="btn btn-primary" to={`/CRUD/${CRUD.id}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
                      <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                      <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                    </svg>
                  </Link>
                  <Link
                    class="btn btn-outline-primary"
                    to={`/CRUD/edit/${CRUD.id}`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                      <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                    </svg>
                  </Link>
                  
                  <Link
                    class="btn btn-danger"
                    onClick={() => {
                      const confirmBox = window.confirm(
                        "Deseja realmente deletar?"
                      )
                      if (confirmBox === true) {
                        deleteCP(CRUD.id)
                      }
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                      <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                    </svg>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
