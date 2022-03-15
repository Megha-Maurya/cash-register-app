var billAmount = document.querySelector("#bill-amount");
var cashGiven = document.querySelector("#cash-given");
var checkBtn = document.querySelector("#check-btn");
var message = document.querySelector("#error-message");
var noOfNotes = document.querySelectorAll(".no-of-notes");

var availableNotes = [2000, 500, 100, 50, 10, 5, 1];

checkBtn.addEventListener("click", function validateBillAndCashAmount() {
    hideMessage();
    if(billAmount.value > 0) {
        if(cashGiven.value >= billAmount.value) {
              var amountToBeReturned = cashGiven.value - billAmount.value;
                caluculateChange(amountToBeReturned);
        } else {
            showMessage("The cash provided should atleast be equal to the Bill Amount");
        }
    } else{
        showMessage("Invalid Bill Amount");
    }
});

function caluculateChange(amountToBeReturned){
      for(var i=0; i < availableNotes.length; i++) {
          var numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
          amountToBeReturned %= availableNotes[i];
          noOfNotes[i].innerText = numberOfNotes;
      }
}


function hideMessage() {
    message.style.display = "none";     
}

function showMessage(msg) {
    message.style.display = "block";
    message.innerText = msg;
}