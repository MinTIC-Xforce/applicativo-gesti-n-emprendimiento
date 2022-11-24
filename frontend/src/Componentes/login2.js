import { Fragment } from "react";
import { useState } from "react";
import JsonData from "../data/UsuariosEjemplo.json";

import '../Estilos/Login.css';


export function Login() {

    const [data, setDate] = useState({
        user: "",
        pass: "",
        date: ""
    }
    )


    return (

        <Fragment>
            <center>
                <div id="divLogin">
                    <h3>Ingreso - Venta - Productos industriales</h3>
                    <label>Usuario
                        <input type="User" onChange={(e) => {
                            setDate({ ...data, user: e.target.value })
                        }
                        } ></input>
                    </label>
                    <br></br>
                    <br></br>
                    <label>Contraseña
                        <input type="pass" onChange={(e) => {
                            setDate({ ...data, pass: e.target.value })
                            
                        }
                        
                        } ></input>
                    </label>
                    <br></br>
                    <br></br>
                    <button onClick={VerInfo} >Ingresar</button>

                </div>
            </center>
        </Fragment>


    );

    function Validacion(usuarioNombre, contrasena) {

        var decision = false;
        var datos = JsonData; //Integra o con express o con mongoDb   


        for (const usuario of datos) {            
            if (usuarioNombre === usuario.user && contrasena === usuario.pass) {
                decision = true;
            } 
        }
        return decision;
    }

    

    function VerInfo() {

        // eslint-disable-next-line eqeqeq

        console.log(Validacion(data.user, data.pass))
        if (Validacion(data.user, data.pass)) {
            alert("El usuario ingresado es correcto")
        } else {
            alert("Por favor verifique los datos ingresados")
        }
    }
}

/*

return  fetch(`http://localhost:4000/user/${usuarioNombre}`,{mode:"no-cors", headers: headers})
.then((resp) => resp.json())
.then((resp) => {
    console.log("JSON1 resp " + JSON.stringify(resp.json()))
    console.log("JSON2 resp " + resp.userName)
    console.log("Datos : " + usuarioNombre + contrasena )
    console.log(decision)

for (const usuario of resp) {            
    if (usuarioNombre === usuario.userName && contrasena === usuario.passwordUser) {
        console.log("TRUE")
        decision = true;
    } 
    console.log("FALSE")
}
console.log(decision)
return decision;



}).catch ((err) => {console.log(err)
return decision
})

await fetch('https://api.github.com/users/dosorio31')
    // Exito
    .then(response => response.json())  // convertir a json
    .then(json => console.log(json))    //imprimir los datos en la consola
    .catch(err => console.log('Solicitud fallida', err)); // Capturar errores

    await fetch("http://localhost:4000/products")
            .then((resp) => resp.json())
            .then((resp) => {
                console.log(resp)
                return (resp)
            })
            .catch((err) => console.log(err));
      }
*/