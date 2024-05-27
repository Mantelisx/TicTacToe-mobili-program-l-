let btnRef = document.querySelectorAll(".button-option");
let popupRef = document.querySelector(".popup");
let newgameBtn = document.getElementById("new-game");
let restartBtn = document.getElementById("restart");
let msgRef = document.getElementById("message");

let zaidimas = document.querySelector(".game");
let zaidejai = document.querySelector(".names");
let kieno_eile1 = document.getElementById("eile1");
let kieno_eile2 = document.getElementById("eile2");



 let linkOne = document.getElementById("show_id");
  let linkTwo = document.getElementById("show_id1");
 let myVariable = false;

let rezultatasX = 0;
let rezultatasO = 0;
//Laimejimų masyvas
let Laimejimai = [
  [0, 1, 2],
  [0, 3, 6],
  [2, 5, 8],
  [6, 7, 8],
  [3, 4, 5],
  [1, 4, 7],
  [0, 4, 8],
  [2, 4, 6],
];

//1 žaidėjas X
let xTurn = true;
let count = 0;

//išjungti visus mygtukus
const disableButtons = () => {
  btnRef.forEach((element) => (element.disabled = true));
  //įjungti popup
  popupRef.classList.remove("hide");
};

//įjungti mygtukus naujam žaidimui ir restartui
const enableButtons = () => {
  btnRef.forEach((element) => {
    element.innerText = "";
    element.disabled = false;
  });
  //išjungti popup
  popupRef.classList.add("hide");
};

//Kai žaidėjas laimi funkcija
const laimejo_funckija = (letter) => {
  disableButtons();
  if (letter == "X") {
    msgRef.innerHTML = "&#x1F389; <br> 'X' laimėjo";
    rezultatasX++;
  } else {
    msgRef.innerHTML = "&#x1F389; <br> 'O' laimėjo";
    rezultatasO++;
  }
//  Vardai();
    if (myVariable == true){
        Vardai();
    } else {
        Vardai1();
    }
};


//Funkcija lygiosioms
const lygiosios_funkcija = () => {
  disableButtons();
  msgRef.innerHTML = "&#x1F60E; <br> Lygiosios";
};

//Naujas žaidimas, kartojami žaidimo seansai
newgameBtn.addEventListener("click", () => {
  count = 0;
  enableButtons();
  if (myVariable == false){
  xTurn = true;
  kieno_eile1.innerText = "'X' eilė";
  }
});

//Restartuoti žaidimą ir jo rezultatus
restartBtn.addEventListener("click", () => {
  count = 0;
  enableButtons();
  new_results();
  if (myVariable == false){
    xTurn = true;
    kieno_eile1.innerText = "'X' eilė";
    }
});

//Kada laimima
const winChecker = () => {
  //pereinama per visus laimejimų masyvus
  for (let i of Laimejimai) {
    let [element1, element2, element3] = [
      btnRef[i[0]].innerText,
      btnRef[i[1]].innerText,
      btnRef[i[2]].innerText,
    ];
    //žiūrima ar elementai užpildyti
    //kad 3 tušti elementai nebūtų daroma sąlyga, kitaip būtų skaitoma kaip laimėjimas
    if (element1 != "" && (element2 != "") & (element3 != "")) {
      if (element1 == element2 && element2 == element3) {
        //jei visi 3 mygtukai turi tas pačias reikšmes kreipiamasi į laimejo_funkcija
        laimejo_funckija(element1);
      }
    }
  }
};




