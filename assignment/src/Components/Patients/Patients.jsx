import classes from "./Patients.module.css"
import PatientProfile from "./PatientProfile"
export default function Patients() {
    const patients = [
        { "name": "Emily Williams", "gender": "Female", "age": 18,"img":"./Assets/Layer 10.png","active":false },
        { "name": "Ryan Johnson", "gender": "Male", "age": 45,"img":"./Assets/Layer 4.png","active":false },
        { "name": "Brandon Mitchell", "gender": "Male", "age": 36,"img":"./Assets/Layer 3.png","active":false },
        { "name": "Jessica Taylor", "gender": "Female", "age": 28,"img":"./Assets/Layer 2.png","active":true },
        { "name": "Samantha Johnson", "gender": "Female", "age": 56,"img":"./Assets/Layer 8.png","active":false },
        { "name": "Olivia Brown", "gender": "Female", "age": 32,"img":"./Assets/Layer 6.png","active":false },
        { "name": "Tyler Davis", "gender": "Male", "age": 19,"img":"./Assets/Layer 7.png","active":false },
        { "name": "Kevin Anderson", "gender": "Male", "age": 30,"img":"./Assets/Layer 5.png","active":false },
        { "name": "Dylan Thompson", "gender": "Male", "age": 36,"img":"./Assets/Layer 9.png","active":false },
        { "name": "Nathan Evans", "gender": "Male", "age": 58,"img":"./Assets/Layer 1.png","active":false },
        { "name": "Mike Nolan", "gender": "Male", "age": 31,"img":"./Assets/Layer 3.png","active":false },
    ]
    return (
        <div className={classes.patientsLayout}>
            <div className={classes.patientsHeader}>
                <h2>Patients</h2>
                <img src="./Assets/search.svg" alt="search"></img>
            </div>
            <div>
                {
                    patients.map((patient, index) => {
                        return <PatientProfile img={patient.img} name={patient.name} age={patient.age} gender={patient.gender} key={index} active={patient.active}></PatientProfile>
                    })
                }
            </div>
        </div>
    )
}