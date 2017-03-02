import {Component} from 'angular2/core'
import {CourseService} from './course.service'
import {AutoGrowDirective} from './auto-grow.directive'

@Component({
		selector: 'courses',
		template: `
			<h2>Courses</h2>
			{{ title }}
			<input type="text" autoGrow />
			<ul>
				<li *ngFor="#course of courses">
				{{ course }}
				</li>
			</ul>
			`,
		providers: [CourseService],
		directives: [AutoGrowDirective]
})

// <!-- as of version 2.0.0-beta.17 of angular2 lib, the syntax is *ngFor='let course of courses' ->

export class CoursesComponent {
	title: string = "The title of courses page";
	courses;

	constructor( courseService : CourseService ) {
		this.courses = courseService.getCourses();
	}
}