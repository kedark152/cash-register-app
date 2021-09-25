const billAmount = document.querySelector("#bill-amount");
const buttonNext = document.querySelector("#btn-next");
const buttonCalculate = document.querySelector("#btn-calculate");
const cashGiven = document.querySelector("#amount-received");
const error1 = document.querySelector("#error1");
const error2 = document.querySelector("#error2");
const outputNotes = document.querySelector("#output");
const section2 = document.querySelector("#section2");

section2.style.display = "none"; //initially section 2 will not be visible

buttonNext.addEventListener("click", clickHandler1);
buttonCalculate.addEventListener("click", clickHandler2);

function clickHandler1(){
    if(billAmount.value<0){
       
     showMessage1("The Bill amount should be greater than 0");
    }
    else{
        section2.style.display = "block";
        error1.style.display="none";
        buttonNext.style.display="none";
    }
}
function clickHandler2(){
   clearMessage(); 
    console.log(cashGiven.value);
    var returnCash = (cashGiven.value - billAmount.value);
    if(billAmount.value<0){
        
        showMessage1("The Bill amount should be greater than 0");
        section2.style.display = "none";
        error1.style.display="block";
        buttonNext.style.display="block";
        
    }
    if(returnCash<=0){ //edited: else if
        showMessage2("Enter the valid Cash Amount: Cash Amount should be greater than bill");
    }
    else{
        // var returnCash = (cashGiven.value - billAmount.value);
        calculateChange(returnCash);
    }
    
}
function clearMessage(){
    error2.style.display = "none";
    
}
function showMessage1(errorMessage){
    error1.innerText =  errorMessage;
  
}
function showMessage2(errorMessage){
        error2.style.display="block";
        error2.innerText =  errorMessage;
        outputNotes.innerText=" "; //clears the previous output
}
function calculateChange(returnCash){
    var array = ['2000','500','100','20','10','1'];
    var Data = " ";
    for(i=0;i<array.length; i++ ){
        var noOfNotes = Math.trunc(returnCash/array[i]);
        returnCash = returnCash%array[i];
        console.log(noOfNotes);
       if(noOfNotes!=0){
        Data = Data + "No. of ₹ "+array[i]+": "+noOfNotes+"\n"; 
       }
    }
  outputNotes.innerText = Data;
}