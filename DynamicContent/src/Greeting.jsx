const Greeting=()=>{
    const Message="Hii This is Aryan";
    const currDate= new Date();
     
    return <div>
        <h1>Message:{Message}</h1>
        <p>Date:{currDate.getDate()}</p>
    </div>
}

export default Greeting;