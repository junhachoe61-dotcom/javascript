class Student {
    name;
    age;
}

const s1 = new Student();
console.log(s1);

const s2 = {
    name: undefined,
    age: undefined,
}
console.log(s2);

class Teacher {
    name;
    age;

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const t1 = new Teacher("김준일", 33);
console.log(t1.name);

const t2 = {
    name: "김준일",
    age: 33
};

console.log(t2.name);

console.log(t2["name"]);
const key = "name";
console.log(t2[key]);
t2["address"] = "부산 부산진구";
console.log(t2);

const t3 = {
    ...t2,
    gender: "남",
};
console.log(t3);