import { createFileRoute, Link } from '@tanstack/react-router';
import './home.css';

export const Route = createFileRoute('/home/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
    <h1>Ben's LMS</h1>
    <h2>Name WIP</h2>
    <div className="container">
        <div className="box">
            <p>DashBoard</p>
            <Link to="/dashboard" className="button">Go</Link>
        </div>
        <div className="box">
            <p>Assignments</p>
            <Link to="/assignments" className="button">Go</Link>
        </div>
    </div>
  </div>
}
