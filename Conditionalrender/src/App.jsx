import Weather from "./Components/Weather";
import UserStatus from "./Components/UserStatus";
import Greeting from "./Components/Greeting";


const App=()=>{
    return(
        <div>
            <Weather/>
            <UserStatus loggedIn={true} isAdmin={true}/>
            <Greeting timeofDay="morning"/>
        </div>

    );
};

export default App;