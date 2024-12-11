import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {PostCreateComponent} from "./posts/post-create/post-create.component";
import {HeaderComponent} from "./header/header.component";
import {PostListComponent} from "./post-list/post-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PostCreateComponent, HeaderComponent, PostListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  storedPosts:{title: string, content: string}[] = [];
  title = 'mean-course';

  onPostAdded(post: {title: string, content: string}) {
    this.storedPosts.push(post);
  }
}
