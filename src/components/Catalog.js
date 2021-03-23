import React from 'react'


const Catalog = ({products, cartItemsHandler}) => {
    return (
        <div id="catalog" className="w-10/12 md:w-9/12 mx-auto py-3 flex items-center justify-between flex-col font-display ">
            <h2 className="text-2xl lg:text-6xl text-blue-900 mb-4 mt-2 lg:mb-16 lg:mt-8">TIMELESS ESSENCE</h2>
            <div className="flex flex-col md:flex-row flew-wrap items-center justify-center w-full p-4 mx-4">
            {products.map(item => (
                <React.Fragment key={item.id}>
                <div className="flex items-center flex-col border mb-4 shadow w-12/12 sm:w-8/12 md:w-96 md:mx-2 bg-gray-100">
                <img className="w-8/12 sm:w-5/12 md:w-11/12 lg:w-7/12 p-4" src={item.img} alt="watch icon"/>
                <h3 className="lg:text-xl text-blue-900 text-center p-2">{item.name}</h3>
                <h4 className="lg:text-xl text-yellow-400">SEK {item.price.toFixed(2)}</h4>
                <button
                onClick={() => cartItemsHandler(item)} 
                className="mt-2 mb-3 py-2 px-10 bg-blue-900 text-gray-200 hover:bg-blue-700">Add to cart</button>
                </div>
                </React.Fragment>
                ))}
            
                </div>
                </div>
                     
    )
}

export default Catalog
