import { EXAMPLES } from '../../data.js';
import TabButton from './TabButton.jsx';
import { useState } from 'react';
import Section from './Section.jsx';
import Tabs from './Tabs.jsx';
export default function Examples(){
    let [selectedTopic,setSelectedTopic]=useState();
  function handleClick(selectedButton){
    setSelectedTopic(selectedButton);
  }
    return(
        <Section title="Examples" id="examples">
            <Tabs buttons={
                <>
                          <TabButton onClick={()=>handleClick('components')} isSelected={selectedTopic==='components'}>Components</TabButton>
          <TabButton isSelected={selectedTopic==='jsx'} onClick={()=>handleClick('jsx')}>JSX</TabButton>
          <TabButton isSelected={selectedTopic==='props'}onClick={()=>handleClick('props')}>Props</TabButton>
          <TabButton isSelected={selectedTopic==='state'} onClick={()=>handleClick('state')}>State</TabButton>
                </>
            }>{!selectedTopic ? <p>Click on a tab to see an example!</p> :(<div id='tab-content'>
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </pre>
        </div>)}</Tabs>
       </Section>
    )
}