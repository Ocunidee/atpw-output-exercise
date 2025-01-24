import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'app-book',
  imports: [],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss'
})
export class BookComponent {
  @Input() book: Book | undefined
  @Output() borrowed = new EventEmitter<void>()

  borrow(): void {
    // TODO
  }
}

export interface Book {
  title: string
  author: string
  pageCount: number
}
