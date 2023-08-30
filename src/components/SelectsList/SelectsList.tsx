import React from "react";
import "./SelectsList.css";
import SelectBlock from "../SelectBlock/SelectBlock";
import SimpleSelect from "../SimpleSelector/SimpleSelect";
import {category, platformArray, sortTypeArray} from "../../data/dataForSelect";
import {IPropsSelectList} from "../../interfaces/interfacesForProps";

function SelectsList(props: IPropsSelectList) {
    return(
        <ul className="select-list">
            <li>
                <SelectBlock title="Сортировать&#160;по:">
                    <SimpleSelect categoriesArray={sortTypeArray} placeholder="Выберите сортировку"
                                  setParams={props.setParams} paramKey="sort-by"/>
                </SelectBlock>
            </li>
            <li>
                <SelectBlock title="Фильтровать&#160;по:">
                    <SimpleSelect categoriesArray={platformArray} placeholder="Выберите фильтр"
                                  setParams={props.setParams} paramKey="platform"/>
                </SelectBlock>
            </li>
            <li>
                <SelectBlock title="Выбрать&#160;жанр:">
                    <SimpleSelect categoriesArray={category} placeholder="Выберите жанр"
                                  setParams={props.setParams} paramKey="category"/>
                </SelectBlock>
            </li>
        </ul>
    )
}

export default SelectsList;
