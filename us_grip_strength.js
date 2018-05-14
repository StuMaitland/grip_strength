  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
  });

function get_us_val() {

    if (document.getElementById('male').checked) {
        gender="male"
    } else if (document.getElementById('female').checked){
        gender="female"
    } else{
        Materialize.toast('Please select Gender', 4000, 'red')
    }
    var age = document.getElementById("age").value;

    var grip = document.getElementById("grip").value;
    var mean = us_data[gender][age].mean;
    var sd = us_data[gender][age].sd;
    var z_score = get_z_score_mean_sd(grip, mean, sd)

    z_score = z_score.toFixed(2);

    document.getElementById("z_score_out").innerHTML = z_score;
    document.getElementById("result_row").style.display="block";
    return false
}

function get_z_score_mean_sd(grip, mean, sd){
    var z_score = (grip-mean)/sd
    return z_score
}