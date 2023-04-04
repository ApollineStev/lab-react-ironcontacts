import logo from './logo.svg';
import './App.css';
import contactData from './contacts.json'
import { useState } from 'react'


function App() {

  const [contact , setContact ] = useState(contactData.slice(0, 3))
  
  function sortedRating() {
    
    const sorted = [...contact].sort((a, b) => b.popularity - a.popularity)
    setContact(sorted)
  }


  function sortedName() {
    
    const sorted = [...contact].sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    })
    setContact(sorted)
  }  
  
  function addRandom() {
    const random = [...contactData]
    const randomActor = contact.push(random[Math.floor(Math.random()*contactData.length)])
    setContact(contact.push(randomActor))
  } 

   const deleteContact = contactId => {
    const filteredContact = contact.filter(contact => {
      return contact.id !== contactId
    })
    setContact(filteredContact)
  }


  return (
    <div className="App">
    <h1>Contact List</h1>

    <button  className="btn-sort">Add random actor </button>
    
    <br></br>
    <button  className="btn-sort" onClick={sortedName}>Sort contact by name </button>
    <button  className="btn-sort" onClick={sortedRating}>Sort contact by popularity </button>

    
          <table>
          <tbody> 
            
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Won Oscar</th>
              <th>Won Emmy</th>
            </tr>

            
            {contact.map(contact => {
              return ( 
                  <tr key={contact.id}>
                    <td><img src={contact.pictureUrl} alt='pic.img' className='image' /></td>
                    <td>{contact.name}</td>
                    <td>{contact.popularity}</td>
                    <td>{contact.wonOscar ? <p>Won an Oscar</p> : <p></p>}</td>
                    <td>{contact.wonEmmy ? <p>Won an Emmy</p> : <p> </p>}</td>
                    <td><button onClick={() => deleteContact(contact.id)} className="btn-delete">Remove Actor</button></td>
                  </tr> 

                
              )
            })}

            </tbody>
          </table>
            
            
            
          </div>
        );
      


  ;
}

export default App;
