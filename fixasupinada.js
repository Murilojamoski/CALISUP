const inputEL = document.getElementById("rep");
const paragrafoEL = document.getElementById("paragrafo");
const rankEl = document.getAnimations("rank");
let rankp = "";
const ranks = ["BRONZE I", "BRONZE II", "BRONZE III", "PRATA I", "PRATA II", "PRATA III", "OURO I", "OURO II", "OURO III", "DIAMANTE I", "DIAMANTE II", "DIAMANTE III", "MESTRE I", "MESTRE II", "MESTRE III", "PLATINA"];
const rank = "fixasupinada";

if (localStorage.length > 0) {
        paragrafoEL.innerHTML = `seu rank Atual é 
        <br> <br> 
        ${JSON.parse(localStorage.getItem(rank))}`;
}

function RANKS(rankA){
        rankp = rankA;
        paragrafoEL.innerHTML = `Seu maximo foi ${inputEL.value} repetiçoes seu rank é: 
        <br> <br> 
        ${rankp}`;
        localStorage.setItem(rank, JSON.stringify(rankA));
}
inputEL.addEventListener('keyup', function(e){
  let key = e.which || e.keyCode;
  if (key == 13) {
        if (inputEL.value < 3){RANKS(ranks[0]);}
        if (inputEL.value >= 6){RANKS(ranks[1]);}
        if (inputEL.value >= 9){RANKS(ranks[2]);}
        if (inputEL.value >= 12){RANKS(ranks[3]);}
        if (inputEL.value >= 15){RANKS(ranks[4]);}
        if (inputEL.value >= 18){RANKS(ranks[5]);}
        if (inputEL.value >= 21){RANKS(ranks[6]);}
        if (inputEL.value >= 24){RANKS(ranks[7]);}
        if (inputEL.value >= 27){RANKS(ranks[8]);}
        if (inputEL.value >= 30){RANKS(ranks[9]);}
        if (inputEL.value >= 33){RANKS(ranks[10]);}
        if (inputEL.value >= 36){RANKS(ranks[11]);}
        if (inputEL.value >= 39){RANKS(ranks[12]);}
        if (inputEL.value >= 42){RANKS(ranks[13]);}
        if (inputEL.value >= 45){RANKS(ranks[14]);}
        if (inputEL.value >= 50){RANKS(ranks[15]);}
  }
});

