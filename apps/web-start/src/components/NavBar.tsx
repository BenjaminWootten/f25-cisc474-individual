import { Link } from '@tanstack/react-router';

export function NavBar() {
    return(
        <div className="navbar">
            <p>navbar</p>
            <Link to="/">Home</Link>
            <Link to="/dashboard">dashboard</Link>
        </div>
    )
}