function printTable(from, to, step, func) {
  if (func === undefined) {
    return;
  }
  step = step || 1;
  document.write("<table border='1' cellspacing='0'>");
  for (let x = from; x <= to; x += step) {
    document.write("<tr>");
    document.write("<td>" + x + "</td>");
    document.write("<td>" + func(x) + "</td>");
    document.write("</tr>");
  }
  document.write("</table>");
}

function quadratic(x) {
  return x * x;
}

function cube(x) {
  return x * x * x;
}

function squareRoot(x) {
  return Math.sqrt(x);
}

function sin(x) {
  return Math.sin((x * Math.PI) / 180);
}

function cos(x) {
  return Math.cos((x * Math.PI) / 180);
}

function tg(x) {
  return Math.tan((x * Math.PI) / 180);
}

function ctg(x) {
  return 1 / Math.tan((x * Math.PI) / 180);
}
let functions = [quadratic, cube, squareRoot, sin, cos, tg, ctg];
let choose = +prompt(
  "1 - quadratic, 2 - cube, 3 - square root, 4 - sin, 5 - cos, 6 - tg, 7 - ctg"
);
printTable(
  choose == 3 || choose == 4 || choose == 5 || choose == 6 || choose == 7
    ? 0
    : -16,
  choose == 4 || choose == 5 || choose == 6 || choose == 7 ? 360 : 16,
  1,
  functions[choose - 1]
);
