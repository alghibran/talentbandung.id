var buah = ['Apel', 'Pisang', 'Anggur','Semangka', 'Durian' ];

var listBuah = document.getElementById('buah');
    for(i=0; i<buah.length; i++){
    var listItem = document.createElement('li');
        listItem.classList.add('buah');
        listItem.textContent = buah[i];
        listBuah.appendChild(listItem);
    }
        function filterBuah() {
            // Declare variables
            var input, filter, buah, item;
            input = document.getElementById('filter');
            filter = input.value.toLowerCase();
            buah = document.getElementsByClassName('buah');
        
            // Loop through all list items, and hide those who don't match the search query
            for (i = 0; i < buah.length; i++) {
               
                item = buah[i].textContent.toLowerCase();
                if (item.indexOf(filter) > -1) {
                    buah[i].style.display = "block";
                } else {
                    buah[i].style.display = "none";
                }
            }
        }
    
  


