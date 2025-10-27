import { createFileRoute } from '@tanstack/react-router';
import './assignments.css';
import { Assignment } from '../../components/Assignment';
import type { AssignmentComponentData } from '../../components/Assignment';

export const Route = createFileRoute('/assignments/')({
  component: RouteComponent,
})

const assignments: Array<AssignmentComponentData> = [
  {id:'1', title:'hw1', course:'CISC474', submitted:false, dueDate:'10/27/25', grade:'n/a'},
  {id:'2', title:'Exam 1', course:'MATH349', submitted:true, dueDate:'10/23/25', grade:'95%'},
];

function RouteComponent() {
  return (
  <div>
    <h1>Assignments</h1>
    <div className='listContainer'>
      <Assignment assignment={assignments[0]!}></Assignment>
      <Assignment assignment={assignments[1]!}></Assignment>
    </div>
  </div>
  );
}
