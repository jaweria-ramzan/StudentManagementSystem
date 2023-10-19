class Student {
    name: string;
    courses: string[];
    balance: number;
    studentId: number;

    constructor(name: string, courses: string[]) {
        this.name = name;
        this.courses = courses;
        this.balance = 0;
        this.studentId = this.generateStudentId();
    }

    generateStudentId(): number {
        return Math.floor(10000 + Math.random() * 90000);
    }

    enroll(course: string): void {
        this.courses.push(course);
    }

    viewBalance(): number {
        return this.balance;
    }

    payTuition(amount: number): void {
        this.balance -= amount;
    }

    showStatus(): void {
        console.log("Student ID:", this.studentId);
        console.log("Name:", this.name);
        console.log("Courses Enrolled:", this.courses.join(', '));
        console.log("Balance:", this.balance);
    }
};
//eg
const student1 = new Student("John Doe", ["Math", "Science"]);
student1.enroll("History");
student1.payTuition(6000);
student1.showStatus();
