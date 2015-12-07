var firstQuestion = document.getElementsByName("k1");
var secondQuestion = document.getElementsByName("k2");
var thirdQuestion = document.getElementsByName("k3");
var fourthQuestion = document.getElementsByName("k4");
var fifthQuestion = document.getElementsByName("k5");

document.getElementById("testresult").onclick = function() { testResult(); }
 
var result = 0;

function testResult() {
	if (firstQuestion[0].checked) {
		result += 2;
	};
	
	if (secondQuestion[2].checked) {
		result += 2;
	};
	
	if (thirdQuestion[3].checked) {
		result += 2;
	};

	
	if  (fourthQuestion[0].checked) {
	 result -= 1;
	}
	if  (fourthQuestion[1].checked) {
	 result += 1;
	}
	if  (fourthQuestion[2].checked) {
	 result -= 1;
	}
	if  (fourthQuestion[3].checked) {
	 result += 1;
	}
	
	
	if  (fifthQuestion[0].checked) {
	 result += 1;
	}
	if  (fifthQuestion[1].checked) {
	 result += 1;
	}
	if  (fifthQuestion[2].checked) {
	 result -= 1;
	}
	if  (fifthQuestion[3].checked) {
	 result -= 1;
	}
	
	
alert("Вы набрали " + result + " баллов " + result * 10 + "% правильных ответов!"); 
}

