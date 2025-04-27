const Productlist=()=>{
    const products=[
        {
            id:1,name:"Phone",price:"$699"
        },
        {
            id:2,name:"Laptop",price:"$1200"
        },
        {
            id:3,name:"Headphone",price:"$199"
        },
    ]
    return (
        <main>
            {products.map(user=>(
               <div key={user.id}>
                <h1>{user.name}</h1>
                <h1>{user.id}</h1>
                <h1>{user.price}</h1>
               </div>
            ))}
        </main>
    )
}
export default Productlist;