import { Link } from '@tanstack/react-router';
import './NavBar.css';

type Link = {to: string, label: string}

const links = [
  {to: '/home', label: 'Home', exact: true},
  {to: '/dashboard', label: 'Dashboard', exact: true},
  {to: '/assignments', label: 'Assignments', exact: true},
  {to: '/profile', label: 'Profile', exact: true},
]

export function NavBar() {
    return(
        <div id="navbar">
            {links.map((link: {to: string, label: string, exact: boolean}) => (
                <Link
                to={link.to}
                className="tab"
                // Code from chatgpt
                activeProps={{ 'aria-current': 'page' }}
                activeOptions={{ exact: link.exact, includeHash: false, includeSearch: false }}
                // end
                >{link.label}</Link>
            ))}
        </div>
    )
}