const courseList = [{code: "ACIT 1620", name: "Web Fundamental Technologies"}, {code: "ACIT 1420", name: "Intro to System Administrator"}, {code: "ACIT 1630", name: "Database Systems"}]

console.log(courseList);

let input = "";
do {
    input = (prompt("Enter code:"));   
} while (input.length !=4 || isNaN(input))


let x = false
for (let prop of courseList)
    {
        if (prop["code"].includes(input))
        {
            console.log(`Yes I am taking the course: ${prop.code} - ${prop.name}`)
            x = true
        }
    }

if (x === false)
    {
digit = Number
courseList.push({"code": digit, "name": null})
    console.log("Success")
    }



