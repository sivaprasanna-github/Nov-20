class Student{
    name;
    grade;
    constructor(name, grade){
        this.name = name;
        this.grade = grade;
    }

    setGrade(newGrade){
        this.grade = newGrade;
        console.log(this.name, "has the grade is", this.grade);

    }

    getGrade(){
        console.log(this.name, "is now having the grade is" , this.grade);
    }
}

var SivaPrasanna = new Student("SivaPrasanna", 85);
console.log(SivaPrasanna.name, "having grade of", SivaPrasanna.grade);
SivaPrasanna.setGrade(90);
SivaPrasanna.getGrade();
console.log(SivaPrasanna);
console.table(SivaPrasanna);