const students = [ 
    {name : "Bibi", score : 45},
    {name : "Hop", score : 50},
    {name : "Ink", score : 51},
    {name : "Mary", score : 60},
    {name : "Sim", score : 75},
    {name : "Lil", score : 94}
];

function filterPassedStudents(studentsList){
    studentsList.forEach(function(student) {
        if(student.score >= 50){
            console.log(`Student: ${student.name} passed with score: ${student.score}`);
        } else{
            console.log(`Student: ${student.name} failed with score: ${student.score}`);
        }
    });
}    
filterPassedStudents(students);