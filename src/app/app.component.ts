import { ChangeDetectionStrategy, Component } from '@angular/core'
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'topomodo-ng'
  comments: Array<{}> = []

  addComment(commentToAdd: NgForm) {
    this.comments.push(commentToAdd.value.commentText)
    commentToAdd.resetForm()
    const a = { foo: 'bar' }
  }
}
