import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';

const URL = 'http://localhost/mywebservicelista/index.php';


function App() {
  const [persons, setPersons] = useState([]);


  useEffect(() => {
    axios.get(URL)
      .then((response) => {
        setPersons(response.data);
      }).catch(error => {
        alert(error);
      })
  }, [])

  return (
    <div style ={{padding: '30px'}}>
      <h3>Names</h3>
      <ol>
        {persons.map(person => (
          <li>{person.lastname}, {person.firstname}, {person.email}</li>
        ))}
      </ol>
    </div>
  );
}

export default App;
