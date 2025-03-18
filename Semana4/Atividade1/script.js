document.addEventListener("DOMContentLoaded", function () {
    const formProfessor = document.getElementById("form-professor");
    const formAluno = document.getElementById("form-aluno");
    const radios = document.querySelectorAll('input[name="tipo"]');

    radios.forEach(radio => {
        radio.addEventListener("change", function () {
            if (this.value === "professor") {
                formProfessor.style.display = "block";
                formAluno.style.display = "none";
            } else {
                formAluno.style.display = "block";
                formProfessor.style.display = "none";
            }
        });
    });

    formProfessor.addEventListener("submit", function (event) {
        event.preventDefault(); 

        const dadosProfessor = {
            nome: document.getElementById("nome-prof").value,
            email: document.getElementById("email-prof").value,
            dataNascimento: document.getElementById("data-prof").value,
            telefoneFixo: document.getElementById("fixo-prof").value,
            telefoneCelular: document.getElementById("cel-prof").value,
            area: document.getElementById("area-prof").value,
            lattes: document.getElementById("lattes-prof").value
        };

        console.log("Dados do Professor:", dadosProfessor);
        alert("Cadastro de professor enviado com sucesso!");
        formProfessor.reset();
    });

    formAluno.addEventListener("submit", function (event) {
        event.preventDefault(); 

        const dadosAluno = {
            nome: document.getElementById("nome-aluno").value,
            email: document.getElementById("email-aluno").value,
            dataNascimento: document.getElementById("data-aluno").value,
            telefoneFixo: document.getElementById("fixo-aluno").value,
            telefoneCelular: document.getElementById("cel-aluno").value,
            curso: document.getElementById("curso-aluno").value,
            matricula: document.getElementById("matricula-aluno").value
        };

        console.log("Dados do Aluno:", dadosAluno);
        alert("Cadastro de aluno enviado com sucesso!");
        formAluno.reset();
    });
});