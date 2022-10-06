'use strict';
//console.log(3 + 4);
//console.log(3+4);

//alert('hello susan ushie! how are you today?');

//console.log('i am a boy');

/*const age = 17;
age >= 18 ? 'wine' : 'water';
const drink = age >= 18 ? "wine":"water";
console.log(drink);
*/
//const  day = 'Saturday';

/*switch(day) {
 case'Monday': 
  console.log('go for lectures');
  console.log('go for coding meet up');
  break;
 case'Tuesday':
  console.log('go for trading training');
  break;
 case'Wednesday':
  console.log('go to marian office');
  break;
 case'Thursday':
  console.log('travel to uyo');
  break;
 case'Friday':
  console.log('part all night');
  break;
 case'Saturday':
 case'Sunday':
  console.log('enjoy the weekend');
  break;
  default:
   console.log('Not a valid day!')
}*/

/*
if( day === 'Monday'){
 console.log("go for lectures");
 console.log("go for coding meet up");
}else if(day === 'Tuesday'){
 console.log("go for trading training");
}else if(day === 'Wednesday'){
 console.log('go to marian eagerly office');
}else if(day === 'Thursday'){
 console.log("travel to uyo");
}else if(day === 'Friday'){
 console.log("part all night");
}else if(day === 'Saturday'){
 console.log("enjoy the weekend");
}else if(day === 'Sunday'){
  console.log("enjoy the weekend");
}else{
 console.log('Not a valid day!')
}*/

/*const bill = 430;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(`the bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);*/

/*const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
//TEST 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);



const checkWinner = function (avgDolphins, avgKoalas) {
  if(avgDolphins >= 2 * avgKoalas){
    console.log(`dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  }else if(avgKoalas >= 2 * avgDolphins){
    console.log(`koalas win (${avgKoalas} vs. ${avgDolphins})`);
  }else{
    console.log('no one wins');
  }
}

checkWinner(scoreDolphins, scoreKoalas);

//TEST 2
 scoreDolphins = calcAverage(85, 54, 41);
 scoreKoalas = calcAverage(23, 34, 27);
 checkWinner(scoreDolphins, scoreKoalas);
 */

 /*const bill = 40;
 const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
 console.log(
   `the bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
 );
*/

/*const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
 }
 console.log(calcTip(40));
 console.log(calcTip(275));
 console.log(calcTip(430));

 const bills = [125, 55, 44];
 const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
 const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
 console.log(bills,tips,totals);
*/

/*const friends = ['Micheal', 'Steven', 'Peter'];
console.log(friends);
console.log(friends.length);

const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Micheal', 'Peter', 'Steven']
};

//challenge
//jonas has 3 friends, and his best friend is called Micheal.
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}.`);
*/

/*const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Micheal", "Peter", "Steven"],
  hasDriversLicense: false,

  //calcAge: function(birthYear) {
  //return 2037 - birthYear;
  // }

  //calcAge: function() {
  //console.log(this);
  //return 2037 - this.birthYear;
  //}

  calcAge: function () {
  this.age = 2037 - this.birthYear;
  return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
  }
};

console.log(jonas.calcAge());

//console.log(jonas['calcAge'](1991));
 console.log(jonas.age);
 console.log(jonas.age);
 console.log(jonas.age);

jonas.location = 'portugal';
jonas['twitter'] = '@jonasschmedtman';

console.log(jonas.getSummary());
*/
/*const bmiMark = 78/(1.69 ** 2);
const bmiJohn = 92/(1.95** 2);
console.log(bmiMark, bmiJohn);*/

