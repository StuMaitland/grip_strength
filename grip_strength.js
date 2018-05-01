


//console.log(data[2][2][3]); // 98

function get_val() {
    if (document.getElementById('male').checked) {
        gender="male"
    } else if (document.getElementById('female').checked){
        gender="female"
    }
    var age = document.getElementById("age").value;
    var grip = document.getElementById("grip").value;
    age = Math.ceil(age/0.5)*0.5
    age = age.toFixed(1).toString()
    var median = data[gender][age].M;
    var l = data[gender][age].L;
    var s = data[gender][age].S;
    var intermediate=Math.pow((grip/median),l)-1
    var z_score = (intermediate)/(l*s)

    var z_score = z_score.toFixed(2);

    document.getElementById("z_score_out").innerHTML = z_score;
    document.getElementById("grip_out").innerHTML = median;
    document.getElementById("l_out").innerHTML = l;
    document.getElementById("s_out").innerHTML = s;

}

