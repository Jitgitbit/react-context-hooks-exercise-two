import React, {createContext, useReducer} from 'react';
import { bookReducer } from '../reducers/bookReducer';

export const BookContext = createContext();

export default function BookContextProvider(props) {
  // const HC = [
  //   {title:'One flu', author:'Mack', id:1},
  //   {title:'Black Pigeon speaks', author:'Jack', id:2},
  //   {title:'Widow', author:'Muriel', id:3}
  // ]
  const[books, dispatch] = useReducer(bookReducer, [])   // initial state is empty now !
  // const addBook = (title, artist) => {
  //   // setBooks([...books, {title:title, artist:artist}])
  //   setBooks([...books, {title, artist, id: uuid() }])             // This is done in the reducer now !
  // }
  // const removeBook = (id) => {
  //   setBooks(books.filter(book => book.id !== id))
  // }
  return (
    <BookContext.Provider value={{books, dispatch}}>
      {props.children}
    </BookContext.Provider>
  )
}
