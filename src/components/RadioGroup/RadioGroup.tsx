import React from "react";
import {Radio} from 'antd';
import {IPropsRadioGroup} from "../../interfaces/interfacesForProps";
import {TInfoArray} from "../../types/typesMain";

function RadioGroup(props: IPropsRadioGroup) {
    return(
            <Radio.Group>
                {props.categoriesArray.map((category: TInfoArray, index: number) =>
                    <Radio value={category.value} key={index} style={{color: "#aaa"}}>{category.label || category.value}</Radio>
                )}
            </Radio.Group>
    )
}

export default RadioGroup;
