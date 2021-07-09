/*diffret b/w let var and const */
// var ---->function
// let and const ----> block
// function sum(){
//   for(let i=0; i<5; i++ ){
//     console.log(i);
//   }

// }
// sum()

/*object */
// const person ={
//     name:'yasmeen',
//     walk(){
// console.log(this);
//     }

// }
// person.walk();

/* hoisting */
// sum()
//  sum() =>console.log('hello world');

/**arrow funtion */

// const add = number => number+number;
// console.log(add(5));

// const jobs =[
//     {id:1 , isActive:true},
//     {id:2 , isActive:false},
//     {id:3 , isActive:true},
// ]

// const activeJobs = jobs.filter(function(job){job.isActive});
// console.log(activeJobs);

/** arrow function and this keyword */
// const person = {
//     talk(){
//        setTimeout(() => {
//            console.log('this', this)
//        },1000)

//     }
// }
// person.talk()

/**array.map methis */

// const colors = ['red', 'blue', 'green']
// const items = colors.map(color => `<li>${color}</li>`);

// console.log(items)

/**object destructuring */

// const person={
//     address:'',
//     place:'',
//     city:''
// }

// const {address,place,city} = person;

// const numbers = [1, 40, 50, 100];
// console.log(numbers[1]);

// const elegibleForVote = (age) => {
//   if (age >= 18) {
//     console.log("eligible");
//   } else console.log("not eligible");
// };
// elegibleForVote(5);

// var name = document.getElementsByClassName("name");
// console.log("name");

// var name = document.getElementById("name2");

// function myfunction(multiplay) {
//   const output = multiplay * 3;
//   return output;
// }
// console.log(myfunction(9));

// function printhello() {
//   console.log("hello world");
// }
// setTimeout(printhello, 0);
// console.log("me first");
