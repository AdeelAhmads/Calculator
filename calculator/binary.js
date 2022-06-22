function binaryToDecimal() {
	var binary = document.getElementById("binary").value;
	
	if(binary == ""){
		alert("Please fill up the required field!");
	}
	else{
		if(/^[01]+$/.test(binary)){
			var decimal = parseInt(binary, 2);
			document.getElementById("result").innerHTML = "<label style='font-size:18px;'>The decimal number is</label><h3 class='text-primary'>"+decimal+"";
		}else{
			alert("Please enter binary numbers");
		}
	}
}

function reset(){
	document.getElementById("decimal").value = "";
	document.getElementById("result").innerHTML = "";
}