import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { NgForm } from '@angular/forms'
import { select, Store } from '@ngrx/store'
import { Observable } from 'rxjs'

import { AddComment, CommentModel, CommentModelKey, getComments } from '../store/comments'
import { AppState } from '../store'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  title = 'topomodo-ng'
  fieldNames = CommentModelKey
  comments$: Observable<CommentModel[]>

  constructor(
    private store$: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.comments$ = this.store$.pipe(select(getComments))
  }

  addComment(form: NgForm) {
    this.store$.dispatch(AddComment.of({ data: form.value }))
    form.resetForm()
  }
}
