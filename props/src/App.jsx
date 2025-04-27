import Person from "./container/Person";
import Product from "./container/Product";
import Child from "./container/Child";

const App=()=>{
    return(
        <div>
            <Person name="Aryan" age="20"/>
            <Product name="Samsung" price="$300"/>
            <Child>
                <h1>This is a child prop</h1>
                {/* <p>Good morning</p> */}
            </Child>
        </div>
    );
};

export default App;