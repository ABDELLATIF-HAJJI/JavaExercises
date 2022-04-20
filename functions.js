const inputAge = document.querySelector('#byDays');
const subButton = document.querySelector('#submitB');
const outputresults = document.querySelector('#screenOperation');




function days(age){
const ageByDays = age * 365;
return ageByDays;
}
const Day = days(20);

function Hours(age){
const ageByHours = age * 24;
return ageByHours;
}
const hoursA = Hours(days);
console.log(hoursA)
















//second Calculator///////////////////////////////////////////////////////

const screenTotal = document.getElementById ('screenResulats')
const first = document.getElementById ('firstInput')
const operation = document.getElementById ('symlolInput')
const second = document.getElementById ('secondInput')
const buttonTotal = document.getElementById ('equalInput')

buttonTotal.addEventListener('click', function() {
    const one = parseInt(first.value);
    const two = parseInt(second.value);
    const op = operation.value;
    screenTotal.textContent = {
    '+': one + two,
    '-': one - two,
    '*': one * two,
    '/': one / two,
    }[op]
})
operation.addEventListener('keydown', (e)=>{
 const input = e.key;
        /*if (input === '+'|| input === '-' || input ==='/' || input === '*' || input=== 'Backspace') {
    }    else e.preventDefault();*/
        if (['+', '-', '/', '*', 'Backspace','ArrowRight','ArrowLeft'].includes(input)) {
    } else e.preventDefault();
})
function specificInput (e){
    const input = e.key;
    if (['0','1','2','3','4','5',
    '6','7','8','9', 'Backspace','ArrowRight','ArrowLeft'].includes(input)) {
    } else e.preventDefault();
}
const functionedFirst = first.addEventListener('keydown',specificInput);
const functionedSecond = second.addEventListener('keydown',specificInput);


//Accessoires'////////////////////////////////////////////////////////////////////////////////////////

function Fernitures(price, taxe, other){
    let firstResult = price + taxe;
    let mainResult = firstResult + other + ' $';
    return mainResult
}

const  tele = Fernitures(180,2,1)
document.getElementById('priceTv').innerHTML=tele;
const frige = Fernitures(220,6,10)
document.getElementById('priceFrige').innerHTML=frige;
const machine = Fernitures(200,5,2)
document.getElementById('priceMachine').innerHTML=machine;
const phone = Fernitures(120,1,0)
document.getElementById('pricePhone').innerHTML=phone;
const smartWatch = Fernitures(60,0,0)
document.getElementById('priceSmart').innerHTML=smartWatch;



// second-calculator////////////////////////////////////////////////////////////////////////////

const firstContainer = document.createElement('div')
firstContainer.className = 'firstDiv';
firstContainer.id = 'firstDivid';
document.body.append(firstContainer);


const firstEle = document.createElement('button')
firstEle.className = 'firstEleClass';
firstEle.id = 'firstEleid';
firstEle.textContent = '4';
firstContainer.appendChild(firstEle);


const secondEle = document.createElement('button');
secondEle.className = 'secondEleClass';
secondEle.id = 'thirdN';
secondEle.textContent = '2';
firstContainer.appendChild(secondEle);

const operation2 = document.createElement('span');
operation2.className = 'operation2Class';
operation2.id = 'operation2';
operation2.textContent = '*';
firstContainer.insertBefore(operation2, secondEle);
operation2.style.margin = "10px";

const screenTotalEle = document.createElement('button');
screenTotalEle.className = 'screenTotalEleClass';
screenTotalEle.id = 'screenTotalEleid';
screenTotalEle.textContent = '0';
firstContainer.appendChild(screenTotalEle);
screenTotalEle.style.width = "5em";

const equalEle = document.createElement('span');
equalEle.className = 'secondEleClass';
equalEle.id = 'thirdN';
equalEle.textContent = '=';
firstContainer.insertBefore(equalEle, screenTotalEle);
equalEle.style.margin = "10px";

const convFirstEle = parseInt(firstEle.textContent);
const convSecondEle = parseInt(secondEle.textContent);
const opera = operation2.textContent;

screenTotalEle.textContent = {
'+': convFirstEle + convSecondEle,
'-': convFirstEle - convSecondEle,
'*': convFirstEle * convSecondEle,
'/': convFirstEle / convSecondEle,
}[opera];

/*screenTotalEle.textContent = convFirstEle + convSecondEle;
  if (operation1.textContent === '+'){
    total.textContent = convFirstEle + convSecondEle;
} else if (operation1.textContent === '-'){
    total.textContent = convFirstEle - convSecondEle;
} else if (operation1.textContent === '*'){
    total.textContent = convFirstEle * convSecondEle;
} else if (operation1.textContent === '/'){
    total.textContent = convFirstEle / convSecondEle;
}*/