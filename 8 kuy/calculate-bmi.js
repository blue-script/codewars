function bmi(weight, height, idx = weight / (height * height)) {
  switch (true) {
    case idx <= 18.5:
      return "Underweight";
    case idx <= 25.0:
      return "Normal";
    case idx <= 30.0:
      return "Overweight";
    default:
      return "Obese";
  }
}

console.log(bmi(80, 1.8));
