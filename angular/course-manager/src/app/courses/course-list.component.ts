import { Component, OnInit } from "@angular/core";
import { Course } from './course'

@Component({
    selector: 'app-course-List',
    templateUrl:'./course-list.component.html'
})
export class CourseListComponent implements OnInit {
    courses: Course[] = []; 

    ngOnInit(): void {
        this.courses = [
            {
                id: 1,
                name: 'Angular',
                imageUrl: '',
                price: 99.99,
                code: 'cps-8888',
                duration: 120,
                rating: 5.4,
                releaseDate: 'December'
            },
            {
                id: 2,
                name: 'html',
                imageUrl: '',
                price: 99.99,
                code: 'cps-9888',
                duration: 120,
                rating: 4.0,
                releaseDate: 'January'
            }
        ]
    }
}