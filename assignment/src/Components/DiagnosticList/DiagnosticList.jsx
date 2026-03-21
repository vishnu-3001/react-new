import classes from "./DiagnosticLst.module.css"
export default function DiagnosticList(){
    const list=
    [
        {"name":"Name","description":"Description","status":"Status"},
        {"name":"Hyper Tension","status":"under observation","description":"chronic blood pressure"}
        ,{"name":"Diabetes","status":"under observation","description":"chronic blood sugar"}
        ,{"name":"Asthma","status":"under observation","description":"chronic respiratory condition"},
        {"name":"Hyper Tension","status":"under observation","description":"chronic blood pressure"}
        ,{"name":"Diabetes","status":"under observation","description":"chronic blood sugar"}
        ,{"name":"Asthma","status":"under observation","description":"chronic respiratory condition"}
    ]
    return(
        <div className={classes.diagnosticListContainer}>
            <div className={classes.diagnosticListContent}>
                <div>
                    <p className={classes.header}>Diagnostic List</p>
                </div>
                {list.map((item,index)=>{
                    return(
                        <div key={index} className={index===0?classes.itemRowHeader:classes.itemRow}>
                            <div className={classes.itemRowContent}>
                                <p>{item.name}</p>
                            </div>
                            <div className={classes.itemRowContent}>
                                <p>{item.status}</p>
                            </div>
                            <div className={classes.itemRowContent}>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}