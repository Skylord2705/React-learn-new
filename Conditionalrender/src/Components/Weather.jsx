const Weather=()=>{
    const temp=26;
    if(temp<15){
        return <h1>It's cold outside!</h1>
    }
    else if(temp>=15 && temp<=25){
        return <h1>It's nice outside</h1>
    }
    else{
        return <h1>It's Hot outside</h1>
    }
};

export default Weather;