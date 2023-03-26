let billAmount = document.querySelector("#billAmount").value;
billAmount = parseInt(billAmount);
let noOfPeople = document.querySelector("#noOfPeople").value;
noOfPeople = parseInt(noOfPeople);
let tipAmount;
let totalAmount;

let buttonList = document.querySelectorAll(".tip-item");
buttonList.forEach((i)=> {
  i.addEventListener("click", (e)=> {
    
    if(noOfPeople>0){
      let tipPercent = e.target.value;
      tipPercent = parseInt(tipPercent);
      tipAmount = (tipPercent*billAmount) / 100;
      
      let rightOutcome1 = (tipAmount / noOfPeople);
      rightOutcome1 = parseFloat(rightOutcome1).toFixed(2)
      
      totalAmount = (billAmount) + (tipAmount);
      
      let rightOutcome2 = (totalAmount / noOfPeople);
      rightOutcome2 = parseFloat(rightOutcome2).toFixed(2);
  
      document.querySelector("#rightOutcome1").innerHTML = rightOutcome1;
      document.querySelector("#rightOutcome2").innerHTML = rightOutcome2;}
      else{
        document.getElementById("noofPeopleMain").style.border = "2px solid red";
        document.getElementById("hiddenText").style.display = "inline";
      }
    
    })
});

function resetFunc() {
  document.querySelector("#billAmount").value = "";
  document.querySelector("#noOfPeople").value = "";
  document.querySelector("#tip-item-custom").value = "";
  document.querySelector("#rightOutcome1").innerHTML = "$0.00";
  document.querySelector("#rightOutcome2").innerHTML = "$0.00";
}