/*
const mark = {
  fullName: 'Mark Miller',
  mass: 27.30,
  height: 1.69,

  calcBmi: function () {
    this.bmiMark = 78 / 1.69 ** 2;
    return this.bmiMark;
  }
};

const john = {
  fullName: "John Smith",
  mass: 24.19,
  height: 1.95,

  calcBmi: function () {
    this.bmiJohn = 92 / 1.95 ** 2;
    return this.bmiJohn;
  },
};

 mark.calcBmi();
 john.calcBmi();
 console.log(`${mark.fullName}'s BMI(${mark.calcBmi()}) is higher than ${john.fullName}'s(${john.calcBmi()})`);

 if(mark.calcBmi > john.calcBmi) {
   console.log(
     `${mark.fullName}'s BMI(${mark.calcBmi()}) is higher than ${
       john.fullName
     }'s(${john.calcBmi()})`);
    }else if(john.calcBmi > mark.calcBmi) {
   console.log(
     `${john.fullName}'s BMI(${mark.calcBmi()}) is higher than ${john.fullName}'s(${mark.calcBmi()})`
   );
    }

//console.log(john.calcBmi(), mark.calcBmi());
//console.log(john, mark);
//const friends = ['micheal', 'john', 'aniekan'];
//console.log(friends.length -1);
*/

/*const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ['Micheal', 'Peter', 'Steven'],
  true,
  "portugal"
];

const types = [];

for(let i= 0; i < jonasArray.length; i++) {
  //reading from jonasArray array
  console.log(jonasArray[i], typeof jonasArray[i]);

  //filling types array
  //types[i] = typeof jonasArray[i];
  types.push(typeof jonasArray[i]);
}

console.log(types); 
*/

//FOR LOOP
  /*console.log('Lifting weight repetition 1');
  console.log("Lifting weight repetition 2");
  console.log("Lifting weight repetition 3");
  console.log("Lifting weight repetition 4");
  console.log("Lifting weight repetition 4");
  console.log("Lifting weight repetition 5");
  console.log("Lifting weight repetition 6");
  console.log("Lifting weight repetition 7");
  console.log("Lifting weight repetition 8");
  console.log("Lifting weight repetition 9");
  console.log("Lifting weight repetition 10");*/

  //for( let rep = 1; rep <= 10; rep++) {
  //  console.log(`Lifting weight repetition ${rep}`);
 // }

  /*const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Micheal', 'Peter', 'Steven']
  ];

  for (let i = 0; i <= jonasArray.length -1; i++) {
    console.log(i, jonasArray[i]);
  }*/

//LOOPING BACKWARDS
/*const jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Micheal", "Peter", "Steven"],
];

console.log('---ONLY NUMBER---');

for( let i = 0; i <= jonas.length -1;  i++) {
  //if(typeof jonas[i] !== 'string') continue;
  if(typeof jonas[i] === 'number') break;

  console.log(i, jonas[i], typeof jonas[i]);
}*/

/*const years = [1991, 2007, 1969, 2020];

const ages = [];

for(let i = 0; i <= years.length -1; i++) {
  ages.push( 2037 - years[i]);
}*/

/*for( let exercise = 1; exercise <4; exercise++) {
  console.log(`Exercise ${exercise}: starting exercise ${exercise}`);

  for( let rep = 1; rep <6; rep++) {
    //console.log(`---------lifting weight repetition ${rep}`);
  }
}*/

//WHILE LOOP
  /*let rep = 1;
  while ( rep <= 10) {
    console.log(`---------lifting weight repetition ${rep}`);
    rep++;
 }*/

