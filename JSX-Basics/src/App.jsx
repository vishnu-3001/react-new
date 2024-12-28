import {CORE_CONCEPTS} from '../data.js';
import Header from './components/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import { EXAMPLES } from '../data.js';
import TabButton from './components/TabButton.jsx';
import { useState } from 'react';

function App() {
  let [selectedTopic,setSelectedTopic]=useState();
  function handleClick(selectedButton){
    setSelectedTopic(selectedButton);
  }
  return (
    <div>
      <Header></Header>
      <main>
        <section id="core-concepts">
        <h2>Time to get started!</h2>
        <ul>
          <CoreConcept title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} image={CORE_CONCEPTS[0].image}></CoreConcept>
          <CoreConcept {...CORE_CONCEPTS[1]}></CoreConcept>
          <CoreConcept {...CORE_CONCEPTS[2]}></CoreConcept>
          <CoreConcept {...CORE_CONCEPTS[3]}></CoreConcept>
        </ul>
        </section>
       <section id="examples">
        <h2>Examples</h2>
        <menu>
          <TabButton onClick={()=>handleClick('components')}>Components</TabButton>
          <TabButton onClick={()=>handleClick('jsx')}>JSX</TabButton>
          <TabButton onClick={()=>handleClick('props')}>Props</TabButton>
          <TabButton onClick={()=>handleClick('state')}>State</TabButton>
        </menu>
        {!selectedTopic ? <p>Click on a tab to see an example!</p> :(<div id='tab-content'>
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </pre>
        </div>)}
       </section>
      </main>
    </div>
  );
}

export default App;
