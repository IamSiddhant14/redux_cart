import React , { useState , useEffect } from 'react' ;

const Products = () => {

    const [ products , setProducts ] = useState([]);

    useEffect( () =>{

        const fetchProducts = async ( ) =>{

            const res = await fetch('https://fakestoreapi.com/products');

            const data = await res.json();
            setProducts(data);

        }

        fetchProducts();

    } , [] );

    return (

        <div className="productsWrapper">

          {

            products.map( (product) =>(

                 <div classsName="card" key={product.id}>

                    <img src={product.image} alt={product.title} />
                    <h4>{product.title}</h4>
                    <h4>{product.price}</h4>
                    <button className='btn'>
                        Add To Cart
                    </button>

                 </div>

            ))

          }

        </div>

    );
}

export default Products;
