import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      longitude: null,
      estacao: null,
      data: null,
      icone: null,
      mensagemDeErro: null,
    };
  }

  obterEstacao = (data, latitude) => {
    const anoAtual = data.getFullYear();
    //21/06
    const d1 = new Date(anoAtual, 5, 21);
    //24/09
    const d2 = new Date(anoAtual, 8, 24);
    //22/12
    const d3 = new Date(anoAtual, 11, 22);
    //21/03
    const d4 = new Date(anoAtual, 2, 21);
    const sul = latitude < 0;
    // 21/06 até 24/09
    if (data >= d1 && data < d2) return sul ? "Inverno" : "Verão";
    // 24/09 até 22/12
    if (data >= d2 && data < d3) return sul ? "Primavera" : "Outono";
    // 22/12 até 21/03
    if (data >= d3 && data < d4) return sul ? "Verão" : "Inverno";
    // 21/03 até 21/06
    return sul ? "Outono" : "Primavera";
  };
  icones = {
    Primavera: "fa-seedling",
    Verão: "fa-umbrella-beach",
    Outono: "fa-tree",
    Inverno: "fa-snowman",
  };

  obterLocalizacao = () => {
    window.navigator.geolocation.getCurrentPosition(
      (posicao) => {
        let data = new Date();
        let estacao = this.obterEstacao(data, posicao.coords.latitude);
        let icone = this.icones[estacao];
        console.log(icone);
        this.setState({
          latitude: posicao.coords.latitude,
          longitude: posicao.coords.longitude,
          estacao: estacao,
          data: data.toLocaleTimeString(),
          icone: icone,
        });
      },
      (erro) => {
        this.setState({ mensagemDeErro: "Tente novamente mais tarde!!" });
      }
    );
  };

  render() {
    // código JSX que será atribuído à árvore DOM
    return (
      <div className="container mt-2">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card">
              <div className="card-body">
                <div
                  className="d-flex align-items-center border rounded mb-2"
                  style={{ height: "6rem" }}
                >
                  <i className={`fas fa-5x ${this.state.icone}`}></i>
                  <p className=" w-75 ms-3 text-center fs-1">
                    {this.state.estacao}
                  </p>
                </div>
                <div>
                  <p className="text-center">
                    {this.state.latitude
                      ? `Coordenadas: ${this.state.latitude},
                    ${this.state.longitude}. Data: ${this.state.data}`
                      : this.state.mensagemDeErro
                      ? `${this.state.mensagemDeErro}`
                      : "Clique no botão para saber a sua estação climática"}
                  </p>
                  <button
                    onClick={this.obterLocalizacao}
                    className="btn btn-outline-primary w-100 mt-2"
                  >
                    Qual a minha estação?
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
