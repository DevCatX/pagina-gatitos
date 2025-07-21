// Estas son funciones creadas por mi mismo 
export function capturaHtml(elemento){
  return document.getElementById(elemento);
}

export function salidaTexto(elemento, texto){
  let elementoHtml = document.getElementById(elemento);
  elementoHtml.innerHTML = texto;
  return;
}

export function limpiarCajaTexto(elemento){
  return document.getElementById(elemento).value = "";
}
