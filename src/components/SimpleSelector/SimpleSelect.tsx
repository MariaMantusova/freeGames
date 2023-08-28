import React from "react";
import {Select} from 'antd';
import {IPropsSelect} from "../../interfaces/interfacesForProps";

function SimpleSelect (props: IPropsSelect) {
    return (
        <Select
            defaultValue={props.defaultValue}
            style={{width: 300}}
            options={props.categoriesArray}
        />
    )
}

export default SimpleSelect;
