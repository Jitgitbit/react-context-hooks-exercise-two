import React, {createContext, useState} from 'react';
import uuid from 'uuid/v1';

export const BookContext = createContext();

export default function BookContextProvider(props) {
  const[books,setBooks] = useState([
    {title:'One flu', author:'Mack', id:1},
    {title:'Black Pigeon speaks', author:'Jack', id:2},
    {title:'Widow', author:'Muriel', id:3}
  ])
  const addBook = (title, artist) => {
    // setBooks([...books, {title:title, artist:artist}])
    setBooks([...books, {title, artist, id: uuid() }])
  }
  const removeBook = (id) => {
    setBooks(books.filter(book => book.id !== id))
  }
  return (
    <BookContext.Provider value={{books, addBook, removeBook}}>
      {props.children}
    </BookContext.Provider>
  )
}
