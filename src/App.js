import React, { useEffect } from 'react';
import './App.css';

function App() {

  const [books, setBooks] = useState([{}]);
  useEffect(() => {
    fetch("/api/books")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setBooks(data);
      })
  }, [])

  if (!books.length)
    return <h2>Loading..!</h2>

  return (
    <div className="App">
      <h2>Available Books</h2>
      <table>
        <thead>
          <tr>
          <th>Title</th>
          <th>Author</th>
          </tr>
        </thead>
        <tbody>
          {books.map((bookObj, ind) => {
            return (<tr key={ind}>
              <td> {bookObj.title} </td>
              <td> {bookObj.author}</td>
            </tr>)
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
