var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  let arr = [...katzDeliLine];
  return `Welcome, ${name}. You are number ${arr.length} in line.`
}
function nowServing(katzDeliLine) {
  if(katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine.shift()}.`;
  } else {
    return "There is nobody waiting to be served!";
  }
}