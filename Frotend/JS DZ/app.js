//ПУНКТ1
// var Tags = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1', 'p', 'h1', 'ol', 'br'];
//
// var Counts = {};
//
// for (let Tag of Tags) {
//     Counts[Tag] = (Counts[Tag] || 0) + 1;
// }
//
// var Sorted = [];
// for (let Key in Counts) {
//     Sorted.push([Key, Counts[Key]]);
// }
//
// Sorted.sort((a, b) => b[1] - a[1]);
//
// var SortedObject = {};
// for (let i = 0; i < Sorted.length; i++) {
//     SortedObject[Sorted[i][0]] = Sorted[i][1];
// }
//
// console.log(SortedObject);


//ПУНКТ2
// function filterBooks(...books) {
//     const withU = [];
//     const withoutU = [];
//
//     for (let book of books) {
//         let foundU = false;
//         for (let i = 0; i < book.length && !foundU; i++) {
//             if (book[i] === 'у' || book[i] === 'У') {
//                 foundU = true;
//             }
//         }
//         if (foundU) {
//             withU.push(book);
//         } else {
//             withoutU.push(book);
//         }
//     }
//
//     console.log('Книги с буквой "у":', withU);
//     console.log('Остальные книги:', withoutU);
// }
//
// filterBooks('Пустынные улицы', 'Зов кукушки', 'Дом в горах', 'Гордость и предубеждение', 'Унесенные ветром');


//ПУНКТ 3

const courses = [
    {
        courseName: 'JavaScript',
        students: [
            { name: 'John', grades: [60, 55, 95] },
            { name: 'Jack', grades: [59, 90, 95] }
        ]
    },
    {
        courseName: 'Python',
        students: [
            { name: 'Mark', grades: [78, 82, 80] },
            { name: 'Alice', grades: [85, 88, 90] }
        ]
    }
];

const courseAverages = courses.map(({ courseName, students }) => ({
    courseName,
    students: students.map(({ name, grades }) => ({
        name,
        averageGrade: grades.reduce((total, grade) => total + grade, 0) / grades.length
    }))
}));

console.log(courseAverages);
