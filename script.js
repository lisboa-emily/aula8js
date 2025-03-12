function logar() {
    
    var usuario =document.getElementById('inputUsuario').value;
    var senha =document.getElementById('inputSenha').value;

    if(usuario == "emily" && senha == "1234") {
        window.location = "/page.html"
    } else { 
        alert("Usuario/Senha incorretos! Tente novamente")
    }
}

function calcular() {
    //Variáveis
    var nota1 = parseInt (document.getElementById('nota1').value);
    var nota2 = parseInt (document.getElementById('nota2').value);
    var nota3 = parseInt (document.getElementById('nota3').value);
    var nota4 = parseInt (document.getElementById('nota4').value);
    var media = (nota1 + nota2 + nota3 + nota4) / 4

    //concatenar - Texto + variável
    document.getElementById('notaResultado1').innerHTML = "nota 1: " + nota1
    document.getElementById('notaResultado2').innerHTML = "nota 2: " + nota2
    document.getElementById('notaResultado3').innerHTML = "nota 3: " + nota3
    document.getElementById('notaResultado4').innerHTML = "nota 4: " + nota4

    if(media === 10) {
        document.getElementById ("mediaAluno").innerHTML = "Exelente Aluno"
    }
    else if(media >= 7) {
        document.getElementById ("mediaAluno").innerHTML = "Aprovado"
    } else {
        document.getElementById ("mediaAluno").innerHTML = "Reprovado"
    }
}