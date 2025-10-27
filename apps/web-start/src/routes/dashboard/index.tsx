import { createFileRoute } from '@tanstack/react-router';
import { DashboardCourse } from '../../components/DashboardCourse';
import './dashboard.css';

export const Route = createFileRoute('/dashboard/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
  <div>
    <h1>Courses</h1>
    <div className='listContainer'>
      <DashboardCourse id='1' code='CISC474' title='Advanced Web Technologies' instructor='Dr. Bart' grade='90%'></DashboardCourse>
      <DashboardCourse id='2' code='MATH349' title='Linear Algebra' instructor='Dr. Park' grade='80%'></DashboardCourse>
    </div>
  </div>
  );
}
