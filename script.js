function compute() {
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest= principal * years * rate / 100;
    
    if (principal == "") { 
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return false;
    }
    else{
        if (principal <= 0) { 
            alert("Enter a positive number");
            document.getElementById("principal").focus();
            return false;
        }
    }

    var year = new Date().getFullYear(); 
    var final= parseInt(year,10) + parseInt(years,10);
    var result= "If you deposit <mark>" + principal + "</mark>,<br> at an interest rate of <mark>" + rate + "</mark> % <br> You will receive an amount of <mark>" + interest + ",</mark><br> in the year <mark>" + final + "</mark>";
    document.getElementById("result").innerHTML=result;
}
function updateRate(newVal) 
{
    document.getElementById("rate_val").innerHTML=newVal + '%';
}