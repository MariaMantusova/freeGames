import React from "react";
import { Select } from 'antd';
import {categoryOrTag} from "../../data/dataForSelect";

const onChange = (value: string) => {
    console.log(`selected ${value}`);
};

const onSearch = (value: string) => {
    console.log('search:', value);
};

function SelectForCategory() {
    return (
        <Select
        showSearch
        mode="multiple"
        placeholder="Выберите жанры"
        optionFilterProp="russianName"
        onChange={onChange}
        onSearch={onSearch}
        filterOption={(input, option) =>
            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
        }
        options={categoryOrTag}
        style={{maxWidth: "500px", minWidth: "300px"}}
        />
    )
}

export default SelectForCategory;
