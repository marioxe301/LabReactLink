import React, { Component } from 'react';

class Classes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            classtList :[
                {nombre: 'Teoria de base de datos 2',codigoClase: 21},
                {nombre: 'Experiencia de Usuario',codigoClase: 23},
                {nombre: 'Sistemas de Gestion', codigoClase: 26}
            ]
        };
    }
    render(){
        const listCl = (studentC) => {
            return (
                <div>
                    <li>{studentC.codigoClase} - {studentC.nombre}</li>
                </div>
            );
        };
        return(
            <div>
                <ul>
                    {this.state.classtList.map(listCl)}
                </ul>
            </div>
        );
    }
};

export default Classes;