// Adiciona um event listener para o botão 'toggleButton'
document.getElementById('toggleButton').addEventListener('click', function() {
  // Obtém o elemento de menu com ID 'menu'
  var menu = document.getElementById('menu');
  // Alterna a exibição do menu entre 'block' (visível) e 'none' (invisível)
  menu.style.display = (menu.style.display === 'none' || menu.style.display === '') ? 'block' : 'none';
});

// Adiciona um event listener para o botão 'toggleButton-2'
document.getElementById('toggleButton-2').addEventListener('click', function() {
  // Obtém o elemento de menu com ID 'menu-2'
  var menu2 = document.getElementById('menu-2');
  // Alterna a exibição do menu entre 'block' (visível) e 'none' (invisível)
  menu2.style.display = (menu2.style.display === 'none' || menu2.style.display === '') ? 'block' : 'none';
});

// Inicializa uma variável global para armazenar os nomes dos times selecionados em cada menu
var selectedTeam = ["", ""];

// Função chamada quando uma imagem de time é selecionada
function displayImage(src, menuNumber, teamName) {
  // Obtém o ID do elemento de exibição da imagem
  var displayId = 'displayImage-' + menuNumber;
  var display = document.getElementById(displayId);
  // Exibe a imagem selecionada ao lado do botão de menu correspondente
  display.innerHTML = '<img src="' + src + '" alt="Displayed Image">';
  // Armazena o nome do time selecionado na variável global
  selectedTeam[menuNumber - 1] = teamName;
  // Reativa o botão 'Ver Acurácia'
  acuraciaClicada = false;
  // Esconde o menu após selecionar um time
  var menuId1 = 'menu' + menuNumber;
  document.getElementById('menu').style.display = 'none';
  var menuId = 'menu-' + menuNumber;
  document.getElementById(menuId).style.display = 'none';
}

// Variável global que controla se o botão 'Ver Acurácia' foi clicado
var acuraciaClicada = false;

// Função chamada quando o botão 'Ver Acurácia' é clicado
function verAcuracia() {
  // Impede múltiplos cliques no botão
  if(acuraciaClicada) {
    return;
  }

  // Verifica se os dois times foram selecionados
  if (!selectedTeam[0] || !selectedTeam[1]) {
    alert("Você precisa inserir os dois times.");
    return;
  } else if (selectedTeam[0] == selectedTeam[1]) {
    alert("Não é possível calcular times iguais.");
    return;
  } else {
    // Seleciona aleatoriamente um dos times como vencedor
    var team1 = selectedTeam[0] || "time 1";
    var team2 = selectedTeam[1] || "time 2";
    var winnerText = 'O time vencedor é ' + (Math.random() > 0.5 ? team1 : team2) + "!";
    // Exibe o resultado do vencedor
    document.querySelector('.principal__titulo').textContent = winnerText;

    // Gera uma porcentagem aleatória como "acurácia"
    var porcentagem =  getRandomInt(1, 100) + '%';
    var porcentagemAcuracia = `${porcentagem} de acurácia`;
    // Exibe a porcentagem de acurácia
    document.querySelector('.acuracia__texto').textContent = porcentagemAcuracia;
    // Esconde os menus após clicar em 'Ver Acurácia'
    document.getElementById('menu').style.display = 'none';
    document.getElementById('menu-2').style.display = 'none';
    // Define a flag para impedir cliques repetidos no botão
    acuraciaClicada = true;
  }
}

// Função que retorna um número inteiro aleatório dentro de um intervalo especificado
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
