
import { students } from '../sample_data.js'


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

// functions to download pdf
// download btn selection and then adding event listener on click
document.getElementById("downloadPDF").addEventListener("click", function () {

    // selection of table 
    const table = document.getElementById("studentsDetailsTable");

    // converting html into canvas -->> scale value define pdf high quality 
    html2canvas(table, { scale: 4 }).then(function (canvas) {

        const imgData = canvas.toDataURL("image/png");
        const pdf = new jspdf.jsPDF("landscape", "px", [canvas.width, canvas.height]);

        pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
        // to save pdf
        pdf.save("StudentsDetailsTable.pdf");
    });
});