//Pamygus rodomas X/O x arba o
btnRef.forEach((element) => {

  element.addEventListener("click", () => {
    if (xTurn) {
      xTurn = false;
      //Rodyk X
      element.innerText = "X";
      element.disabled = true;
      kieno_eile1.innerText = "'O' eilė";

      if(myVariable == false){
        let shuffledButtons = shuffle(Array.from(btnRef));
//         let nonDisabledButton = Array.from(btnRef).find(button => !button.disabled);
        let nonDisabledButton = shuffledButtons.find(button => !button.disabled);
         if (nonDisabledButton) {
             nonDisabledButton.innerText = "O";
//             nonDisabledButton.click();
             nonDisabledButton.disabled = true;
         } else {
             console.log('No non-disabled buttons found.');
         }
         xTurn = true;
         kieno_eile1.innerText = "'X' eilė";
         count += 1;
         if (count == 9) {
               lygiosios_funkcija();
             }

      }

    } else {
      xTurn = true;
      //Rodyk O
      element.innerText = "O";
      element.disabled = true;
      kieno_eile1.innerText = "'X' eilė";
    }

    // kieno_eile1.classList.remove('show');
    // kieno_eile1.classList.add('hide');
    // kieno_eile2.classList.remove('hide');
    // kieno_eile2.classList.add('show');

    //Padidinamas count kiekvienu žaidėjo paspaudimu
    count += 1;
    if (count == 9) {
      lygiosios_funkcija();
    }
    // kiekviena paspaudima patikrinti ar laimejo
    winChecker();
  });

});
//
//                  // Get all buttons with the class "button-option"
////                  const buttons = document.querySelectorAll('.button-option');
//
//                  // Find the first non-disabled button const
//                  let nonDisabledButton = Array.from(btnRef).find(button => !button.disabled);
//
//                  if (nonDisabledButton) {
//                      // Simulate button click
//                      nonDisabledButton.click();
//                      nonDisabledButton.disabled = true;
//                  } else {
//                      console.log('No non-disabled buttons found.');
//                  }
//                 // }
//
//                  // kieno_eile1.classList.remove('show');
//                  // kieno_eile1.classList.add('hide');
//                  // kieno_eile2.classList.remove('hide');
//                  // kieno_eile2.classList.add('show');
//
//                  //Padidinamas count kiekvienu žaidėjo paspaudimu
//                  count += 1;
//                  if (count == 9) {
//                    lygiosios_funkcija();
//                  }
//                  // kiekviena paspaudima patikrinti ar laimejo
//                  winChecker();
//      });
//
//});
//}







//Aktyvuoti mygtukus ir išjungti popup kai užkraunamas puslapis
window.onload = enableButtons;

// function onLoad() {
//     //method for button times
//     var group1 = document.getElementById("group1");
//     group1.classList.remove('hide');
//     group1.classList.add('show');

//     var group2 = document.getElementById("group2");
//     group2.classList.remove('show');
//     group2.classList.add('hide');
//   }
var kuris = 0
function rodyk(){

    // zaidejai.classList.add("hide");

    var group1 = document.getElementById("group1");
    group1.classList.remove('show');
    group1.classList.add('hide');

    zaidimas.classList.remove("hide");

    Vardai();
    kuris=0;

}

function rodyk1(){

    // zaidejai.classList.add("hide");

    var group1 = document.getElementById("group1");
    group1.classList.remove('show');
    group1.classList.add('hide');

    zaidimas.classList.remove("hide");

    Vardai1();
    kuris=1;


}

    function goBack() {
        var group1 = document.getElementById("group1");
        group1.classList.remove('hide');
        group1.classList.add('show');

        var group2 = document.getElementById("group2");
        group2.classList.remove('show');
        group2.classList.add('hide');

        zaidimas.classList.add("hide");
        sessionStorage.clear();

//        if (kuris==0){
//            Vardai();
//        }
//        else{
//            Vardai1();
//        }
    }

