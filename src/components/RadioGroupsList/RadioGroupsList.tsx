import React from "react";
import "./RadioGroupList.css";
import RadioBlock from "../RadioBlock/RadioBlock";
import RadioGroup from "../RadioGroup/RadioGroup";
import {platformArray, sortTypeArray} from "../../data/dataForRadio";
import SelectForCategory from "../SelectForCategory/SelectForCategory";

function RadioGroupList() {
    return(
        <ul className="radio-group-list">
            <li className="radio-group-list__item">
                <RadioBlock title="Сортировать&#160;по:">
                    <RadioGroup categoriesArray={sortTypeArray}/>
                </RadioBlock>
            </li>
            <li className="radio-group-list__item">
                <RadioBlock title="Фильтровать&#160;по&#160;:">
                    <RadioGroup categoriesArray={platformArray}/>
                </RadioBlock>
            </li>
            <li className="radio-group-list__item">
                <RadioBlock title="Выбрать&#160;жанры:">
                    <SelectForCategory/>
                </RadioBlock>
            </li>
        </ul>
    )
}

export default RadioGroupList;
