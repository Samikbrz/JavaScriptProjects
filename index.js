function CalculateBMI() {
    if(validateInput()==false){
        alert("Weight or Height not be empty");
    }
    else{
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
      
        var result = weight / Math.pow(height, 2);
      
        document.getElementById("result").innerText = result.toFixed(2);
      
        setValueAndColor(result);
    }
 
}

function Reset() {
  document.getElementById("weight").value = "";
  document.getElementById("height").value = "";
  document.getElementById("result-statu").innerText = "";
  document.getElementById("result").innerText = "";
}

function setValueAndColor(result) {
  if (result < 18.5) {
    document.getElementById("result-statu").style.color = "#2196f3";
    document.getElementById("result-statu").innerText = "Under Weight";
  } else if (result >= 18.5 && result < 25) {
    document.getElementById("result-statu").style.color = "#43a047";
    document.getElementById("result-statu").innerText = "Normal";
  } else if (result >= 25 && result < 30) {
    document.getElementById("result-statu").style.color = "#fb8c00";
    document.getElementById("result-statu").innerText = "Over Weight";
  } else if (result >= 30) {
    document.getElementById("result-statu").style.color = "#c62828";
    document.getElementById("result-statu").innerText = "Obese";
  }
}

function validateInput(){
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;
    if(weight=="" || height==""){
        return false;
    }
}