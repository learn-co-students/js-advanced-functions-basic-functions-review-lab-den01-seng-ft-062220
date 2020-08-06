// Your code here
function saturdayFun(string="roller-skate"){
  return `This Saturday, I want to ${string}!`
}

function mondayWork(string ="go to the office"){
  return `This Monday, I will ${string}.`
}

function wrapAdjective(flair="*"){
  return function(string="special"){
    return `You are ${flair}${string}${flair}!`;
  }
}
let encouragingPromptFunction = wrapAdjective("!!!")

let Calculator = {
  add: function(){
    return 1 + 3;
  },
  subtract: function(){
    return 1 - 3;
  },
  multiply: function(){
    return 1 * 3;
  },
  divide: function(){
    return 10 / 5; 
  }
}

function actionApplyer(int, array){
  if (array.length == 0){
    return int
  } else {
    for (let i = 0; i < array.length; i++){
      int = array[i](int);
    }
    return int
  }
}