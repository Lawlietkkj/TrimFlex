 // Função para verificar se o usuário chegou ao final da página
 function chegouAoFinalDaPagina() {
    return (window.innerHeight + window.scrollY) >= document.body.offsetHeight;
}

// Função para carregar a próxima página
function carregarProximaPagina() {
    // Verifica se já carregou a próxima página para evitar carregar repetidamente
    if (!carregandoProximaPagina) {
        carregandoProximaPagina = true;

        // Simula o carregamento da próxima página por 2 segundos
        setTimeout(function() {
            // Redireciona para a próxima página
            window.location.href = 'proxima_pagina.html'; // pelo URL da próxima página
        }, 2000);
    }
}

// Variável para controlar se a próxima página está sendo carregada
var carregandoProximaPagina = false;

// Evento de rolagem da janela
window.addEventListener('scroll', function() {
    if (chegouAoFinalDaPagina()) {
        carregarProximaPagina(); // Carrega a próxima página quando o usuário chega ao final da página
    }
});


