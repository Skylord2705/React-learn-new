import Person from "./container/Person";
import Product from "./container/Product"

const App=()=>{
    return(
        <div>
            <Person name="Aryan" age="20"/>
            <Product name="Samsung" price="$300"/>
        </div>
    );
};

export default App;