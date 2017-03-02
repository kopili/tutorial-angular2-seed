import {Component} from 'angular2/core'
import {AuthorService} from './author.service'

@Component({
		selector: 'authors',
		template: `
			<h2>Authors</h2>
			{{ title }}
			<ul>
				<li *ngFor="#author of authors">
				{{ author }}
				</li>
			</ul>
			`,
		providers: [AuthorService]
})

// <!-- as of version 2.0.0-beta.17 of angular2 lib, the syntax is *ngFor='let author of authors' ->

export class AuthorsComponent {
	title: string = "The title of authors page";
	authors : string[];

	constructor( authorService : AuthorService ) {
		this.authors = authorService.getAuthors();
	}
}