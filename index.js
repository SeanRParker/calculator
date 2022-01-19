console.log("JS hooked UP!")

// screen
let display = document.getElementById('display');

// clear
let clearBtn = document.getElementById('clear');

let num1 = '';
let num2 = '';
let screen = '';
let operator = '';
let operatorClicked = false;
let equalClicked = false;
let total = '';


let clear = () => {
  console.log('cleaR!')
  display.innerText = '';
  num1 = '';
  num2 = '';
  screen = '';
  operator = '';
  operatorClicked = false;
  equalClicked = false;
  total = 0;
};

clearBtn.addEventListener('click', clear);

let inputNum = (num) => {
  // no operator clicked, concat num1
    num1 += num;
    display.innerText = num;
    // !operatorClicked ? num1 + num1: num2;

    // operator clicked, set num2
  }
  
let numBtns = Array.from(document.querySelectorAll('.num-btn'));

numBtns.map(num => {
  console.log('num.computedName', num.computedName);
  num.addEventListener(
    'click', () => {
      if(total > 0) {
        num1 = total;
        num2 = '';
      }
      if(!operatorClicked) {
        num1 += num.computedName;
        screen = `${''}${num1}`;
      } else {
        num2 = Number(num.computedName + num2);
        screen = `${''}${num1} ${operator} ${num2}`;
      } 

        display.innerText = '' + screen;
      
    }
  )
});

let calculate = (n1, n2, operator) => {
  console.log(`calc(): ${n1} ${operator} ${n2}`);
  if( operator == "*") {
    total = Number(n1) * Number(n2);
  } else if (operator == "/") {
    total = Number(n1) / Number(n2); 
  } else if (operator == "-") {
    total = Number(n1) - Number(n2);
  } else if (operator == "+") {
    total = Number(n1) + Number(n2);
  } 
  // else if (operator == '/' && n2 === 0 ) {
  //   return "Sorry bub! Can't divide by zero."
  // }
  operatorClicked = false;
  equalClicked = false;
  console.log("TOTAL: ", total)
  return total;

};

let equalBtn = document.querySelector('.equals-btn');

equalBtn.addEventListener('click', () => {
  console.log("operator:", operator);
  equalClicked = true;
  console.log('EQUALS CLICKED!');
  if (equalClicked && operatorClicked && num1 !== '' && num2 !== '') {
    display.innerText = calculate(num1, num2, operator);
  }
  
})

let opBtns = Array.from(document.querySelectorAll('.operator-btn'));

console.log("op-btns!", opBtns);

opBtns.map(sym => {
  sym.addEventListener('click', () => {
    operator = sym.value;
    console.log('operatorClicked: ', operator );
    operatorClicked = true;   
  });

})
// console.log(opBtns);







