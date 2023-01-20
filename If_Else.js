//Activity 1 with stretch
// let Age = 14;
// let Country = "Germany"

// if (Age > 17 && Country == UK) {
//     console.log('I can serve you')
// } else {
//     console.log('I cannot serve you')
// }

//Activity two

// let pTopping = "chicken";

// switch(pTopping){
//     case "Mushrooms":
//     case "Olives":
//     case "cheese":
//     case "quorn":
//         console.log(`${pTopping} are important ingredients for my pizza`);
//         break
//     case "red peppers":
//     case "Green peppers":
//     case "sweetcorn":
//     case "Onion":
//     case "tomato":
//         console.log(`I don't mind having ${pTopping} on my pizza`);
//         break
//     case "anchovies":
//     case "pineapple":
//         console.log(`${pTopping} should not be on pizzas`)
//         break
//     default:
//         console.log("I can't have meat on my pizza")
// }

//Activity 3

// let Password = "Password123"

// if (Password.length < 8) {
//     console.log("Password is too short")
// } else {
//     console.log("Password is accepted")
// }

//Activity 3 stretch
// let num = 2546382

// if (num %3 == 0 || num %5 ==0){
//     console.log("this number is divisable by 3 or 5")
// } else {
//     console.log("This number doesn't work")
// }

//Activity 4

//let num = 30

// switch(true){
// case num %3==0 && num %5==0:
//     console.log("Fizz Buzz");
//     break;
// case num %3 == 0:
//     console.log("Fizz");
//     break;
// case num %5 == 0:
//     console.log("Buzz");
//     break;
// default:
//     console.log("Other Value")
// }

// Activity 4 other solution
// if (num%3 == 0 && num%5 == 0){
//     console.log("Fizz Buzz");
// } else 
// if (num%3 == 0){
//     console.log("Fizz");
// } else
// if (num%5 == 0){
//     console.log("Buzz")
// } else {
//     console.log("Other")
// }

//activity 5

// let NumP = "123321"; //"" makes it a string that can be split,rev,joined

// const CheckPal =() =>{ //this creates the CheckPal function based on the below checks
// const RevNumP = NumP.split('').reverse().join("") //only works on strings or arrays(no split for array)
// if (NumP === RevNumP) //strictly equals
//     return true;
// else
//     return false;
// }
// let result = CheckPal(NumP) //CheckPal is the result of the function, NumP is the number being checked
// if(result == true){
// 	console.log("The given string is Palindrome");
// }
// else{
//   	console.log("The given string is NOT Palindrome");
// }

//Activity 6

// let time = '14:58:00'
// let PlaceofWork = ("The Office")
// let Home =  ("Widnes")

// if (time > '00:00:00' && time <'08:00:00'){
//     console.log (`I am at home in ${Home}`)}
// else if (time >'08:00:00' && time<= '09:00:00'){
//     console.log(`I am commuting`)}
// else if (time >'09:00:00' && time<= '17:00:00'){
//     console.log(`I am working in ${PlaceofWork}`)}
// else if (time >'17:00:00' && time<= '18:00:00'){
//     console.log(`I am commuting`)}
// else if (time >'18:00:00' && time<= '23:59:59'){
//     console.log (`I am at home in ${Home}`)}

//Activity 7
// let Sequence = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi"
// const LastA = Sequence.lastIndexOf("a");
// const LastE = Sequence.lastIndexOf("e");
// const LastI = Sequence.lastIndexOf("i");
// const LastO = Sequence.lastIndexOf("o");
// const LastU = Sequence.lastIndexOf("u");
// console.log(LastA);
// console.log(LastE);
// console.log(LastI);
// console.log(LastO);
// console.log(LastU);
// //Said "a last vowel" but you get them all. 'i' at index:94 is the final in the whole sequence.

//Activity 8
// let Word = "discombobulated"
// let FirstLetter = Word.charAt(0)
// let LastLetter = Word.charAt(Word.length-1)
// if (FirstLetter === LastLetter){
//     console.log('True')
// } else {console.log("False")}

//Activity 9
// let Num1 = 6
// let Num2 = 3
// if ((Num1+Num2)%2==0){
//     console.log(Num1+Num2)
// } else {console.log(Num1*Num2)}
