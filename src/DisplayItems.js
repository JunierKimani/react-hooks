import React,{ useState} from "react";


    function DisplayItems () {

        const [cart,setCart] = useState(true);

        return (
           /* <div>
                <h1>
                    Your Cart
                </h1>
                <ul>
                    <li>mango</li>
                    <li>apple</li>
                    <li>banana</li>
                    

                </ul>
            
            </div>
            */
           <a href="https://www.jumia.co.ke/cart/" >
            { cart && <button  >  Cart </button>}
            </a>
        )
    }
    export default DisplayItems;