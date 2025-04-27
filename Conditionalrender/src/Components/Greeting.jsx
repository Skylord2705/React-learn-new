const Greeting = (props) => {
    console.log(props.timeofDay);
   return props.timeofDay=='morning' ? (<h1>Good Morning</h1>) : (<h1>Good Afternoon</h1>)
   
}

export default Greeting;