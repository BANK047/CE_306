let students = [{name : "Nous", grade : "A"},
                {name : "IX", grade : "C"}, 
                {name : "Nanook", grade : "B"},
];

function showStudentCount(){
    console.log(`Total Students: ${students.length}`);
}

students.forEach(function(students, index) {
    console.log(`Student ${index + 1}: ${students.name} - Grade: ${students.grade}`);
    showStudentCount();
});