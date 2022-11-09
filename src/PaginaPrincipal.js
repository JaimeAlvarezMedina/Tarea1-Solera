import React from 'react';

function Equipos(props) {
  return (
    <div id={props.id} class="cuadro">
      <h1>{props.ename}</h1>
      <h2>{props.puntuacion}</h2>
    </div>
  );
}

class Principal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: "", info_equip: [

        {

          id: 1,

          name: 'Equipo AA',
          puntuacion:0
        },

        {

          id: 2,

          name: 'Arenal+',
          puntuacion:0
        },

        {

          id: 3,

          name: 'Cruce de Banderas',
          puntuacion:0
        },

        {

          id: 4,

          name: 'Lunera',
          puntuacion:0
        },

        {

          id: 5,

          name: 'Degara',
          puntuacion:0
        },

        {

          id: 6,

          name: 'Codepirinha',
          puntuacion:0
        },

        {

          id: 7,

          name: 'JSLovers',
          puntuacion:0
        },

        {

          id: 8,

          name: 'Bugabit',
          puntuacion:0
        },

        {

          id: 9,

          name: 'Los Pibes del Fondo',
          puntuacion:0
        },

        {

          id: 10,

          name: 'Valle Silicona',
          puntuacion:0

        },

      ]
    };

    this.detalles = this.ir_detalles.bind(this);
  }


  ir_detalles(event) {
    let id_grupo = event.target.id;
    window.location.href = "/info";
  }



  render() {
    return (
      <div id="root">

        <header>
          <h1>Puntuaciones de los equipos</h1>
        </header>

        <main>
          <div onClick={this.detalles}>
            {this.state.info_equip.map((equipo) => <Equipos id={equipo.id} ename={equipo.name} puntuacion={equipo.puntuacion} />)}
          </div>
        </main>

        <footer></footer>

      </div>
    )
  }


}

export default Principal;
