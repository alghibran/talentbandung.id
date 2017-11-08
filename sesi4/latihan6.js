var btnGreet = document.getElementById("greet");
btnGreet.addEventListener("click",greet);
var btnClear = document.getElementById("clear");
btnGreet.addEventListener("click",clear);

function greet (event){
    // console.log(event.target.textContent);
    var nama = document.getElementById("nama").value;
    var alamat_email = document.getElementById("alamat_email").value;
    
    alert("Nama : " + nama);
    alert("Email : " + alamat_email);
}





