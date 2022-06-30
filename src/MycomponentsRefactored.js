import React,{Component} from "react";

export default class  MyComponent extends Component {
    constructor(){
        super();
        this.state = {
            isLoggedIn:true,
            chechout:false,
            IsEmpty:false,
            color:"red",
    };
    }

    render() {
        let {isLoggedIn,chechout,IsEmpty,color} = this.state;
        
        const authUser =() => {
            if(isLoggedIn){
                return <button>Logout</button>
            }else{
                return <button>Login</button>
            }
    }

    const displayFavColor =() => {
        let fav;
       switch(color){ 
              case "red":
              fav = <h1>Red</h1>
              break;
              case "blue":
              fav = <h1>Blue</h1>
              break;
        default:
              fav = <h1>Invalid Color</h1>
              break;
         }
         return fav;
     }
     return (
            <div>

                  {authUser()}
                {displayFavColor()}
             
               {chechout ? "Checkout" : "Not Checkout"}
              {IsEmpty ? "Empty" : "Not Empty"}
            </div>
        );
        } 
    } 
   