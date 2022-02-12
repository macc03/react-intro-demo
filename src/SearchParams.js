import { useEffect, useState } from "react"
import useBreedList from "./useBreedList";
import Reuslt from "./Result";

const SearchParams = () => {
  const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];
  const [animal, setAnimal] = useState('')
  const [location, setLocation] = useState('Guangdong')
  const [breed, setBreed] = useState('')
  const [breeds] = useBreedList(animal)
  const [pets, setPets] = useState([])

  useEffect(() => {
    requestPets()
  }, [])

  async function requestPets() {
    const result = await fetch(`http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`)
    const json = await result.json()
    setPets(json.pets)
  }

  return (
    <div className="search-params">
      <form
      onSubmit={e => {
        e.preventDefault()
        requestPets()
      }}
      >
        <label htmlFor="location" >
          Location
          <input
            id="location"
            placeholder="location"
            value={location}
            onChange={e => setLocation(e.target.value)}
          />
        </label>

        <label htmlFor="animal" >
          Animal
          <select
            id="animal"
            placeholder=""
            value={animal}
            onChange={e => setAnimal(e.target.value)}
            onBlur={e => setAnimal(e.target.value)}
          >
            <option />
            {ANIMALS.map(animal => (
              <option
                value={animal}
                key={animal}
              >
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed" >
          Breed
          <select
            value={breed}
            onChange={e => setBreed(e.target.value)}
            onBlur={e => setBreed(e.target.value)}
          >
            <option />
            {
              breeds.map(breed => (
                <option
                  value={breed}
                  key={breed}>
                  {breed}
                </option>
              ))
            }
          </select>
        </label>
        <button>Submit</button>
      </form>
      {
        <Reuslt pets={pets} />
      }
    </div>
  )
}



export default SearchParams