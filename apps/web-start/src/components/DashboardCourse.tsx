import './DashboardCourse.css';
import React from 'react';
import { Link } from '@tanstack/react-router';

type Course = {
    id: string;
    code: string;
    title: string;
    instructor: string;
    grade: string;
}

export function DashboardCourse({id, code, title, instructor, grade}: Course): React.JSX.Element {
    return (
        <Link to="/home">
            <div className="courseContainer">
                <div className="item title"><p className="title">{code}: {title}</p></div>
                <div className="item"><p>{instructor}</p></div>
                <div className="item grade"><p>{grade}</p></div>
            </div>
        </Link>
    )
}