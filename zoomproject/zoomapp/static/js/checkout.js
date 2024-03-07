// document.getElementById("add-button").addEventListener("click", function() {
//     var deliveryInstructions = document.getElementById("delivery-instructions").value;
//     document.getElementById("message").innerHTML = "Delivery Instructions: " + deliveryInstructions;
// });

function add() {
    var deliveryInstructions = document.getElementById("delivery-instructions").value;
    // document.getElementById("message").innerHTML = "Delivery Instructions: " + deliveryInstructions;
    if (deliveryInstructions == "") {
        document.getElementById("message").innerHTML = "Delivery Instructions: None";
    }
    else {
        document.getElementById("message").innerHTML = "Delivery Instructions: " + deliveryInstructions;
    }
}