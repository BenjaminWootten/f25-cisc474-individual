import { Link } from '@tanstack/react-router';
import './NavBar.css';

export function NavBar() {
    return(
        <div className="navbar">
            <Link to="/home" className="button">Home</Link>
            <Link to="/dashboard" className="button">Dashboard</Link>
            <Link to="/assignments" className="button">Assignments</Link>
            <Link to="/profile" className="button">Profile</Link>
        </div>
    )
}