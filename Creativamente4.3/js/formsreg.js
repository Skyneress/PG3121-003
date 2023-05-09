document.getElementById("valEmail").style.display = "none";
document.getElementById("valPass").style.display = "none";
document.getElementById("valNombre").style.display = "none";

function validarForm(){
    if (document.getElementById("txtEmail").value.length == 0) {
        document.getElementById("valEmail").style.display = "inline";
        document.getElementById("txtEmail").classList.add("is-invalid");
    }else{
        document.getElementById("valEmail").style.display = "none";
        document.getElementById("txtEmail").classList.remove("is-invalid");
        document.getElementById("txtEmail").classList.add("is-valid");
    }

    if (document.getElementById("txtPass").value.length == 0) {
        document.getElementById("valPass").style.display = "inline";
        document.getElementById("txtPass").classList.add("is-invalid");
    }else{
        document.getElementById("valPass").style.display = "none";
        document.getElementById("txtPass").classList.remove("is-invalid");
        document.getElementById("txtPass").classList.add("is-valid");
    }
    if (document.getElementById("txtNombre").value.length == 0) {
        document.getElementById("valNombre").style.display = "inline";
        document.getElementById("txtNombre").classList.add("is-invalid");
    }else{
        document.getElementById("valNombre").style.display = "none";
        document.getElementById("txtNombre").classList.remove("is-invalid");
        document.getElementById("txtNombre").classList.add("is-valid");
    
    }

}
