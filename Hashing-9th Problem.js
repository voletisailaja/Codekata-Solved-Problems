var arr = userInput[1].split(" ");
  var freq = {};
  for(var i=0;i<arr.length;i++){
    var element = arr[i];
    if(freq[element]){
      freq[element]+=1;
    }else{
      freq[element] = 1;
    }
  }

  for(var value in freq){
      if(freq[value] === 2){
          console.log(value);
      }
  }
  
