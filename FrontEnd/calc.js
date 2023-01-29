
function calc(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var opt = document.getElementById("operation").value;
    if(!num1 | !num2){
        alert("please enter the number");
    }
    else{

        if (opt == "+"){
            var res = Number(num1)+Number(num2); 
            console.log(res);
        }
        else if (opt == "-"){
            var res = Number(num1)-Number(num2);     
        }
        else if(opt == "*"){
            var res = Number(num1)*Number(num2);
        }
        else if(opt=="/"){
            var res = Number(num1)/Number(num2);
        }
        else{
            alert("please select the operation")
        }
        document.getElementById("result").value = res;
    }
}