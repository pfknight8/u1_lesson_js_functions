// const showMovie = (movie, year) => {
//   console.log(`${movie} was released in theatres in the year ${year}`)
// }

// showMovie('Saving Private Ryan', 1998)
// showMovie('Interstellar', 2014)
// showMovie('Jason Bourne', 2016)

// //Notice we use arrow functions in this course.
// //Can also do this:
// function makeFood() {
//   //write code here.
// }
// //function expression vs declaration.

// //Invoking: showMovie() //Invoking
// showMovie("Blade Runner", 1982)

const printHelloWorld = () => {
  console.log("Hello World");
}
printHelloWorld();

const printStatement = (aString) => {
  console.log(aString);
}
const myString = "How are you?"
printStatement(myString);

const printOneToHun = () => {
  let n = 1
  while (n <= 100) {
    console.log(n);
    n++;
  }
}
printOneToHun();

const printArr = (anArr) => {
  for (i = 0; i < anArr.length; i++) {
    console.log(anArr[i]);
  }
}
let myArr = [1, 2, 3]
printArr();


const printStudents = (studentArr) => {
  for (let i = 0; i < studentArr.length; i++) {
    console.log(studentArr[i]);
  }
}
const students = [
  'Alice',
  'Andrew',
  'Casey',
  'Damian',
  'Grant',
  'Howie',
  'Wade',
  'Kat',
  'Kimbrad',
  'Kiu',
  'Natasha',
  'Obi',
  'Pedro',
  'Sarah',
  'Scott',
  'Tiffany',
  'Zhe'
]
printStudents(students);
