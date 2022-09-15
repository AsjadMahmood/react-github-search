import { useState } from 'react'
import './App.css'
import { TopLanguageRepo } from './pages/TopLanguageRepo';

function App() {
  const [count, setCount] = useState(0);

  //make components 
  //install axios and make api call
  //create a model and map values in it
  //use a UI libraray for input, card, and typograpghy
  //show data in diffrent components
  //complete the design keeping in mind the wire frame
  //make a test case using Jest (to input a language ...)

  return (
    <div className="App">
      <TopLanguageRepo></TopLanguageRepo>
    </div>
  )
}

export default App


//https://api.github.com/search/repositories?q=language:java&sort=stars&order=desc&per_page=3