import { Component, input, output } from '@angular/core'

@Component({
  selector: 'app-book',
  imports: [],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss'
})
export class BookComponent {
  readonly book = input.required<Book | undefined>()
  readonly borrowed = output<void>()

  borrow(): void {
    // TODO
  }
}

export interface Book {
  title: string
  author: string
  pageCount: number
}
