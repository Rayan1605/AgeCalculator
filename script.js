let userinput = document.getElementById("date")
userinput.max = new Date().toISOString().split("T")[0];
const Calculate = document.getElementById("input-box");
let Result = document.getElementById("result");
function calculateAge(){
    let BirthDate = new Date(userinput.value)
    let result = document.getElementById("result");
    let d1 =  BirthDate.getDate();
    let d2 =  BirthDate.getMonth() + 1;
    let d3 =  BirthDate.getFullYear();

    let today = new Date()

    let t1 = today.getDate();
    let t2 = today.getMonth() + 1;
    let t3 = today.getFullYear();

    let cal1, cal2, cal3;

     cal3 = t3 - d3;
     if (t2 >= d2){
         cal2 = t2 - d2;
     }
     else{
            cal2 = t2 + 12 - d2;
            cal3--;
     }
        if (t1 >= d1){
            cal1 = t1 - d1;
        }
        else{
            cal1 = t1 + getDaysInMpnth(t2, t3) - d1;
            cal2--;
        }
        if (isNaN(cal1) || isNaN(cal2) || isNaN(cal3)){
        }
        else {
            result = `You are <span>${cal3}</span> years , <span>${cal2}</span> months,<span>${cal1}</span> days old`;
            Result.innerHTML = result;
            Result.style.fontSize = "20px";
            Result.style.color = "white";
            Result.style.fontWeight = "bold";
        }
}

function getDaysInMpnth(month, year){
    return new Date(year, month, 0).getDate();
}

Calculate.addEventListener("click", calculateAge)

