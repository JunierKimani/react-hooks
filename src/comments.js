import React from "react";

    function Commrnts ({item}) {
        return (
            <>
         <tbody key={item.id}>
            <tr >  
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>Edit</td>
            <td>Delete</td> 
            </tr>
            </tbody>
            </>
            );
            }

            export default Commrnts;