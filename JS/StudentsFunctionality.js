import { students } from '../sample_data.js'
        // console.log(students);

        // function to print students table
        function PrintStudentsTable(students) {
            const tableBody = document.querySelector("#StudentsTableBody");

            let tbody = '';

            students.forEach((student, i) => {
                tbody += `
                       <tr>
                       <td>${i + 1}</td> 
                       <td>${student.studentId}</td> 
                       <td>${student.firstName} ${student.lastName}</td> 
                       <td>${student.major}</td> 
                       <td>${student.gpa}</td> 
                       <td>${student.idCardStatus}</td> 
                       <td>${student.libraryStatus}</td> 
                       <td>${student.enrollmentDate}</td> 
                    </tr>
`;
            });

            tableBody.innerHTML = tbody;
        };

        PrintStudentsTable(students);
        console.log(students);