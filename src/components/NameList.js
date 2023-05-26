//list rendering

import React from 'react'
import Person from './Person'


function NameList(){
    // const names =[ 'guna' , 'guhan' ,'vignesh']
    // const nameList = names.map(name => <h1>{name}</h1>)
    const persons = [
        {
            name : 'vignesh',
            age :27,
            id :0
        },
        {
            name :' guhan',
            age : 23,
            id :1
        }
    ]
    const personList = persons.map(person => <Person key={person.id} person={person}></Person>)
    return(
        <div>
            {
                personList
            }
        </div>
    )
}

export default NameList