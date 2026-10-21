function main() {
    console.log("메인함수 호출");
    let student = {
        name: "김준일",
        age: 33,
        address: [
            "부산시",
            "부산진구",
            "부암동",
        ],
    };
    console.log(student);

    let student2 = 0/0;
    console.log(typeof student2);

    const PI = 3.14;  // const는 java에서 final

}

main();