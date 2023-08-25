import React from "react";
import "./RadioBlock.css";

interface IPropsRadioBlock {
    children: JSX.Element
    title: string
}

function RadioBlock(props: IPropsRadioBlock) {
   return (
       <div className="radio__block">
           <h2 className="radio__title">{props.title}</h2>
           {props.children}
       </div>

   )
}

export default RadioBlock;
