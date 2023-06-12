document.getElementById("formulario-contacto").addEventListener("submit", function(event) {
    event.preventDefault();

    let nombre = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let txt = document.getElementById("txt").value;
    
    if(nombre===""){
      alert("Porfavor ingrese el nombre...");
      return false;
    }
    if(email===""){
      alert("Porfavor ingrese el email...");
      return false;
    }
    if(txt===""){
      alert("Porfavor ingrese el texto...");
      return false;
    }

    this.submit();

}
);