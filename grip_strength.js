function get_val() {

    if (document.getElementById('male').checked) {
        gender="male"
    } else if (document.getElementById('female').checked){
        gender="female"
    } else{
        Materialize.toast('Please select Gender', 4000, 'red')
    }
    var age = document.getElementById("age").value;

    var grip = document.getElementById("grip").value;
    age = Math.ceil(age/0.5)*0.5
    age = age.toFixed(1).toString()
    var median = data[gender][age].M;
    var l = data[gender][age].L;
    var s = data[gender][age].S;
    var z_score = get_z_score_lms(grip, median, l, s);

    z_score = z_score.toFixed(2);

    document.getElementById("z_score_out").innerHTML = z_score;
    document.getElementById("grip_out").innerHTML = median;
    document.getElementById("l_out").innerHTML = l;
    document.getElementById("s_out").innerHTML = s;
    document.getElementById("result_row").style.display="block";
    return false
}

function get_z_score_lms(grip, median, lambda, skew){
    var intermediate=Math.pow((grip/median),lambda)-1
    var z_score = (intermediate)/(lambda*skew)
    return z_score
}
