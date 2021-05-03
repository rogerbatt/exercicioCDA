import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import api from "../../../services/api";
import Logo from "../../Assets/logoCDA.png";

import { Form, Container } from "./style";

class Login extends Component {
  state = {
    nome: "",
    senha: "",
    error: ""
  };

  handleLogin = async e => {
    e.preventDefault();
    const { nome, senha } = this.state;
    if (!nome || !senha) {
      this.setState({ error: "Preencha todos os dados para entrar." });
    } else {
      try {
        await api.post("/usuarios", { nome, senha });
        this.props.history.push("/usuarios");
      } catch (err) {
        console.log(err);
        this.setState({ error: "Ocorreu um erro, contate o administrador." });
      }
    }
  };
  render() {
    return (
      <Container>
        <Form onSubmit={this.handleLogin}>
        <img src={Logo} alt="CDA logo" />
          {this.state.error && <p>{this.state.error}</p>}
          <input
            type="text"
            placeholder="Nome de usuário"
            onChange={e => this.setState({ nome: e.target.value })}
          />
          <input
            type="password"
            placeholder="Senha"
            onChange={e => this.setState({ senha: e.target.value })}
          />
          <hr />
          <Link to="/Home">Entrar</Link>
        </Form>
      </Container>
    );
  }
}

export default withRouter(Login);
