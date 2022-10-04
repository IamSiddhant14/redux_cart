import React from 'react'
import  Products  from '../components/Products';

const Home = () => {

    return (

        <div>
         
            <section >
                <h1><b  style={{fontSize:'30px'}}>Products</b></h1>
                <>
                <Products className='sec' />
                </>
                
            </section>

            <h4>This website is build using React toolkit By our founder <a style={{textDecoration:'none' }} href="https://www.linkedin.com/in/siddhant-sharma-86b853190/">Siddhant Sharma</a> </h4>

        </div>
    )
}

export default Home ;
