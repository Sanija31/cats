//alert("čau!")
console.log("kaut kas")
var logs = document.querySelector(".chataZinas");
var zina = document.querySelector("#zina");
var vards = document.querySelector("#vards");
function sutitZinu(){
    console.log("poga darbojas");
    console.log("ziņu ir: " +zina.value);

    logs.innerHTML = logs.innerHTML +"</br>" +zina.value;
}
