console.log("A5.10_CW")
console.log("---- ---- ----")
console.log("Exercise 1")
console.log("---- ---- ----")
console.log("1.1")
console.log("---- ---- ----")

const studentsData = [
  {
    name: "Rahul",
    rollNo: 101,
    hindi: 80,
    english: 75,
    maths: 90,
    computer: 88,
  },
  {
    name: "Amit",
    rollNo: 102,
    hindi: 85,
    english: 70,
    maths: 95,
    computer: 92
  },
  {
    name: "Priya",
    rollNo: 103,
    hindi: 78,
    english: 92,
    maths: 87,
    computer: 95
  }
]

for(let i = 0; i < studentsData.length; i++){
  console.log("Name: " + studentsData[i].name + "\n" + "Roll No: " + studentsData[i].rollNo + "\n" + "Hindi: " + studentsData[i].hindi + "\n" + "English: " + studentsData[i].english + "\n" + "Maths: " + studentsData[i].maths + "\n" + "Computer: " + studentsData[i].computer + "\n" )
}
console.log("---- ---- ----")
console.log("1.2")
console.log("---- ---- ----")

const marksForScience = [82, 90, 88]
for(let i = 0; i < studentsData.length; i++){
  studentsData[i].science = marksForScience[i]
  console.log(studentsData[i])
}
console.log("---- ---- ----")
console.log("Exercise 2")
console.log("---- ---- ----")
console.log("2.1")
console.log("---- ---- ----")
const kaveriData =
  {
    name: "Kaveri",
    rollNo: 104,
    hindi: 84,
    english: 88,
    maths: 78,
    computer: 90,
    science: 86
  }

console.log("Kaveri's Data:", kaveriData)
console.log("---- ---- ----")
console.log("2.2")
console.log("---- ---- ----")
studentsData.push(kaveriData)
console.log("Updated Data:", studentsData)
console.log("---- ---- ----")
console.log("2.3")
console.log("---- ---- ----")
for(let i = 0; i < studentsData.length; i++){
  let totalMarks = studentsData[i].hindi + studentsData[i].english + studentsData[i].maths + studentsData[i].computer + studentsData[i].science
  
studentsData[i].totalMarks = totalMarks

}
console.log("Array with total marks:", studentsData)

console.log("---- ---- ----")

console.log("2.4")
console.log("---- ---- ----")

for(let i = 0; i < studentsData.length; i++){
  let numberOfSub = 5
  let avgMarks = studentsData[i].totalMarks / numberOfSub
  
  studentsData[i].avgMarks = avgMarks
} 
console.log("Students Data:", studentsData)
console.log("---- ---- ----")

console.log("Exercise 3")
console.log("---- ---- ----")

for(let i = 0; i < studentsData.length; i++){
  generateReportCard(studentsData[i])
}
function generateReportCard(student){
  console.log("===== Report Card for " + student.name  + " =====" + "\n" + "Roll No. : " + student.rollNo + "\n" +  "-----" + "\n" +"Marks" + "\n" + "-----" + "\n" + "Hindi: " + student.hindi + "\n" + "English: " + student.english + "\n" + "Maths: " + student.maths + "\n" + "Computer: " + student.computer + "\n" + "Science: " + student.science + "\n" + "-----" + "\n" + "Total: " + student.totalMarks + "\n" + "Average: " + student.avgMarks + "\n" + "Grade: " + generateGrades(student.avgMarks) + "\n----- ----- -----" + "\n")
}

function generateGrades(avgMarks){
  if(avgMarks >= 90){
    return "A"
  }else if(avgMarks >= 80 && avgMarks <= 90 ){
    return "B"
  }else if(avgMarks >= 70 && avgMarks <= 80){
    return "C"
  }else if(avgMarks >= 60 && avgMarks <= 69){
    return "D"
  }else if(avgMarks >= 50 && avgMarks <= 59){
    return "E"
  }else{
    return "F"
  }
}