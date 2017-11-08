
// var club = ["MU", "City", "Chelsea", "Arsenal", "Tottenham", "Everton", "Liverpool", "WHU", "Leichester", "Sunderland" ];
// for(i=0; i<club.length; i++){
//     console.log(club[i]);
// }

var btnGreet = document.getElementsByClassName("greet");
btnGreet.addEventListener("click",greet);

function greet (event){
    var greet = ["MU", "City", "Chelsea", "Arsenal", "Tottenham", "Everton", "Liverpool", "WHU", "Leichester", "Sunderland" ];
    for(i=0; i<greet.length; i++){
        alert(event.target.textContent);
    }
    // console.log(event.target.textContent);
}