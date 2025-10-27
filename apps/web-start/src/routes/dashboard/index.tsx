import { createFileRoute } from '@tanstack/react-router';
import { DashboardCourse } from '../../components/DashboardCourse';
import './dashboard.css';
import type { Course } from '../../components/DashboardCourse';

export const Route = createFileRoute('/dashboard/')({
  component: RouteComponent,
})

const courses: Array<Course> = [
  {id:'1', code:'CISC474', title:'Advanced Web Technologies', instructor:'Dr. Bart', grade:'90%'},
  {id:'2', code:'MATH349', title:'Linear Algebra', instructor:'Dr. Park', grade:'80%'},
];

function RouteComponent() {
  return (
  <div>
    <h1>Courses</h1>
    <div className='listContainer'>
      <DashboardCourse course={courses[0]!}></DashboardCourse>
      <DashboardCourse course={courses[1]!}></DashboardCourse>
    </div>
  </div>
  );
}
