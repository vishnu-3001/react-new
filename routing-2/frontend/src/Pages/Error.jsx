import PageContent from "../components/PageContent"
import { useRouteError } from "react-router-dom"
export default function Error(){
    const error =useRouteError();
    let title='An error occured';
    let message="Something went wrong"
    if(error.status===500){
        message=JSON.parse(error.data).message;
    }
    if(error.status===404){
        title="Not found!"
        message="Could not find the url"
    }
    return (
        <PageContent title={title}>
            <p>{message}</p>
        </PageContent>
    )
}