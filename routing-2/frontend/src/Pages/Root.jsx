import { Outlet,useNavigation } from "react-router-dom";
import MainNavigation from "../components/MainNavigation"

export default function Root(){
    // const navigation=useNavigation();
    // navigation.state=''
    return(
        <div>
            <MainNavigation></MainNavigation>
            <main>
                {/* {navigation.state==='loading'&&<p>Loading...</p>} */}
                <Outlet></Outlet>
            </main>
        </div>
    )
}