/*let dice = Math.trunc(Math.random() * 6) +1;

while ( dice !== 6) {
  console.log(`You just rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if( dice === 6) console.log('Loop is about to end...');
}*/
     /*const calcTip = function  (bills) {
       return bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.2;
     };

 calcTip;

 const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

 const tips = [];
 const totals = [];

 for ( let i = 0; i <= bills.length -1; i++) {
    //const tip = (calcTip(bills[i]));
    //tips.push(tip);
    //totals.push(tip + bills[i]);

    tips.push(calcTip(bills[i]));
    totals.push(calcTip(bills[i]) + bills[i]);
 }
 
 console.log(bills, tips, totals); */

 /* const calcAverage = function(arr) {
    let sum = 0;

    for( let i = 0; i <= arr.length -1; i++) {
      sum = sum + arr[i];
    }

    return sum / arr.length  -1;
  }

  console.log(calcAverage([2,3,7]));
  console.log(calcAverage(totals));
  console.log(calcAverage(tips)); */
 

  /*const calcAge = birthYear => 2037 - birthYear;
  console.log(calcAge(1991));*/

  /* const calcTempAmplitude = function (temps) {
    let max = temps[0];
    let min = temps[0];

    for (let i = 0; i < temps.length; i++) {
      if (temps[i] > max) max = temps[i];
      if (temps[i] < min) min = temps[i];
    }
    console.log(max, min);
  };
  calcTempAmplitude([5, 3, 2, 8, 8]);*/

  //SAVING TEMPS INTO A VARIABLE
  /*const calcTempAmplitude = function (temps) {
    let max = temps[0];
    let min = temps[0];

    for (let i = 0; i < temps.length; i++) {
      const curTemp = temps[i];
      if (typeof curTemp !=="number") continue;

      if (curTemp > max) max = curTemp;
      if (curTemp < min) min = curTemp;
    }
    console.log(max, min);
    return max - min;
  };
  const amplitude = calcTempAmplitude(temperatures);
  console.log(amplitude);*/

  /*const array1 = ["a", "b", "c"];
  const array2 = ["d", "e", "f"];
  const array3 = array1.concat(array2);
  console.log(array3);*/

  //const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

  /*const calcTempAmplitudeNew = function (t1, t2) {
    const temps = t1.concat(t2);

    let max = temps[0];
    let min = temps[0];

    for (let i = 0; i < temps.length; i++) {
      const curTemp = temps[i];
      if (typeof curTemp !== "number") continue;

      if (curTemp > max) max = curTemp;
      if (curTemp < min) min = curTemp;
    }
    console.log(max, min, temps);
    return max - min;
  };
  const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
  console.log(amplitudeNew);*/

  /*const measureKelvin = function () {
    const measurement = {
      type : 'temperature',
      unit : 'celsius',
      value : 10 /*Number(prompt('degrees celsius:'))
    }

    const kelvin = measurement.value + 273;
    return kelvin;
  }
  console.log(measureKelvin());

  const calcTempAmplitudeBug = function (t1, t2) {
    const temps = t1.concat(t2);

    let max = temps[0];
    let min = temps[0];

    for (let i = 0; i < temps.length; i++) {
      const curTemp = temps[i];
      if (typeof curTemp !== "number") continue;

      if (curTemp > max) max = curTemp;
      if (curTemp < min) min = curTemp;
    }
    console.log(max, min, temps);
    return max - min;
  };
  const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
  console.log(amplitudeBug);
  
  var array = [1, 2, 3];

  for (var i = 0; i < array.length; i++) {
    console.log("tunde" ([array[i]]));
  }*/

  //const array1 = [17, 21, 23];
  //const array2 = [12, 5, -5, 0, 4];
  //const arr = array1.concat(array2);

  //console.log(`${array1[0]}..oC`);

  /*function updateVegetablesCollection (veggies, veggie) {
    if (veggies.indexOf(veggie) === -1) {
        veggies.push(veggie);
        console.log('New veggies collection is : ' + veggies);
    } else if (veggies.indexOf(veggie) > -1) {
        console.log(veggie + ' already exists in the veggies collection.');
    }
}

var veggies = ['potato', 'tomato', 'chillies', 'green-pepper'];

updateVegetablesCollection(veggies, 'spinach');
// New veggies collection is : potato,tomato,chillies,green-pepper,spinach
updateVegetablesCollection(veggies, 'spinach');
// spinach already exists in the veggies collection.*/

//console.log(document.querrySelector('.guess').value);
//console.log(document.querrySelector('.guess').value = 23);
//console.log(document.querySelector(".message").textContent);
//document.querySelector(".message").textContent = "Correct Number";

/*const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;

let score = 20;

document.querySelector('.check').addEventListener('click', function() {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof  guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'No Number';
  }else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number';
  }else if (guess > secretNumber) {
    document.querySelector('.message').textContent = 'Too high';
    score--;
    document.querySelector('.score').textContent = score;
    }else if (guess < secretNumber) {
    document.querySelector('.message').textContent = 'Too low';
    score--;
    document.querySelector('.score').textContent = score;
  }
});*/

console.log('a+very+nice+string'.split('+'));

const [firstName, lastName] = 'jonas schmedtmann'.split(' ');
console.log(firstName, lastName);

