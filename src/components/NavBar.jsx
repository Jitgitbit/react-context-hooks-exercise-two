import React, {useContext} from 'react'
import { BookContext } from '../contexts/BookContext'

export default function NavBar() {
  const {books} = useContext(BookContext);
  return (
    <div className='navbar'>
      <h1>Phoenix reading list</h1>
      <p>Currently you have {books.length} books to get through...</p>
    </div>
  )
}
