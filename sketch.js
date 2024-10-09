// terror, comédia, mistério, ação

// Noites brutais, 18, terror
// O auto da compadecida, 12, comédia
// A freira, 16, terror
// A proposta, 12, comédia
// Casamento grego, livre, comédia
// Os farrofeiros,12, comédia
// A maldição de Raven's hollow, 16, mistério, terror
// Casamento Sangrento, 18, terror, comédia
// Piratas do caribe: A maldição do perola negra, 14, ação
// O jogo da Morte, 14, terror

let campoIdade;
let campoTerror;
let campoComédia;

function setup() {
  createCanvas(800, 400);
  createElement("h2","Recomendador de filmes");
  createSpan("Sua idade");
  campoIdade = createInput("5");
  campoTerror = createCheckbox ("gosta de terror ?");
  campoComédia = createCheckbox ("gosta de Comédia ?");
}

function draw() {
  background("white");
  let idade = campoIdade.value();
  let gostaDeTerror = campoTerror.checked();
  let gostaDeComédia = campoComédia.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeTerror, gostaDeComédia);
  
  fill(color(76, 0, 115));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeTerror,gostaDeComédia) {
    if(idade >= 14) {
        if(idade >= 16) {
            return "O Jogo da Morte";
        } else {
          if(idade >= 15) {
          }
            if(gostaDeTerror){
                return "A freira";
            } else {
                return "A maldição de Raven's hollow";
            }
        }
    } else {
        if(gostaDeTerror || gostaDeComédia) {
            return "Casamento Sangrento";
        } else {
            return "A proposta";
        }
    }
}
