const courseList = [{code: "ACIT 1620", name: "Web Fundamental Technologies", term: "Fall 2022"}, {code: "ACIT 1420", name: "Intro to System Administrator", term:"Fall 2022"}, {code: "ACIT 1630", name: "Database Systems", term: "Fall 2022"}]

console.log(courseList);

let input = "";
do {
    input = (prompt("Enter code:"));   
} while (input.length !=4 || isNaN(input))



