import {Component, Input} from '@angular/core';
import {MatExpansionModule} from "@angular/material/expansion";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [
    MatExpansionModule,
    NgForOf,
    NgIf,
  ],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent {
  @Input() posts: {title: string, content: string}[] = [];
  // posts: any = [ {
  //   title: 'First Post',
  //   content: 'This is the first post\'s content.'
  // }, {
  //   title: 'Second Post',
  //   content: 'This is the second post\'s content.'
  // }, {
  //   title: 'Third Post',
  //   content: 'This is the third post\'s content.',
  //   loveIts: 0,
  // }];

}
