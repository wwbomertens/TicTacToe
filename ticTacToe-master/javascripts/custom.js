var myFirstTest = "Wouter";
var myAge = 40;

//myFirstFunction();

//declare function
function myFirstFunction() {
    // body of a function

    alert(myFirstTest + " is " + myAge);


}

var car = {

    colour: "red",
    brand: "Volkswagen",
    doorNumber: 4,
    Engine: {
        name: "V8",
        type:"Gasoline"
    },
    owner: "Wouter",
    getOwner: function () {
        console.log("The owner is " + this.owner)
    }
}

console.log(car.Engine.type);

var firstArray = [1, 2, 3, 4, 5, 6]

console.log(firstArray[0] + " + " + firstArray[1] + "=" + firstArray[2]);

var secArray = [[1, 2], [3, 4], [5, 6]];

console.log(secArray[0][0]);
console.log(secArray[1][0]);
console.log(secArray[2][1]);

car.getOwner();

var complArray = [
    {
        name:"Wouter"
    },
    {
        name:"Shanny"
    }
]

function loopComplArray(mtxArray) {

    var oObject;
    var i;
    for (i = 0; i<mtxArray.length; i++) {
        oObject = mtxArray[i];
        const entries = Object.entries(oObject);
        for (const [name, count] of entries) {
            console.log()
        }
    }


}

loopComplArray(complArray);

