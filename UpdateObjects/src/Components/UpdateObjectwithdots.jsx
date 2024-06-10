import { useState } from "react";
export default function Updater () {
    const [person, setPerson] = useState({
        firstName: 'Barbara'
        
      });

      function handleFirstNameChange(e) {
        setPerson({
          ...person,
          firstName : e.target.value
        });
      }
    
    
    return (
        <>
        <label>
        First name:
        <input
          value={person.firstName}
          onChange={handleFirstNameChange}
        />
      </label>

      <p>
        {person.firstName}{' '}
      </p>
        </>
    )
}