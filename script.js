// 1 Ao carregar a página o JavaScript deve gerar um número aleatório entre 1 e 100 e armazená-lo em uma variável.
let numeroSecreto = Math.floor(Math.random() * 100) + 1;

// 2 Definir o número máximo de tentativas como 10.
let maxTentativas = 10;

// 3 Inicializar um contador de tentativas.
let tentativas = 0;

// 4 Ao clicar no botão "Chutar", o JavaScript deve:
const chuteButton = document.getElementById('chute');
const palpiteInput = document.getElementById('palpite');

function chuteSorte() {
    const palpite = parseInt(palpiteInput.value, 10);
    const novoJogo = document.getElementById('novoJogo').style.display = 'block';

    // 4.1 Verificar se o palpite é um número válido.
    if (isNaN(palpite) || palpite < 1 || palpite > 100) {
        alert("Por favor, insira um número entre 1 e 100.");
        return;
    }

    // 4.2 Incrementar o contador de tentativas.
    tentativas++;

    // 4.3 Exibir o número de tentativas restantes.
    const tentativasRestantes = maxTentativas - tentativas;
    document.getElementById('tentativas').textContent = `Tentativas restantes: ${tentativasRestantes}`;

    // 4.4 Verificar se o palpite está correto, abaixo ou acima do número secreto.
    if (palpite === numeroSecreto) {
        document.getElementById('dicasResultado').textContent = "Parabéns! Você acertou!";
        chuteButton.disabled = true; // Desabilitar o botão após acertar
        novoJogo
    } else if (palpite < numeroSecreto) {
        document.getElementById('dicasResultado').textContent = "O número secreto é maior.";
    } else {
        document.getElementById('dicasResultado').textContent = "O número secreto é menor.";
    }

    // 4.5 Se as tentativas acabarem, exibir uma mensagem de derrota e o número secreto.
    if (tentativas >= maxTentativas) {
        document.getElementById('dicasResultado').textContent = `Você perdeu! O número secreto era ${numeroSecreto}.`;
        chuteButton.disabled = true; // Desabilitar o botão após perder
        novoJogo
    }
    // Limpar o campo de entrada
    palpiteInput.value = '';
}
// 5 Ao clicar no botão "Novo Jogo", o JavaScript deve:
    document.getElementById('novoJogo').addEventListener('click', () => {
    location.reload(); // Isso recarrega a página inteira
});