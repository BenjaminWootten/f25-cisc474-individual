# Requirements

- Course and assignment structure
- Submission and feedback for programming problems
- Student, instructor, admin roles

## Epic 1: Roles and Authentication

- Google authentication
- Roles and permissions: student, instructor, admin
- Profile: display name, avatar, bio

## Epic 2: Courses and enrollment

- Course landing page
- Multiple sections of a course
- Self enroll via code or instructor invite
- Course content pages
- Announcements

## Epic 3: Assignments

- Assignment types: multiple choice, short answer, coding, graph
- Time windows: open/close, due/overdue
- Grades

## Epic 4: Submissions

- Submit assignments to be graded
- Resubmissions and attempt limits

## Epic 5: Unique submission type:

- Graph question: for math courses, student can plot points on a graph which can also form curves to answer visual math questions
- Plottable points that snap to grid
- Connect the points via curve
- Check answer based on coordinates or curve

## Epic 6: Admin and settings

- User management
- Course archival/deletion

## Non-functional Requirements

- Role-based access
- Performance: page loads feel responsive
- System can support reasonable concurrent users
- Data reliability in submissions
- UI is easy to navigate
- Somewhat scalable

## User Stories

1. As a user, I can sign in with Google to see my personalized lms.
2. As an instructor, I can grant TA permissions in my course.
3. As an instructor, I can create a course with multiple sections and unique due dates/assignments.
4. As a student, I can self enroll into a course with a code.
5. As an instructor, I can add an assignment with a due date, open date, and close date.
6. As an instructor, I can grade an assignment.
7. As a student, I can view my grades for assignments in a course.
8. As a student, I can view my course dashboard and grades.
9. As an instructor, I can view my course dashboard.
10. As a student, I can submit an assignment to be graded.
11. As a student, I can resubmit however many times the assignment specifies.
13. As a grader, I can open a submission and input a grade with/without a comment.
14. As an instructor, I can post an announcement for students.
15. As an admin, I can manage course logistics for instructors.
