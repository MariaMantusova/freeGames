import React from "react";
import "./SelectsList.css";
import SelectBlock from "../SelectBlock/SelectBlock";
import SimpleSelect from "../SimpleSelector/SimpleSelect";
import {platformArray, sortTypeArray} from "../../data/dataForSelect";
import SelectForCategory from "../SelectForCategory/SelectForCategory";

function SelectsList() {
    return(
        <ul className="select-list">
            <li>
                <SelectBlock title="Сортировать&#160;по:">
                    <SimpleSelect categoriesArray={sortTypeArray} defaultValue="relevance"/>
                </SelectBlock>
            </li>
            <li>
                <SelectBlock title="Фильтровать&#160;по:">
                    <SimpleSelect categoriesArray={platformArray} defaultValue="all"/>
                </SelectBlock>
            </li>
            <li>
                <SelectBlock title="Выбрать&#160;жанры:">
                    <SelectForCategory/>
                </SelectBlock>
            </li>
        </ul>
    )
}

export default SelectsList;
