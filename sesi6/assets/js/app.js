$(document).ready(function(){
    
       var daftarTaman = $('.daftar-taman');
       var filter      = $('#filter');
    
       $.get('https://www.ariona.net/talentbandung/', function(data){
          $.each( data, function(){
             var html =  '<div class="grid-item"><article class="taman">'+
                            '<figure>'+
                               '<a href="single.html"><img src="'+this.image.thumbnail+'" alt=""/></a>'+
                            '</figure>'+
                            '<div class="taman-detail">'+
                               '<h2>'+
                                  '<a href="single.html">'+
                                     '<span class="subtitle">Taman</span>'+
                                     '<span class="title">'+this.nama+'</span>'+
                                  '</a>'+
                               '</h2>'+
                               '<p>'+this.alamat+'</p>'+
                            '</div>'+
                         '</article></div>';
             
             daftarTaman.append(html);
       
          } );
       });
       
       filter.on('keyup', function(){
          var taman  = $(".grid-item");
          var search = this.value.toLowerCase();
          
          taman.each(function(){
             var namaTaman   = $(this).find('.title').text().toLowerCase();
             var alamatTaman = $(this).find('p').text().toLowerCase();
       
       
             if (namaTaman.indexOf(search) != -1 || alamatTaman.indexOf(search) != -1) {
                $(this).show(300);
             } else {
                $(this).hide(300);
             }
          });
       });

       var gallery = $('.gallery-carousel').slick({
        infinite : true,
        slidesToShow : 3,
        slidesToScroll : 3,
        autoplayspeed : 1000,
        nextArrow: '<button type="button" class"slick-next"><i class"ion-android-arrow-forward"></i></button>',
        prevArrow: '<button type="button" class"slick-prev"><i class"ion-android-arrow-back"></i></button>',
       });

    //    function initMap() {
    //     var uluru = {lat: -25.363, lng: 131.044};
    //     var map = new google.maps.Map(document.getElementById('map'), {
    //       zoom: 4,
    //       center: uluru
    //     });
    //     var marker = new google.maps.Marker({
    //       position: uluru,
    //       map: map
    //     });
    //   }
    });