const students = [
    {
        name: "김준일",
        age: 33,
    },
    {
        name: "김준이",
        age: 34,
    },
]
/*
const domStudents = [
    "<div>
        <div>이름: 김준일</div>
        <div>나이: 33</div>
    </div>",
    "<div>
        <div>이름: 김준이</div>
        <div>나이: 34</div>
    </div>",

]
/*

 */
let students = [
    {
        name: "김준일",
        age: 33,
    },
    {
        name: "김준이",
        age: 34,
    },
]

students = [
    ...students,
    {
        name: "김준삼",
        age: 35,
    },
]

function mapFx(data) {
    return `
        <div>
            <div>이름: ${data.name}</div>
            <div>나이: ${data.age}</div>
        </div>
    `
}

const domStudents = students.map(mapFx)
console.log(domStudents)