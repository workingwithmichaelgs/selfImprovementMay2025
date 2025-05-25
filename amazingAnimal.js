class Animal {
    constructor(name, age, type, favouriteFoods, totalLegs) {
        this.name =name
        this.age =age
        this.type = type
        this.favouriteFoods =favouriteFoods
        this.totalLegs =totalLegs
    }
    move() {
        if (this.type === "fish") {
            return `iam a swimming with my fin`
        }
        return `im walking and running with my ${this.totalLegs} legs`
    }
    getInformation(salam) {
        return `Im walking and running with my legs
        ${salam} My name is ${this.name}, my current age is ${this.age} years old
        I am a ${this.type}
        My Favorite food are ${this.favouriteFoods.join(" & ")}
        `
    }
}


console.log(new Animal("Picollo", 23, "dog", ["meat", "cake"], 4).move());

// console.log(new Animal("Popo", 19, "Cat", ["fish", "tuna"],4).getInformation("Meoww !!"));

// let array = ["fish", "tuna"]
// console.log(array.join(" & "));
