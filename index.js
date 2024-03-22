// Решение Задач




let students = [
    {
        id: 1,
        name: "MuhammadAli",
        course: "Frontend",
        startDate: "2023-12-03",
        scores: [
            {
                theme: "HTML",
                score: 7
            },
            {
                theme: "CSS",
                score: 8
            },
            {
                theme: "JS",
                score: 4
            },
        ]
    },
    {
        id: 2,
        name: "Javohir",
        course: "Frontend",
        startDate: "2023-12-10",
        scores: [
            {
                theme: "HTML",
                score: 4
            },
            {
                theme: "CSS",
                score: 7
            },
            {
                theme: "JS",
                score: 6
            },
        ]
    },
    {
        id: 3,
        name: "Munir",
        course: "Frontend",
        startDate: "2023-10-10",
        scores: [
            {
                theme: "digital",
                score: 7
            },
            {
                theme: "HTML",
                score: 9
            },
            {
                theme: "CSS",
                score: 5
            },
            {
                theme: "JS",
                score: 7
            },
        ]
    },
    {
        id: 4,
        name: "Jahonbek",
        course: "Frontend",
        startDate: "2023-10-29",
        scores: [
            {
                theme: "digital",
                score: 6
            },
            {
                theme: "HTML",
                score: 7
            },
            {
                theme: "CSS",
                score: 6
            },
            {
                theme: "JS",
                score: 8
            },
        ]
    },
]

console.warn("BEFORE");
console.table(students);


for(let item of students) {
    item.averageScore = 0

    for(let grade of item.scores) {
        item.averageScore = item.averageScore + grade.score
    }

    item.averageScore = (item.averageScore / item.scores.length).toFixed(1) 

    let variance = Date.parse(new Date()) - Date.parse(item.startDate)
    item.studyDuration = ((variance / 1000) / 60 / 60 / 24 / 30).toFixed(1) 


}

console.warn("AFTER");
console.table(students);






    // let variance = Date.parse(new Date()) - Date.parse("2023-12-03")


// console.log(

//     (variance / 1000) / 60 / 60 / 24 / 30 


    // Date.parse("2023-12-03"),
    // Date.parse(new Date())

    // new Date().getFullYear(),
    // new Date().getMonth() + 1,
    // new Date().getDate()
 // );







// home work
// найти самого умного ученика 
// найти кто дольше всех учится
// найти кто меньше всех учится



let best_student = students.reduce((a, b) => {
    return Math.max(a, b.averageScore);
}, 0);
console.log(best_student);



let longest = students.reduce((a, b) => {
    return Math.max(a , b.studyDuration)
}, 0);
console.log(longest);




let shortest = students.reduce((a, b) => {
    return Math.min( a , b.studyDuration)
}, longest);
console.log(shortest);
