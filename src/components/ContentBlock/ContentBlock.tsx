import React from "react";
import RadioGroup from "../RadioGroup/RadioGroup";
import {categoryOrTag, sortTypeArray, platformArray} from "../../data/dataForRadio";
import SelectForCategory from "../SelectForCategory/SelectForCategory";
import RadioBlock from "../RadioBlock/RadioBlock";
import RadioGroupList from "../RadioGroupsList/RadioGroupsList";

function ContentBlock() {
    return(
        <>
            <RadioGroupList/>
        </>
    )
}

export default ContentBlock;
