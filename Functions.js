// let age = 21

// if (age < 18) {
//     console.log('£8');
// } else if(age >=18 && age < 60){
//  console.log('£10.95');
//  } else {console.log('£7.50');
// }

// const FavCol = (Colour) => {
//     console.log(`My favourite colour is ${Colour}`);}

//     FavCol("Blue");
//     FavCol("Green"); 
//     FavCol("red")

// Activity 1

// const factorial = (n) =>{
// if ((n === 0) || (n === 1))
// {return 1
// } else {return (n * factorial(n-1));
// }
// }
// console.log(factorial(33))

//Activity 2

// let OrderCount = 0

// const TakeOrder = (Topping1, Topping2) => {
//     console.log(`Pizza with ${Topping1} and ${Topping2}`);
//     (OrderCount++);
//      }

// TakeOrder("Pineapple", "Ham")
// TakeOrder("Cheese", "tomato")
// TakeOrder("Mushrooms", "Pepperoni")
// console.log(OrderCount++)

// Activity 3

let Pin = 1234;
let Balance = 100;

const Cashwithdraw = (EnterPin, Withdrawl) => {
    if ((Pin === EnterPin) &&(Withdrawl<=Balance)){
            console.log("Cash is being dispensed")
    } else if ((Pin !== EnterPin) && (Withdrawl<=Balance)){
        console.log("Incorrect PIN")
    } else if ((Pin === EnterPin) && (Withdrawl>Balance)){
        console.log("Insufficent Funds")
    } else {
        console.log("Unexpected Error")
    }    
}
Cashwithdraw(1234, 50)
Cashwithdraw(124, 50)
Cashwithdraw(1234, 150)

