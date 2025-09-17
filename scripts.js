document.addEventListener('DOMContentLoaded', function () {
    const hamburgerButton = document.querySelector('.headerMenu__hamburger');
    const navMenu = document.querySelector('#main-nav');
    const contactButton = document.querySelector('.headerMenu__btnContact');

    hamburgerButton.addEventListener('click', function () {
        navMenu.classList.toggle('active');
        contactButton.classList.toggle('active');
        const isExpanded = hamburgerButton.getAttribute('aria-expanded') === 'true';
        hamburgerButton.setAttribute('aria-expanded', !isExpanded);
    });
});

$(document).ready(function () {

    $("#contact-form").submit(function (event) {

        let nome = $("#name").val().trim();
        let email = $("#email").val().trim();
        let mensagem = $("#message").val().trim();

        if (nome === "") {
            alert("Por favor, preencha o campo Nome.");
            event.preventDefault();
            return false;
        }

        if (email === "") {
            alert("Por favor, preencha o campo Email.");
            event.preventDefault();
            return false;
        }

        if (mensagem === "") {
            alert("Por favor, escreva uma mensagem.");
            event.preventDefault();
            return false;
        }

        alert("Formulário enviado com sucesso! Você será redirecionado para a página inicial.");
        // return true;
        event.preventDefault();
        window.location.href = "index.html";
    });

});