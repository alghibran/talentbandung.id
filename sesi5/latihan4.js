$.get('https://ariona.net/talentbandung/', function(data, status){
    for (var i = 0; i < data.length; i++) {
      var listItem = '<li class= "taman"><h2>' + data[i].nama + '</h2><img src="'+data[i].image.thumbnail +'"/></li>';
      $('#taman').append(listItem);
    }
  } );
  
  function MyTaman() {
    var taman = $('.taman');
  
    for (var i = 0; i < taman.length; i++) {
      var item  = $(taman[i]).text().toLowerCase();
      if (item.indexOf($('#lol').val().toLowerCase()) >= 0) {
        $(taman[i]).slideDown();
      }
      else {
        $(taman[i]).slideUp();
      }
    }
  }
  
  $.get('https://ariona.net/comments.php',{count:1}, function(data, status) {
    console.log(data);
  } );