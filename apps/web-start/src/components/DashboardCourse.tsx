import './DashboardCourse.css';

type Course = {
    id: string;
    code: string;
    title: string;
    instructor: string;
    grade: number;
}

export function DashboardCourse() {
    return (
        <div className="container">
            <div className="item"><p className="title">code: title</p></div>
            <div className="item"><p>instructor</p></div>
            <div className="item grade"><p>94%</p></div>
        </div>
    )
}