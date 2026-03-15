import classes from "./labResults.module.css"
export default function LabResults(){
    const labresults=["Xray","Blood Test","Urine Test","MRI Scan","Xray","Blood Test","Urine Test","MRI Scan"]
    return(
        <div className={classes.labResultsContainer}>
            <div className={classes.labResultsContent}>
                <p className={classes.labHeader}>Lab Results</p>
                {
                    labresults.map((result,index)=>{
                        return(
                            <div key={index} className={classes.resultRow}>
                                <p className={classes.resultText}>{result}</p>
                                <img src="./Assets/download.svg" alt="download" className={classes.resultIcon}></img>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}