console.log("출력!!");
console.log("출력!!");
console.log(0/0);
console.log("출력!!");

let name = "김준일";
console.log(name);
name = 123;
console.log(name);
name = [1,2,3,4,5,6,7]
console.log([1,2,3,4,5,6,7])
name = {
    "a": [1,2,3,4],
    "b": "김준일",
    "c": 1234
};
console.log(name);
console.log(name["b"]);
console.log(name.c);

let data = [
    {
        class1: {
            student1: {
                id: 1,
                object: {
                    name: "김준일",
                    address: "서울"
                },
                createdAt: new Date("2025-10-19")
            },
            student2: {
                id: 2,
                object: {
                    name: "김준이",
                    address: "서울"
                },
                createdAt: new Date("2025-10-20")
            }
        }
    },
    {
        class2: {
            student1: {
                id: 1,
                object: {
                    name: "김준일",
                    address: "부산"
                },
                createdAt: new Date("2025-10-19")
            },
            student2: {
                id: 2,
                object: {
                    name: "김준이",
                    address: "부산"
                },
                createdAt: new Date("2025-10-20")
            }
        }
    }
]

console.log(JSON.stringify(data));
console.log(data[1].class2.student1.object.name);
