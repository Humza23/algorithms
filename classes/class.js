class Student {
    constructor(firstName, lastName){
        this.firstName = firstName
        this.lastName = lastName
        this.tardies = 0;
        this.scores = []
    }
    fullName(){
        return `your full name is ${this.firstName} ${this.lastName}`
    }
    markLate(){
        this.tardies += 1;
        if(this.tardies >= 3){
            return `EXPELLED!`
        }
        return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
    }
    addScore(score){
        this.scores.push(score)
        return this.scores
    }
}

let emil = new Student("Emil", "Steele")

// emil.markLate()

// console.log(emil.markLate());
emil.addScore(82)
console.log(emil.scores);