class Animal {
    constructor(name, color, age) {
        this.name = name
        this.color = color
        this._age = age
    }
     get age(){
         return this._age
     }
     set age(value){
        this._age = value
     }
    run(){
        this.run = true
    }
}
class Cat extends Animal {

    constructor(name, color, age, weight) {
        super(name, color, age)
        this.isSleep = false
        this.hungryLevel = 0
        this.weight = weight
    }
    sleep(){
        if(!this.isSleep){
            this.isSleep = true;
            console.log(`${this.name}is sleeping`)
        }else {
            console.log(`${this.name}is not sleeping`)
        }
    }
    wakeUp(){
        if(this.isSleep){
            this.isSleep = false;
            console.log(`${this.name}woke Up`)
        }else {
            console.log(`${this.name}is already awake`)
        }
    }
    play(){
        if(this.isSleep){
            console.log(`${this.name}playing`)
        }
    }
}
const appolon = new Cat('Appolon', 'White', 18)
const barsik = new Animal('Barsik', 'grey', 30)
barsik.age = 7
appolon.age = 23

appolon.play()