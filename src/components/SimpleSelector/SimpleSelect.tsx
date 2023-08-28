import React from "react";
import {Select} from 'antd';
import {IPropsSelect} from "../../interfaces/interfacesForProps";

function SimpleSelect (props: IPropsSelect) {

    function handleChange(value: string) {
        props.setParams((prevState) => ({
            ...prevState,
            [props.paramKey]: value
        }))
    }

    return (
        <Select
            showSearch
            placeholder={props.placeholder}
            onChange={handleChange}
            style={{width: 300}}
            options={props.categoriesArray}
        />
    )
}

export default SimpleSelect;
