import React from "react";
import { Radio } from 'antd';
import {IInfoArray} from "../../data/dataForRadio";

interface IPropsRadioGroup {
    categoriesArray: IInfoArray[]
}

function RadioGroup(props: IPropsRadioGroup) {
    return(
            <Radio.Group>
                {props.categoriesArray.map((category: IInfoArray, index: number) =>
                    <Radio value={category.value} key={index} style={{color: "#aaa"}}>{category.label || category.value}</Radio>
                )}
            </Radio.Group>
    )
}

export default RadioGroup;
