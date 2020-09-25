function BMI(height,weight){
    var bmi_height = height/100;
    bmi_height=Math.pow(bmi_height,2);
    var bmi = weight / bmi_height;
    console.log(bmi.toFixed(1));
}
BMI(158,55);