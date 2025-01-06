// -----------------------------------
//   quick actions navlinks selection
// -----------------------------------

const QuickActionsNavLinks = document.querySelectorAll(".q-a-nav-link");
const QuickActionsForms = document.querySelectorAll(".qa-form-container");
// console.log(QuickActionsNavLinks);
QuickActionsNavLinks.forEach(link => {
    link.addEventListener("click", () => {
        QuickActionsNavLinks.forEach(link => {
            link.classList.remove("active");
        });
        link.classList.add("active");

        // to hide others form
        QuickActionsForms.forEach(form => {
            form.style.display = "none";
        });
        // to show current form
        document.getElementById(`${link.getAttribute("name")}`).style.display = "block";
    });

});
// ------------------------------------------------

const AddBookForm = document.getElementById("book-form");
const AddCourseForm = document.getElementById("course-form");
const AddStudentForm = document.getElementById("add-student-form");

// Add Book Form Submit Event
 function AddBookFormSubmit(e) {
    // to avoid form default page reload feature
    e.preventDefault();
    // console.log("Book Form Submitted");

    // to validate form data and then process to localStorage
    if (this.formBookTitle.value && this.formBookAuthor.value && this.formBookIsbn.value && this.formBookPublisher.value && this.formBookPublicationDate.value && this.formBookGeneration.value && this.formBookPages.value && this.formBookLanguage.value && this.formBookDescription.value) {
        // console.log("Form Data is Valid");

        // to collect form data
        const currentBook = {
            bookTitle: this.formBookTitle.value,
            bookAuthor: this.formBookAuthor.value,
            bookISBN: this.formBookIsbn.value,
            bookPublisher: this.formBookPublisher.value,
            bookPublicationDate: this.formBookPublicationDate.value,
            bookGeneration: this.formBookGeneration.value,
            bookPages: this.formBookPages.value,
            bookLanguage: this.formBookLanguage.value,
            bookDescription: this.formBookDescription.value,
        };

        // console.log(currentBook);

        // to get stored books or if no book is stored then create a empty array

        const bookList = JSON.parse(localStorage.getItem("bookList")) || [];

        // to add currentBook in bookList
        bookList.push(currentBook);

        // to update localStorage data
        localStorage.setItem("bookList", JSON.stringify(bookList));

        // console.log("Congratulations!!, Book Added Successfully.");
        alert("Congratulations!!, Book Added Successfully.");
    } else {
        // when any input field is empty
        // console.log("Sorry!!, All input fields are required.")
        alert("Please, fill all input fields!");
    }

};


// Add Course Form Submit Event
function  AddCourseFormSubmit(e) {
    e.preventDefault();
    // console.log("Course Form Submitted");

    // to validate form data and then process to localStorage

    if (this.formCourseName.value && this.formCourseCode.value && this.formInstructorName.value && this.formCourseDuration.value && this.formStartDate.value && this.formEndDate.value && this.formCredits.value && this.formReferralCode.value && this.formCourseDescription.value) {
        console.log("Form data is valid");

        // to collect form data in the form of object
        const currentCourse = {
            courseName: this.formCourseName.value,
            courseCode: this.formCourseCode.value,
            instructorName: this.formInstructorName.value,
            courseDuration: this.formCourseDuration.value,
            startDate: this.formStartDate.value,
            endDate: this.formEndDate.value,
            courseCredits: this.formCredits.value,
            referralCode: this.formReferralCode.value,
            courseDescription: this.formCourseDescription.value,
        };

        // console.log(currentCourse);
        // to get stored courses list or if no book exists then create a empty array

        const courseList = JSON.parse(localStorage.getItem("courseList")) || [];

        // to add currentCourse in courseList
        courseList.push(currentCourse);

        // to update localStorage data
        localStorage.setItem("courseList", JSON.stringify(courseList));

        // console.log("Congratulations!!, Book Added Success.")
        alert("Congratulations!!, Book Added Success.");
    } else {
        // when any input field is empty
        // console.log("Sorry!, All input fields are required.");
        alert("Sorry!, All input fields are required.");
    }
};

// Add Student Form Submit Event
function AddStudentFormSubmit(e) {
    e.preventDefault();
    // console.log("Student Form Submitted");

    // to validate form data and then process to localStorage
    if (this.formFirstName.value && this.formLastName.value && this.formStudentId.value && this.formBirthDate.value && this.formEmail.value && this.formPhoneNumber.value && this.formEnrollmentDate.value && this.formMajor.value && this.formAddress.value) {
        console.log("Form data is valid");
        // to collect form data in the form of object

        const currentStudent = {
            firstName: this.formFirstName.value,
            lastName: this.formLastName.value,
            studentId: this.formStudentId.value,
            birthDate: this.formBirthDate.value,
            eMail: this.formEmail.value,
            phoneNumber: this.formPhoneNumber.value,
            enrollmentDate: this.formEnrollmentDate.value,
            formMajor: this.formMajor.value,
            address: this.formAddress.value,
        }

        console.log(currentStudent);

        // to get stored stundents list or create an empty array

        const studentList = JSON.parse(localStorage.getItem("studentList")) || [];

        // to add currentStudent in studentList
        studentList.push(currentStudent);

        // to update localstorage studentlist data
        localStorage.setItem('studentList', JSON.stringify(studentList));

        console.log("Congratulations!, Student added successfully!");
    } else {
        // console.log("Sorry!, All input fields are required.");
        alert("Sorry!, All input fields are required.")
    };
};


AddBookForm.addEventListener("submit", AddBookFormSubmit);
AddCourseForm.addEventListener("submit", AddCourseFormSubmit);
AddStudentForm.addEventListener("submit", AddStudentFormSubmit);