import React, { Component } from 'react';

class Students extends Component{
    constructor(props) {
        super(props);
        this.state = {
            studentList :[
                {nombre: 'Mario',apellido: 'Flores', numeroCuenta: 21711252},
                {nombre: 'Nelson',apellido: 'Paredes', numeroCuenta: 21715634},
                {nombre: 'Marcela',apellido: 'Kilgore', numeroCuenta: 21711234}
            ]
        };
    }
    render(){
        const listStudents = (studentL) => {
            return (
                <div>
                    <li>{studentL.numeroCuenta} - {studentL.nombre} - {studentL.apellido}</li>
                </div>
            );
        };
        return(
            <div>
                <ul>
                    {this.state.studentList.map(listStudents)}
                </ul>
            </div>
        );
    }
};

export default Students;