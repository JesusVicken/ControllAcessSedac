function logar(){
    var email = document.getElementById("email");
    var senha = document.getElementById("senha");

    if (email.value === "admin@admin" && senha.value === "admin"){
        localStorage.setItem("acesso", true);

        window.location.href = "request.html";
    }else{
        window.alert("Usuário ou senha inválida");
    };
};
