document.getElementById("cadastroForm").addEventListener("submit", function(event) {
    event.preventDefault();
    validarCadastro();
  });

  function validarCadastro() {
    clearErrors();

    var nome = document.getElementById("nome").value;
    if (nome === "") {
      document.getElementById("nomeError").innerHTML = "O nome é obrigatório.";
      return false;
    }

    var genero = document.querySelector('input[name="genero"]:checked');
    if (!genero) {
      document.getElementById("generoError").innerHTML = "Selecione um gênero.";
      return false;
    }

    var dataNascimento = document.getElementById("dataNascimento").value;
    if (dataNascimento === "") {
      document.getElementById("dataNascimentoError").innerHTML = "A data de nascimento é obrigatória.";
      return false;
    }

    var cpf = document.getElementById("cpf").value;
    if (cpf === "" || !validarCPF(cpf)) {
      document.getElementById("cpfError").innerHTML = "CPF inválido.";
      return false;
    }

    var cnpj = document.getElementById("cnpj").value;
    if (cnpj !== "" && !validarCNPJ(cnpj)) {
      document.getElementById("cnpjError").innerHTML = "CNPJ inválido.";
      return false;
    }

    var cep = document.getElementById("cep").value;
    if (cep === "" || !validarCEP(cep)) {
      document.getElementById("cepError").innerHTML = "CEP inválido.";
      return false;
    }

    var email = document.getElementById("email").value;
    if (email === "" || !validarEmail(email)) {
      document.getElementById("emailError").innerHTML = "E-mail inválido.";
      return false;
    }

    var celular = document.getElementById("celular").value;
    if (celular === "" || !validarCelular(celular)) {
      document.getElementById("celularError").innerHTML = "Celular inválido.";
      return false;
    }

    var senha = document.getElementById("senha").value;
    if (senha === "") {
      document.getElementById("senhaError").innerHTML = "A senha é obrigatória.";
      return false;
    }

    alert("Cadastro realizado com sucesso!");
    return true;
  }

  function clearErrors() {
    var errorElements = document.getElementsByClassName("error");
    for (var i = 0; i < errorElements.length; i++) {
      errorElements[i].innerHTML = "";
    }
  }

  function validarCPF(cpf) {
    // Implemente a validação do CPF aqui
    return true;
  }

  function validarCNPJ(cnpj) {
    // Implemente a validação do CNPJ aqui
    return true;
  }

  function validarCEP(cep) {
    // Implemente a validação do CEP aqui
    return true;
  }

  function validarEmail(email) {
    // Implemente a validação do e-mail aqui
    return true;
  }

  function validarCelular(celular) {
    // Implemente a validação do celular aqui
    return true;
  }