function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.getElementById("redireccion").innerHTML =
      this.responseText;
    }
    xhttp.open("GET", "inscripciones.html");
    xhttp.send();
}