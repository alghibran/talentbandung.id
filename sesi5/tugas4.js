function clubing (event){
    var nama = event.target.textContent;
    return alert('Halo' + ' ' + nama);
  }
  
  var club = document.getElementsByClassName(' club');
  for (var i = 0; i < club.length; i++) {
    club[i].addEventListener('click', clubing );
  }

  