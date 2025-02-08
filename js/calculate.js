function triangleCalculate() {
  //triangle calculate---------------------------------------------------------
  //width
  const w = document.getElementById("triangleWidth");
  const inputWidth = w.value;
  const inpW = parseFloat(inputWidth);
  console.log(inpW);

  //height
  const h = document.getElementById("triangleHeight");
  const inputHeight = h.value;
  const inpH = parseFloat(inputHeight);
  console.log(inpH);
  //area calculate
  const area = 0.5 * inpW * inpH;
  console.log(area);
}

//Trianlge calculate------------------------------------------------------
function rectangleCalculate() {
  //width
  const widthInput = document.getElementById("rectangleWidth");
  const winp = widthInput.value;
  const w = parseFloat(winp);
  console.log(w);

  //length
  const lengthInput = document.getElementById("rectangleLenght");
  const valueLength = lengthInput.value;
  const l = parseFloat(valueLength);
  console.log(l);
  const area = w * l;
  console.log(area);
}
