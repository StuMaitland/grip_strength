


//console.log(data[2][2][3]); // 98

function get_val() {
    if (document.getElementById('male').checked) {
        gender="male"
    } else if (document.getElementById('female').checked){
        gender="female"
    }
    var age = document.getElementById("age").value;
    var grip = document.getElementById("grip").value;
    age = Math.ceil(age/5)*5
    var mean = data[gender][age.toString()].mean;
    var sd = data[gender][age.toString()].sd;
    var z_score = ((grip-mean)/sd).toFixed(2);

    document.getElementById("z_score_out").innerHTML = z_score;
    document.getElementById("grip_out").innerHTML = mean + " (" + sd + ")";
}

