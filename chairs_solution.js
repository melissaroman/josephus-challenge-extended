function removeChairs(numberOfChairs) {
  var chairsArray = [];
  for(var i = 1; i <= numberOfChairs; i++) {
    chairsArray.push(i);
  }

  var j = 0;
  var interval = 1;
  while(chairsArray.length > 1) {
    chairsArray.splice(j, 1);
    j = (j+interval) % chairsArray.length;
    interval++;
  }

  console.log(chairsArray);
}

removeChairs(100)


