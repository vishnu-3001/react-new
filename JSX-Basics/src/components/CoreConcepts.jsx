import CoreConcept from './CoreConcept';
import {CORE_CONCEPTS} from '../../data';
export default function CoreConcepts(){
    return(
        <section id="core-concepts">
                <h2>Time to get started!</h2>
                <ul>
                  {CORE_CONCEPTS.map((conceptItem)=><CoreConcept key={conceptItem.title} {...conceptItem} />)}
                  {/* <CoreConcept title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} image={CORE_CONCEPTS[0].image}></CoreConcept>
                  <CoreConcept {...CORE_CONCEPTS[1]}></CoreConcept>
                  <CoreConcept {...CORE_CONCEPTS[2]}></CoreConcept>
                  <CoreConcept {...CORE_CONCEPTS[3]}></CoreConcept> */}
                </ul>
                </section>
    )
}