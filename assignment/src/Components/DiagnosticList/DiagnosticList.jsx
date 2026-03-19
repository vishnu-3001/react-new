import classes from "./DiagnosticLst.module.css"
export default function DiagnosticList(){
    const list=
    [
        {"name":"Name","description":"Description","status":"Status"},
        {"name":"Hyper Tension","status":"under observation","description":"chronic blood pressure"}
        ,{"name":"Diabetes","status":"under observation","description":"chronic blood sugar"}
        ,{"name":"Asthma","status":"under observation","description":"chronic respiratory condition"}
    ]
    return(
        <div className={classes.diagnosticListContainer}>
            <div className={classes.diagnosticListContent}>
                {list.map((item,index)=>{
                    return(
                        <div key={index} className={classes.itemRow}>
                            <p>{item.name}</p>
                            <p>{item.status}</p>
                            <p>{item.description}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}