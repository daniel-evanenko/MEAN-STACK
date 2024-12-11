import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-post-create',
  standalone: true,
  imports: [
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,

  ],
  templateUrl: './post-create.component.html',
  styleUrl: './post-create.component.css'
})
export class PostCreateComponent {
  enteredTitle: string = "";
  enteredContent: string = "";

  @Output() postCreated: EventEmitter<{title: string, content: string}> = new EventEmitter();


  onAddPost() {
    const post = {title: this.enteredTitle, content: this.enteredContent}; 
    this.postCreated.emit(post)

  }
}