function toggleDiv(div) {
    var x = document.getElementById(div);
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

 function Vardai(){
    sessionStorage.setItem("player_key1", document.getElementById("player1_id").value);
    sessionStorage.setItem("player_key2", document.getElementById("player2_id").value);
    sessionStorage.setItem("rezultatasX_key", rezultatasX);
    sessionStorage.setItem("rezultatasO_key", rezultatasO);
    let player1 = sessionStorage.getItem("player_key1");
    let player2 = sessionStorage.getItem("player_key2");
    let x = sessionStorage.getItem("rezultatasX_key");
    let o = sessionStorage.getItem("rezultatasO_key");
    document.getElementById("tekstas").innerHTML =   player1 +" X" + " : " + "O " + player2;
    document.getElementById("tekste").innerHTML = x + " : " + o;
    sessionStorage.clear();
    // alert(player1 + " " + x + " : " + o + " " + player2);
 }

  function Vardai1(){
     let xTurn = true;
     kieno_eile1.innerText = "'X' eilė";
     sessionStorage.setItem("player_key1", "Jūs");
     sessionStorage.setItem("player_key2", "PC");
     sessionStorage.setItem("rezultatasX_key", rezultatasX);
     sessionStorage.setItem("rezultatasO_key", rezultatasO);
     let player1 = sessionStorage.getItem("player_key1");
     let player2 = sessionStorage.getItem("player_key2");
     let x = sessionStorage.getItem("rezultatasX_key");
     let o = sessionStorage.getItem("rezultatasO_key");
     document.getElementById("tekstas").innerHTML =   player1 +" X" + " : " + "O " + player2;
     document.getElementById("tekste").innerHTML = x + " : " + o;
     sessionStorage.clear();
     // alert(player1 + " " + x + " : " + o + " " + player2);
  }




 function changeVariableOnClick(id) {
   if (id === 'show_id') {
     myVariable = true;
   }
   else{
   myVariable = false;
      xTurn = true;


      kieno_eile1.innerText = "'X' eilė";
   }
 }

 linkOne.addEventListener('click', function() {
   changeVariableOnClick('show_id');
 });

  linkTwo.addEventListener('click', function() {
    changeVariableOnClick('show_id1');
  });

 function new_results(){
    rezultatasX = 0;
    rezultatasO = 0;
    if (myVariable == true){
        Vardai();
    } else {
        Vardai1();
    }

    // sessionStorage.clear();
 }




     function shuffle(array) {
         for (let i = array.length - 1; i > 0; i--) {
             const j = Math.floor(Math.random() * (i + 1));
             [array[i], array[j]] = [array[j], array[i]];
         }
         return array;
     }

 /*

 #1. Būklės, eigos matomumas (Visibility of system status)
Naudotojo informavimas apie dabartinę naudojamos
sistemos būseną, būklę, naudojimosi proceso eigą.
o Svarbi grįžtamojo ryšio dalis.
o Įgalina naudotoją priimti sprendimus apie tolimesnius
veiksmus, planuoti juos.
o Atkreipia dėmesį į svarbius dalykus.

REZULTATAS

#3. Veiksmų laisvė (User control and freedom)
Bet kuriuo atveju naudotojas turi turėti pasirinkimą (tęsti,
sustabdyti, atšaukti procesą).
o Galimybė atšaukti pakeitimus ar visą procesą sudaro
galimybes aktyviau, drąsiau dirbti.
o Leidžia sumažinti klaidų skaičių.

PASIRINKIMAS

#5. Klaidų išvengimas (Error prevention)
Valdymo klaidų galima išvengti:
o Kruopščiau modeliuojant naudotojus ir jų elgesį.

PAMYGUS DAR KART ANT ŽAIDIMŲ LENTELĖS NEPSASIMYGA KITAS REZULTATAS LENTELĖJE

 #6. Atpažinimas, o ne prisiminimas (Recognition rather
than recall)
Šio principo esmė – naudotojas turėtų atpažinti procesą ir
jo valdymą, o ne (bandyti) prisiminti.
o Paspartinama informacijos paieška, sprendimo
priėmimas.
o Neapkraunama atmintis.

ŽAIDIMAS ATPAŽĮSTAMAS KRYŽIUKAIS NULIUKAIS, NEREIKIA ĮSIMINTI DAUG DALYKŲ

#8. Estetika ir minimalizmas (Aesthetic and minimalist
design)
Sąsajoje turi būti pateikiama tik reikalinga informacija.
Papildoma informacija ir vaizdai užgožia esmę ir sumažina
matomumą.
o Užtikrinamas esminės informacijos, funkcionalumo
matomumas.
o Sukuriama teigiama naudotojo patirtis.

MATOMA DAŽNIAUSIAI TIK REIKALINGA INFORMACIJA

 */