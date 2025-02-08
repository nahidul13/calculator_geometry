//1.triangle calculate---------------------------------------------------------
function triangleCalculate() {
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

//2.Trianlge calculate------------------------------------------------------
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

// 3.parallelogram calculate ----------------------------------------------
function parallelogramCalculate() {
  //width
  const widthInput = document.getElementById("parallelogramWidth");
  const winp = widthInput.value;
  const b = parseFloat(winp);
  console.log(b);

  //length
  const lengthInput = document.getElementById("parallelogramHeight");
  const valueLength = lengthInput.value;
  const h = parseFloat(valueLength);
  console.log(h);
  const area = b * h;
  console.log(area);
}

//4.rhumbus-------------------------------------------------
function rhombusCalculate() {
  //width
  const widthInput = document.getElementById("rhombusd1");
  const winp = widthInput.value;
  const b = parseFloat(winp);
  console.log(b);

  //length
  const lengthInput = document.getElementById("rhombusd2");
  const valueLength = lengthInput.value;
  const h = parseFloat(valueLength);
  console.log(h);
  const area = 0.5 * b * h;
  console.log(area);
}

//5. pentagon Calculate--------------------------------------------------------
function pentagonCalculate() {
  const widthInput = document.getElementById("pentagonb");
  const winp = widthInput.value;
  const b = parseFloat(winp);
  console.log(b);

  //length
  const lengthInput = document.getElementById("pentagonh");
  const valueLength = lengthInput.value;
  const h = parseFloat(valueLength);
  console.log(h);
  const area = 0.5 * b * h;
  console.log(area);
}

//ellipse Calculate----------------------------------------------------------
function ellipseCalculate() {
  const widthInput = document.getElementById("ellipseA");
  const winp = widthInput.value;
  const b = parseFloat(winp);
  console.log(b);

  //length
  const lengthInput = document.getElementById("ellipseB");
  const valueLength = lengthInput.value;
  const h = parseFloat(valueLength);
  console.log(h);
  const area = 3.1416 * b * h;
  console.log(area);
}
