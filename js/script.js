const imgElements = [...document.querySelectorAll(".conteudo img")];

imgElements.forEach((img)=>{
    img.setAttribute("style" , "width: 20%")
});


const inputUser = document.querySelector("input[type = 'email']");

inputUser.addEventListener("focus", ()=>{
    inputUser.setAttribute("style", "outline-color: #ff0000")
});

inputUser.addEventListener("keyup", ()=>{
    const lbUser = document.querySelector("label[for='idEmail']")
    if(inputUser.value.length < 5 ){
        lbUser.innerHTML = "<span style= 'color : #FF0000'> Email : (mínimo de 5 caracteres)</span>";

        console.log(inputUser.value);
        inputUser.setAttribute("style", "outline-color: #ff0000");
    }
    else{
        console.log(inputUser.value.length)
        lbUser.innerHTML = "<span style =  'color : #00FF00'>Email</span>";
        inputUser.setAttribute("style" , "outline-color: #00ff00")
    }
    
});

//mostrar senha

const eyePass = document.querySelector(".fa-eye");

eyePass.addEventListener("click", ()=>{
    const inputPass = document.querySelector("#idSenha");

    //Alterar o type
    if(inputPass.getAttribute("type") == "password"){
        inputPass.setAttribute("type" , "text")
        eyePass.setAttribute("class", "fa fa-eye-slash" );
    }else{
        eyePass.setAttribute("class", "fa fa-eye" );
        inputPass.setAttribute("type", "password");
    }
});