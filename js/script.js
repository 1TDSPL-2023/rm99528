const h2Element = document.getElementById("titulo");
h2Element.addEventListener("click",  ()=> {
    //MATH FUNCTION
    //Os métodos floor, round e ceil arredondam os numeros passados
    //O método randon retorna um número entre 0 e 1. Ex: 0.5842
    let r = "";
    let g = "";
    let b = "";

    r = Math.round(Math.random()*255);
    g = Math.round(Math.random()*255);
    b = Math.round(Math.random()*255);
    console.log(r);

    h2Element.textContent = "NOVO TÍTULO";
    //h2Element.setAttribute("style","color: rgb("+r+","+g+","+b+");");
    h2Element.setAttribute("style",`color: rgb(${r},${g},${b});`);
    
});

const imgElements = [...document.querySelectorAll(".conteudo img")];

imgElements.forEach((img)=>{
    img.setAttribute("style","width:20%;")
});

const inputUser = document.querySelector("input[type='email']");

inputUser.addEventListener("focus", ()=>{
    inputUser.setAttribute("style","outline-color:#ffff99")
});

inputUser.addEventListener("keyup", ()=>{
    const lblUser = document.querySelector("label[for='idEmail']")
    if(inputUser.value.length < 5){
        lblUser.innerHTML = "<span style='color:#ffff99'> Email : (Mínimo de 5 caracteres)</span>"
        inputUser.setAttribute("style","outline-color:#ffff99")
    }else{
        lblUser.innerHTML = "<span style='color:#ff9999'>Email</span>"
        inputUser.setAttribute("style","outline-color:#ff9999")
    }
});

//SENHA
const eyePass = document.querySelector(".fa-eye");
eyePass.addEventListener("click",()=>{
    const inputPass = document.querySelector("#idSenha");
    //alterar o type
    if(inputPass.getAttribute("type") == "password"){
        inputPass.setAttribute("type","text");
        eyePass.setAttribute("class","fa fa-eye-slash");

    }else{
        inputPass.setAttribute("type","password");
        eyePass.setAttribute("class","fa fa-eye");


    }
});
