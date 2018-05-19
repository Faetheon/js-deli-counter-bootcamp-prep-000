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

function currentLine(katzDeliLine) {
  var mine = [];
  if(katzDeliLine.length > 0) {
    for(i = 0; i < katzDeliLine.length; i++) {
      mine.push(i+1)
      mine.push('. ' + katzDeliLine[i]);
    }
    return "The line is currently: " + mine;
  } else {
    return "The line is currently empty."
  }
}