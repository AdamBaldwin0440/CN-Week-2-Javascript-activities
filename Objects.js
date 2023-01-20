// const Person = {
//     name: "Adam",
//     Age: 32,
//     FavouriteSongs: [
//         "Surface Pressure",
//         "Move Mountains",
//         "Stronger than You",
//         "____ Perfect",
//         "God Thinks",
//         "Anywhere Away from Here"
//     ]
//   };

//   console.log(Person.FavouriteSongs)

// let Day = "Sunday"
// const Alarm = {
//     WeekendAlarm: "No cause for alarm",
//     WeekdayAlarm: "ALARUM! It's 7am! ALARUM!"
// }
// if (Day == "Monday" || Day == "Tuesday" || Day == "Wednesday" || Day == "Thursday" || Day == "Friday"){
//     console.log(Alarm.WeekdayAlarm)
// } else {console.log(Alarm.WeekendAlarm)}

// Activity 1
// let Person = {
//     name: "Adam",
//     Age: 32,
//     FavouriteSongs: [
//         "Surface Pressure",
//         "Move Mountains",
//         "Stronger than You",
//         "____ Perfect",
//         "God Thinks",
//         "Anywhere Away from Here"
//     ],
//     SayHi(){
//         return `Hello my name is ${this.name}`
//     }
// }
// console.log(Person.SayHi()) //SayHi is a function so needs to end with ()

// Activity 2

// let Pet = {
//     name: "Freyja",
//     Type: "Doggo",
//     Age: 1,
//     colour: "Light brown",

//     Eat(){
//         return `${this.name} is eating EVERYTHING`
//     },
//     Drink(){
//         return `${this.name} is drinking water`
//     }
// }
// console.log(Pet.Eat(),"and",Pet.Drink())

//Activity 3

// let CoffeeShop ={
//     Branch: "Widnes",
//     Drinks: [
//         "Americano",
//         "Latte",
//         "Cappucino",
//         "Mocha",
//         "Flat White",
//         "Expresso",
//         "Caramel Macchiato",
//     ],
//     DrinkPrice: [
//         1.50,
//         1.60,
//         1.60,
//         1.75,
//         1.50,
//         1.25,
//         1.95,
//     ],
//     Food: [
//         "Biscuit",
//         "Granola bar",
//         "Crisps",
//     ],
//     FoodPrice:[
//         0.50,
//         0.60,
//         0.75,
//     ],
//     FoodOrder(Order){
//         let FoodTotal = 0 
//         for(let i = 0; i <Order.length; i++){
//             console.log(Order[i])
//             console.log(this.FoodPrice[this.Food.indexOf(Order[i])])
//             FoodTotal +=this.FoodPrice[this.Food.indexOf(Order[i])]
//         }
//         console.log(`Total Cost = £${FoodTotal.toFixed(2)}`)    
//     },
//     DrinkOrder(DOrder){
//         let DrinkTotal = 0
//         for(let d = 0; d <DOrder.length; d++){
//             console.log(DOrder[d]);
//             console.log(this.DrinkPrice[this.Drinks.indexOf(DOrder[d])])
//             DrinkTotal +=this.DrinkPrice[this.Drinks.indexOf(DOrder[d])]
//         }
//         console.log (`Total Cost = £${DrinkTotal.toFixed(2)}`)
        
//     },
// }

// CoffeeShop.FoodOrder(["Biscuit","Granola bar"])
// CoffeeShop.DrinkOrder(["Americano", "Mocha", "Caramel Macchiato"])

