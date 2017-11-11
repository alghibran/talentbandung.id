
// var club = ["MU", "City", "Chelsea", "Arsenal", "Tottenham", "Everton", "Liverpool", "WHU", "Leichester", "Sunderland" ];
// for(i=0; i<club.length; i++){
//     console.log(club[i]);
// }

// var btnGreet = document.getElementsByClassName("greet");
// btnGreet.addEventListener("click",greet);

// function greet (event){
//     var greet = ["MU", "City", "Chelsea", "Arsenal", "Tottenham", "Everton", "Liverpool", "WHU", "Leichester", "Sunderland" ];
//     for(i=0; i<greet.length; i++){

//         alert(event.target.textContent);
//     }
//     // console.log(event.target.textContent);
// }

function clubing (event){
    var nama = event.target.textContent;
    return alert('halo' + nama);
  }
  
  var club = document.getElementsByClassName(' club');
  for (var i = 0; i < club.length; i++) {
    club[i].addEventListener('click', clubing );
  }