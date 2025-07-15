import { Component, input, output } from '@angular/core'

@Component({
  selector: 'app-book',
  imports: [],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss'
})
export class BookComponent {
  book = input.required<Book | undefined>()
  borrowed = output<void>()

  borrow(): void {
    this.borrowed.emit()
  }
}

export interface Book {
  title: string
  author: string
  pageCount: number
}
