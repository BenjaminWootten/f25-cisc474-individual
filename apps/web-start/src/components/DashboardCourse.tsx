import './DashboardCourse.css';
import React from 'react';
import { Link } from '@tanstack/react-router';

export type CourseComponentData = {
    id: string;
    code: string;
    title: string;
    instructor: string;
    grade: string;
}

type DashboardCourseProps = {
    course: CourseComponentData;
}

export function DashboardCourse({course}: DashboardCourseProps): React.JSX.Element {
    return (
        <Link to="/home">
            <div className="courseContainer">
                <div className="item title"><p className="title">{course.code}: {course.title}</p></div>
                <div className="item"><p>{course.instructor}</p></div>
                <div className="item grade"><p>{course.grade}</p></div>
            </div>
        </Link>
    )
}