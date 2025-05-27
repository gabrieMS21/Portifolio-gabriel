// seu_script.js

const formulario = document.querySelector("form");
// Não precisa do 'let json = null;' aqui, a variável será criada dentro da função

class Usuario {
  constructor(nome, email, mensagem) {
    this.nome = nome;
    this.email = email;
    this.mensagem = mensagem;
  }
}

formulario.addEventListener("submit", function (e) {
  e.preventDefault();

  let nomeUsuario = document.getElementById("nome");
  let emailUsuario = document.getElementById("email");
  let mensagemUsuario = document.getElementById("mensagem");

  let usuario = new Usuario(
    nomeUsuario.value,
    emailUsuario.value,
    mensagemUsuario.value
  );

  const jsonParaEnviar = JSON.stringify(usuario); // Cria a string JSON aqui

  fetch("http://127.0.0.1:5000/receber-dados", {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // Dizemos ao servidor que estamos enviando JSON
    },
    body: jsonParaEnviar 
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Erro HTTP! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("Resposta da API:", data);
      alert(data.mensagem);
      // Opcional: Limpar o formulário após o envio bem-sucedido
      formulario.reset(); 
    })
    .catch((error) => {
      console.error("Erro ao enviar dados:", error);
      alert("Erro ao enviar dados para a API.");
    });
});