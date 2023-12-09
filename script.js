// my name shows up letter by letter animation kind a
const myName = document.querySelector('.my-name');

const nameList = ['A', ' ', 'M','A','M','A','Z','H','U','S','U','P','O','V'];
let timeId = setInterval(nameFunc, 200);
let index = 0;

function nameFunc() {
    if(index < nameList.length) {
        myName.textContent += nameList[index];
        index++;
    }
    if(index === nameList.length) {
        clearInterval(timeId);
        myName.style.borderRight = '';
    }
}