import { Fragment } from "react";

export function FormularioBienvenida(){
    return (
        <Fragment>
            <h2> Formulario </h2>
            Nombres:  <input type="text"></input>

            Apellidos:  <input type="text"></input>

            Correo:  <input type="text"></input>

            Telefono:  <input type="text"></input>

            Otro:  <input type="text"></input>
        </Fragment>
    );
}