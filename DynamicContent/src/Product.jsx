const ProductInfo=()=>{
    const product={
        name:"Aryan",
        price:1200,
        avaibility:"InStock",
        }
    return <div>
        <h1>Name :{product.name}</h1>
        <h2>Price:{product.price}</h2>
        <h3>Avaibility:{product.avaibility}</h3>

    </div>
};

export default ProductInfo;