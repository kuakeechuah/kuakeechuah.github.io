/*
document.getElementById('my_shopping_cart').innerHTML = 
"IPhone x2: $600 <br>";

document.getElementById('my_shopping_cart').innerHTML = 
document.getElementById('my_shopping_cart').innerHTML +
"IPhone x2: $600 <br>";

*/





var myCarts = [];

var totalPayable = 0;

function addToCart (exPrice, exProductName){

    var myQuantity = document.getElementById("quantity").value;
    var price = exPrice;
    var productName = exProductName;
    var totalPrice = parseInt(myQuantity) * price;
    var item = productName + "x" + myQuantity + " : $" + totalPrice;
    
totalPayable = totalPayable + totalPrice;

myCarts.push(item);
//display it:
document.getElementById("my_shopping_cart").innerHTML = "";
for(var a = 0 ; a< myCarts.length ; a++ ){
    var currItem = myCarts[a];
    var currResult = document.getElementById("my_shopping_cart").innerHTML;

    document.getElementById("my_shopping_cart").innerHTML = currResults + currItem;
}



//display the total payable:

document.getElementById("totalPayable").value = totalPayable;


}


function payNow(){
var grandTotal = document.getElementById("totalPayable").value;
var userPay = document.getElementById("totalUserPay").value;

if(userPay >= grandTotal){
var change = userPay - grandTotal;
document.getElementById("changeTotal").value = change;
}else{ alert("Unable to Pay!");}

}

}


