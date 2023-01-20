// Activity 1
// let movies = [
//     "LOTR 1",
//     "LOTR 2",
//     "LOTR 3",
//     "Avengers Infinity War",
//     "Serenity"
// ];

// movies.push("Frozen", "The Greatest Showman");
// // console.log(movies)

// let currentmovie = "Serenity";
// while(currentmovie !="LOTR 1"){
//     console.log(currentmovie);
//     currentmovie = movies[Math.floor(Math.random()*7)];
// }
// console.log(currentmovie);

// Activity 2

// for(let i = 0; i < 6; i++){
//     console.log(Math.ceil(Math.random()*50))
// }

//Activity 3

// const numlist = ("0123456789")
// let rev = numlist.split('').reverse().join("");
// console.log(rev)

//Alt

// for(let i = 9; i >=0; i--){
//     console.log(i)
//}
//Activity 4

// let movies = [
//         "LOTR 1",
//         "LOTR 2",
//         "Avengers Infinity War",
//         "Ghostbusters",
// ]

// console.log(movies)

// for(let i = 0; i < movies.length; i++){
//     console.log(movies[i]);
// }
// let GhostCheck = movies.includes("Ghostbusters",(3))
// console.log(GhostCheck)
// if (movies = GhostCheck){
//     console.log("Yay it's Ghostbusters")
// } else {console.log("Aww")}

//movies = Ghostcheck was the command that made the true/false apply to the array

//Activity 5

// for(let i = 0; i < 6; i++){
//         console.log(Math.ceil(Math.random()*30))
//     } 
// if (a % 7 == 0){
//     console.log(`${a} is divisible.`);
// } else{
//     console.log(a)
// } 

//Activity 6

// const BobFollowers = [
//     "Milly",
//     "Molly",
//     "Mandy",
//     "George",
// ]

// const HannahFollowers = [
//     "George",
//     "Tom",
//     "Molly",
//     "Forsythia",
// ]
// for (let i = 0; i < BobFollowers.length; i++){
//     for (let J = 0; J < HannahFollowers.length; J++){
//         if (BobFollowers[i] === HannahFollowers[J]){
//             console.log(HannahFollowers[J])
//         }    
//     }    
// }

//Activity 7

//For loop = repeats the instructions until the set number of iterations is reach, then stops
//While loop = the code will run as long as the condition remains true. The condition is tested at the start of the loop
//Do...while = The condition is tested at the end of the loop, so it will run through an iteration before testing and terminating if no longer true

//While Example
// var i = 1;
//     while(i <= 5) 
//       {console.log("The number is " + i); i++;
//     }
// //Do..While Example - checks at the end of the loop, so another value could potentially be added to the last loop before it runs false?
// var j = 1;
// do {
//     console.log("This number is " + j);
//     j++;
// }
//     while (j<=5)
//For example - particularly good in arrays, useful for repeating a set number of times
for (k=1; k<=5; k++){
    console.log("this number will be " + k)
}
