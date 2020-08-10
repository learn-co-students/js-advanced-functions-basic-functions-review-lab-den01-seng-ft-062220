function saturdayFun(activity = 'roller-skate') {
  return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function(activity = 'go to the office') {
  return `This Monday, I will ${activity}.`;
};

const wrapAdjective = (style = '*') => {
  return (adjective = 'special') => {
    return `You are ${style}${adjective}${style}!`;
  };
};

const Calculator = {
  add: (a, b) => { return a + b; },
  subtract: (a ,b) => { return a - b; },
  multiply: (a, b) => { return a * b; },
  divide: (a , b) => { return a / b; }
};

const actionApplyer = (integer, arrayOfFunctions, i = 0) => {
  return i == arrayOfFunctions.length ? integer : actionApplyer(arrayOfFunctions[i](integer), arrayOfFunctions, i + 1);
};
