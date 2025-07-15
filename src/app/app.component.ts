import { Component, signal } from '@angular/core'
import { Book, BookComponent } from './book/book.component'

@Component({
  selector: 'app-root',
  imports: [BookComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  books = signal([
    {
      title: 'The Way of Kings',
      author: 'Brandon Sanderson',
      pageCount: 1001
    },
    {
      title: 'Blood of Elves',
      author: 'Andrzej Sapkowski',
      pageCount: 320
    },
    {
      title: 'The Name of the Wind',
      author: 'Patrick Rothfuss',
      pageCount: 662
    }
  ])

  markForBorrowing(book: Book): void {
    console.log(`Borrowing ${book.title}`)
  }
}
