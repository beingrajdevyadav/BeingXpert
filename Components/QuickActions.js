const QuickActions = () => {
  return (
   `  <div id="quickActions">

        <!-- Quick Actions Navbar -->
        <ul class="q-a-nav-links">
            <li name="AddBookSection" class="q-a-nav-link active"><i class="fa-solid fa-plus"></i> Book</li>
            <li name="AddCourseSection" class="q-a-nav-link"><i class="fa-solid fa-plus"></i> Course</li>
            <li name="AddStudentSection" class="q-a-nav-link"><i class="fa-solid fa-plus"></i> Student</li>
        </ul>


        <!--book form section-->
        <section class="qa-form-container active-form" id="AddBookSection">
            <form id="book-form" onsubmit="AddBookFormSubmit(e);" class="quick-actions-form">
                <div class="add-form-title">
                    <h2>New Book Form</h2>
                    <hr>
                </div>
                <div class="form-controls-wrapper">
                    <!--book title-->
                    <div class="form-controls">
                        <label for="formBookTitle"><i class="fa-solid fa-pen-nib"></i> Book Title</label>
                        <input type="text" name="formBookTitle" id="formBookTitle" placeholder="Enter Book Title ">
                    </div>

                    <!--book author-->
                    <div class="form-controls">
                        <label for="formBookAuthor"><i class="fa-solid fa-at"></i> Book Author</label>
                        <input type="text" name="formBookAuthor" id="formBookAuthor" placeholder="Enter Author Name">
                    </div>
                    <!--isbn-->
                    <div class="form-controls">
                        <label for="formBookIsbn"><i class="fa-solid fa-barcode"></i> Book ISBN </label>
                        <input type="text" name="formBookIsbn" id="formBookIsbn" placeholder="Enter Book ISBN">
                    </div>
                    <!--publisher-->
                    <div class="form-controls">
                        <label for="formBookPublisher"> <i class="fa-solid fa-print"></i> Book Publisher</label>
                        <input type="text" name="formBookPublisher" id="formBookPublisher"
                            placeholder="Enter Publisher Name">
                    </div>
                    <!--publication-->
                    <div class="form-controls">
                        <label for="formBookPublicationDate"><i class="fa-solid fa-calendar-days"></i> Book
                            Publication
                            Date</label>
                        <input type="date" name="formBookPublicationDate" id="formBookPublicationDate">
                    </div>
                    <!--generation-->
                    <div class="form-controls">
                        <label for="formBookGeneration"><i class="fa-solid fa-calendar-check"></i> Book
                            Generation</label>
                        <input type="text" name="formBookGeneration" id="formBookGeneration"
                            placeholder="Enter Book Generation">
                    </div>
                    <!--page number-->
                    <div class="form-controls">
                        <label for="formBookPages"><i class="fa-solid fa-file-lines"></i> Book Pages </label>
                        <input type="number" name="formBookPages" id="formBookPages" placeholder="Enter Book Pages">
                    </div>
                    <!--language-->
                    <div class="form-controls">
                        <label for="formBookLanguage"><i class="fa-solid fa-language"></i> Book Language</label>
                        <input type="text" name="formBookLanguage" id="formBookLanguage"
                            placeholder="Enter Book Language" />
                    </div>

                    <!--description area-->
                    <div class="form-controls">
                        <label for="formBookDescription"><i class="fa-solid fa-hashtag"></i> Book Description</label>
                        <textarea id="formBookDescription" name="formBookDescription"
                            placeholder="Enter Book Description"></textarea>
                    </div>
                </div>
                <!--submit button-->
                <div class="book-form-btns">
                    <button type="reset"><i class="fa-solid fa-rotate-right"></i> Reset</button>

                    <button type="submit" id="form-add-book-btn"><i class="fa-solid fa-plus"></i> Add Book</button>
                </div>

            </form>

        </section>

        <!--course form section-->
        <section class="qa-form-container crs-frm" id="AddCourseSection">


            <form id="course-form" onsubmit="AddCourseFormSubmit(e);" class="quick-actions-form">

                <div class="add-form-title">
                    <h2>Add Course Form</h2>
                    <hr>
                </div>

                <div class="form-controls-wrapper">
                    <!--course name-->
                    <div class="form-controls">
                        <label for="formCourseName"><i class="fa-solid fa-chalkboard-user"></i> Course Name</label>
                        <input type="text" name="formCourseName" id="formCourseName" placeholder="Enter Course Name">
                    </div>
                    <!--course code-->
                    <div class="form-controls">
                        <label for="formCourseCode"><i class="fa-solid fa-microchip"></i> Course Code</label>
                        <input type="text" name="formCourseCode" id="formCourseCode" placeholder="Enter Course Code">
                    </div>
                    <!--instructor-->
                    <div class="form-controls">
                        <label for="formInstructorName"><i class="fa-solid fa-person-chalkboard"></i> Instructor
                            Name</label>
                        <input type="text" id="formInstructorName" placeholder="Enter Instructor Name"
                            name="formInstructorName">
                    </div>


                    <!--duration-->
                    <div class="form-controls">
                        <label for="formCourseDuration"><i class="fa-regular fa-clock"></i> Course Duration</label>
                        <input type="number" id="formCourseDuration" name="formCourseDuration"
                            placeholder="Enter Course Duration">
                    </div>
                    <!--start date-->
                    <div class="form-controls">
                        <label for="formStartDate"><i class="fa-regular fa-calendar-plus"></i>Start Date </label>
                        <input type="date" id="formStartDate" name="formStartDate">
                    </div>
                    <!--end-date-->
                    <div class="form-controls">
                        <label for="formEndDate"><i class="fa-regular fa-calendar-check"></i> End Date</label>
                        <input type="date" id="formEndDate" name="formEndDate">
                    </div>
                    <!--credits-->
                    <div class="form-controls">
                        <label for="formCredits"><i class="fa-solid fa-clock-rotate-left"></i> Course Credits</label>
                        <input type="number" id="formCredits" name="formCredits" placeholder="Enter Course Credits">
                    </div>
                    <!--credits-->
                    <div class="form-controls">
                        <label for="formReferralCode"><i class="fa-solid fa-gift"></i> Referral Code</label>
                        <input type="text" id="formReferralCode" name="formReferralCode"
                            placeholder="Enter Course Referral Code">
                    </div>
                    <!--description-->
                    <div class="form-controls">
                        <label for="formCourseDescription"><i class="fa-regular fa-comment-dots"></i> Course
                            Description</label>
                        <input type="text area" id="formCourseDescription" name="formCourseDescription"
                            placeholder="Enter Course Description">
                    </div>
                </div>

                <!--submit button-->
                <div class="book-form-btns">
                    <button type="reset"><i class="fa-solid fa-rotate-right"></i> Reset</button>

                    <button type="submit" id="form-add-course-btn"><i class="fa-solid fa-plus"></i> Add Course</button>
                </div>
            </form>
        </section>

        <!--student form section-->

        <section class="qa-form-container std-frm" id="AddStudentSection">

            <form id="add-student-form" onsubmit="AddStudentFormSubmit(e);" class="quick-actions-form">
                <div class="add-form-title">
                    <h2>Add Student Form</h2>
                    <hr>
                </div>

                <div class="form-controls-wrapper">
                    <!--first name-->
                    <div class="form-controls">
                        <label for="formFirstName"><i class="fa-solid fa-user"></i> First Name</label>
                        <input type="text" name="formFirstName" id="formFirstName" placeholder="Enter First Name">
                    </div>

                    <!--last name-->
                    <div class="form-controls">
                        <label for="add-last-name"><i class="fa-solid fa-user"></i> Last Name</label>

                        <input type="text" name="formLastName" id="add-last-name" placeholder="Enter Last Name">
                    </div>

                    <!--student id-->
                    <div class="form-controls">
                        <label for="add-student-id"><i class="fa-solid fa-at"></i> Student Id</label>
                        <input type="text" name="formStudentId" id="add-student-id" placeholder="Enter Student Id">
                    </div>

                    <!--date of birth-->
                    <div class="form-controls">
                        <label for="add-birth-date"><i class="fa-solid fa-calendar-days"></i> Date Of Birth</label>
                        <input type="date" name="formBirthDate" id="add-birth-date">
                    </div>
                    <!--e-mail-->
                    <div class="form-controls">
                        <label for="add-email"><i class="fa-solid fa-envelope"></i> E-Mail </label>
                        <input type="email" name="formEmail" id="add-email" placeholder="Enter E-Mail">
                    </div>
                    <!--phone number-->
                    <div class="form-controls">
                        <label for="add-phone-number"><i class="fa-solid fa-phone"></i> Phone Number</label>
                        <input type="tel" name="formPhoneNumber" id="add-phone-number" placeholder="Enter Phone Number">
                    </div>



                    <!--enrollment path-->
                    <div class="form-controls">
                        <label for="formEnrollmentDate"><i class="fa-solid fa-calendar-plus"></i> Enrollment
                            Date</label>
                        <input type="date" name="formEnrollmentDate" id="formEnrollmentDate">
                    </div>

                    <!--major-->
                    <div class="form-controls">
                        <label for="add-major"><i class="fa-regular fa-heart"></i> Major</label>
                        <input type="text" name="formMajor" id="add-major" placeholder="Enter Major">

                    </div>

                    <!--address-->
                    <div class="form-controls">
                        <label for="form-address"><i class="fa-solid fa-location-dot"></i> Address</label>
                        <textarea name="formAddress" id="form-address" placeholder="Enter Address"></textarea>
                    </div>
                </div>

                <!--submit button-->
                <div class="book-form-btns">
                    <button type="reset"><i class="fa-solid fa-rotate-right"></i> Reset</button>
                    <button type="submit" id="form-add-student-btn"><i class="fa-solid fa-plus"></i> Add
                        Student</button>

                </div>
            </form>

        </section>

        
    <!-- Quick Actions Functionality  -->
     <script src="./JS/QuickActionsFunctionality.js"></script>
    </div>`
  )
};
export default QuickActions;

