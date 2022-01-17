console.log("JS hooked UP!")

// screen
let display = document.getElementById('display');

// clear
let clearBtn = document.getElementById('clear');

let clear = () => {
  console.log('cleaR!')
  display.innerText = '';
};

clearBtn.addEventListener('click', clear);



