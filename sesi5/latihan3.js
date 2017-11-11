var buah = ['Apel', 'Pisang', 'Anggur','Semangka', 'Durian' ];

var listBuah = $('#buah');
    for(i=0; i<buah.length; i++){
    var listItem = '<li class="buah">'+ buah[i] + '</li>';
        listBuah.append(listItem);
    }

    var search = filter.val()
    var buahItem = $('.buah');

    buahItem.each(function(){
        var buah = $(this)
        var namaBuah = buah.text().toLowerCase();

        if (namaBuah.indexOf(search.toLowerCase() ) > -1){
            buah.slideDown();
        } else {
            buah.slideUp();
    }
    // }
    // var filter = $('#filter');
    // filter.keyup(filterBuah);

    //     function filterBuah() {               
    //        var buah = $('.buah');
        
    //         for ( var i = 0; i < buah.length; i++) {  
    //             var item = $(buah[i]).text().toLowerCase();
    //             if (item.indexOf(filter.val().toLowerCase() ) != -1) {
    //                 $(buah[i]).slideDown();
    //             } else {
    //                 $(buah[i]).slideUp();
    //             }
    //         }
    //     }