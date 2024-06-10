import { useImmer } from 'use-immer'

export default function Updater2 () {
    const [person, updatePerson] = useImmer ({
        name: 'Niki de Saint Phalle'
    });

     function handleNameChange (e) {
        updatePerson (draft => {
            draft.name = e.target.value
        })
            
    }
        
    


    return(
        <>
        <label>
        Name:
        <input
          value={person.name}
          onChange={handleNameChange}
        />
      </label>

      <p>
      {person.name}
      </p>
        
        </>
    )
}