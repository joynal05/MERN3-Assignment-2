const calculateBMI = () => {
	const weight = document.getElementById("weightInput").value;
	const height = document.getElementById("heightInput").value;

    if(weight > 0 && height.length > 0 ){

        const bmi = weight / (height * height);
        document.getElementById("result").innerHTML = 'Your BMI is <span>'+bmi.toFixed(2)+'</span>';        

    }else{
        alert('Please fill the form properly');
    }
}

document.getElementById("calculateBtn").addEventListener("click", calculateBMI);
