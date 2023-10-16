// ❓ DESCRIPTION:
// Consider the following class:

// var Animal = { 
//     name: "Cat", 
//     numberOfLegs: 4 
// }
// Write a method that accepts a list of objects of type Animal, and returns a new list. The new list should be a copy of the original list, sorted first by the animal's number of legs, and then by its name.

// If an empty list is passed in, it should return an empty list back.

// ✅ SOLUTION

function sortAnimal(arr) {
    let animals = []
    arr.forEach(animal => animals.push(animal))
    if (!animals) return []
    return animals.sort((a, b) => {
        return a.numberOfLegs - b.numberOfLegs || a.name.localeCompare(b.name)
    })
}


const animals = [{ "name": "Cat", "numberOfLegs": 4 },
{ "name": "Snake", "numberOfLegs": 0 },
{ "name": "Dog", "numberOfLegs": 4 },
{ "name": "Pig", "numberOfLegs": 4 },
{ "name": "Human", "numberOfLegs": 2 },
{ "name": "Bird", "numberOfLegs": 2 }]

console.log(sortAnimal(animals))

