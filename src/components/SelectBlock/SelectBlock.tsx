import React from "react";
import "./SelectBlock.css";
import {IPropsSelectBlock} from "../../interfaces/interfacesForProps";

function SelectBlock(props: IPropsSelectBlock) {
   return (
       <div className="radio__block">
           <h2 className="radio__title">{props.title}</h2>
           {props.children}
       </div>

   )
}

export default SelectBlock;
