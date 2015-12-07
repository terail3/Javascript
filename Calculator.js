 
document.getElementById("one").onclick = function(){ btnVal(1); }
document.getElementById("two").onclick = function(){ btnVal(2); }
document.getElementById("three").onclick = function(){ btnVal(3); }
document.getElementById("four").onclick = function(){ btnVal(4); }
document.getElementById("five").onclick = function(){ btnVal(5); }
document.getElementById("six").onclick = function(){ btnVal(6); }
document.getElementById("seven").onclick = function(){ btnVal(7); }
document.getElementById("eight").onclick = function(){ btnVal(8); }
document.getElementById("nine").onclick = function(){ btnVal(9); }
document.getElementById("zero").onclick = function(){ btnVal(0); }
document.getElementById("btnequals").onclick = function(){ equals("="); }
document.getElementById("btnclear").onclick = function(){ clear(); }
document.getElementById("decimal").onclick = function(){ decimal(); }
document.getElementById("btnneg").onclick = function(){ plusMinus(); }
document.getElementById("add").onclick = function(){ operator("+"); }
document.getElementById("multiply").onclick = function(){ operator("*"); }
document.getElementById("divide").onclick = function(){ operator("/"); }
document.getElementById("substract").onclick = function(){ operator("-"); }



var calc = document.getElementById('disp');
var oper = "";
var num = "";

function btnVal(z){
  calc.value = calc.value + z;
}

function operator(op){
	oper = op;
	num = calc.value;
	calc.value = "";
}

 
function equals(){
	rez(eval(num), eval(calc.value), oper);
}
 
 
function rez(n1, n2, op){
	if(op == "+"){
		calc.value = n1 + n2;
	}
	else if(op == "-"){
		calc.value = n1 - n2;
	}
	else if(op == "*"){
		calc.value = n1 * n2;
	}
	else if(op == "/"){
		if(calc.value == 0){
            calc.value = "На 0 делить нельзя";
             return
        }
		calc.value = n1 / n2;
	}
}
 
function plusMinus(){
	calc.value = calc.value * -1;
}

function clear(){
	calc.value = "";
	num = "";
}
	 
function decimal() {
		calc.value = calc.value + "."
}	
	
 