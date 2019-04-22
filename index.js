function takeANumber(katzDeliLine, name){
  var message = `Welcome, ${name}. You are number ${current.length + 1} in line.`;
  return message;
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length > 0){
    currentCustomer = katzDeliLine[0];
    katzDeliLine.slice(1);
    return currentCustomer;
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length > 0) {
    var currentLineString = "The line is currently: "
      for (i = 0; i < katzDeliLine.length; i++){
        currentLineString = currentLineString + `${i}. ${katzDeliLine[i]}, `
      }
      return currentLineString;
    } else {
      return "The line is currently empty."
    }

}
