import {capturaHtml, salidaTexto, limpiarCajaTexto} from "./my-functions.js";

let txtNombre = capturaHtml("txtNombre");
let txtTelefono = capturaHtml("txtTelefono");
let txtEmail = capturaHtml("txtEmail");
let btnEnviar = capturaHtml("btnEnviar");
let pTexto = capturaHtml("pTexto");

function mostrar(){
  salidaTexto("pTexto", txtNombre.value);
  //salidaTexto("pTexto", txtTelefono.value);
  window.alert(txtNombre.value);
  //window.alert(txtTelefono.value);
}

btnEnviar.addEventListener("click", mostrar);