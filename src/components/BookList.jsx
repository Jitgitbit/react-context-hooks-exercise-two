import React, {useContext} from 'react'
import { BookContext } from '../contexts/BookContext'

export default function BookList() {
  const {books} = useContext(BookContext);
  return books.length ? (
    <div className='book-list'>
      
    </div>
  ) : (
    <div className='no-more-books'>No more books to read !</div>
  )
}
