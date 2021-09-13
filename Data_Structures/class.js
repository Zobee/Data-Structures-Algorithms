class Student {
  constructor(first, last){
    this.firstName = first
    this.lastName = last
  }
  fullName(){
    console.log(`${this.firstName} ${this.lastName}`)
  }
}

let highSchooler = new Student("Kira", "Jones")

highSchooler.fullName()