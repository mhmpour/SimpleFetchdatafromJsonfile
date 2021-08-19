import React from 'react'
import List from './list.json'
import logo from "../logo.svg";
function Pr() {
     return (
           <div>
                <ul >
                  {List.map((item) => (
                   <li>
                       {item.name}
                   </li>
                  ))}
                </ul>
              </div>

      );

    }
export default Pr;