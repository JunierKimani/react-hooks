
import React from "react";
import DisplayItems from "./DisplayItems";
import "./App.css";
import Profileid from "./ProfileId";
import Login from "./Login";
//import MyComponent from "./MycomponentsRefactored";


export default function App() {
 
  const [isLoggedIn, setIsLoggedIn] = React.useState(true);
 const [Checkout, setCheckout] = React.useState(true);

  /*const MyComponent = () => {
    if(isLoggedIn){
      return <button>Logout</button>
    }else{
      return <button>Login</button>
    }
  }
  */
 
  return (

    <section>
    <div>
      <div class="cond">
     <h1>PROFILE</h1>
      </div> 
    {Checkout && <DisplayItems/>}
    <br/>
     {isLoggedIn  ? <Profileid/> : <Login/>}  
    </div>
    
    </section>
  );
}





 