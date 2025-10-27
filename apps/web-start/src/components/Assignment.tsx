import './Assignment.css';
import React from 'react';
import { Link } from '@tanstack/react-router';

export type AssignmentComponentData = {
    id: string,
    title: string,
    course: string,
    submitted: boolean,
    dueDate: string,
    grade:string,
}

type AssignmentProps = {
    assignment: AssignmentComponentData;
}

export function Assignment({assignment}: AssignmentProps): React.JSX.Element {
    return (
        <Link to="/home">
            <div className="assignmentContainer">
                <div className="item title"><p className="title">{assignment.title}</p></div>
                <div className="item"><p>{assignment.course}</p></div>
                <div className="item"><p>Due {assignment.dueDate}</p></div>
                <div className="item grade">
                    <p>
                        {assignment.submitted ? assignment.grade : "Unsubmitted"}
                    </p>
                </div>
            </div>
        </Link>
    )
}