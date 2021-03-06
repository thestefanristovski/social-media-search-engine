import React from 'react';
import {Button, Pressable, Text, View, TextInput} from "react-native";
// @ts-ignore
import styled from "styled-components/native";
import {Icon} from "@iconify/react";
import KeywordPill from "../../atoms/KeywordPill";
import MainButton from "../../atoms/MainButton";
import IconButton from "../../atoms/IconButton";
import MultiPill from "../../atoms/MultiPill";
import CheckBox from "@react-native-community/checkbox";
import CheckBoxLabel from "../../atoms/CheckBoxLabel";

interface Props {
    title: string;
    onChanged: (element:string, another:string) => void;
    options: string[]
    selected: string[]
}

const CheckBoxMenuContainer = styled.View`
  display: inline-block;
  
`

const FilterTitle = styled.Text`
  color: white;
  font-size: 20px;
  padding: 10px 0;
  margin-bottom: 10px;
 
`

const MultiselectFilterMenu = (props: Props) => {
    const {title, onChanged, options, selected} = props;

    return(
        <View>
            <FilterTitle>{title}</FilterTitle>
            <CheckBoxMenuContainer>
                {options.map((element) => {
                    if (selected.includes(element)) {
                        return <CheckBoxLabel label={element} value={true} onPress={onChanged}/>
                    } else {
                        return <CheckBoxLabel label={element} value={false} onPress={onChanged}/>
                    }
                })}
            </CheckBoxMenuContainer>
        </View>
    )
}


MultiselectFilterMenu.defaultProps = {
    title: "Filter Menu",
    options: ["Option 1", "Option 2", "Option 3"],
    selected: ["Option 1", "Option 2", "Option 3"],
    onChanged: ()=> {},
}

export default MultiselectFilterMenu;
