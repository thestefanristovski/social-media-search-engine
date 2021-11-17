import React from 'react';
import {Button, Pressable, Text} from "react-native";
import styled from "styled-components/native";


interface Props {
    title: string;
    onPress: () => void;
}

const StyledText  = styled.Text`
    color: white;
    font-size: 17px;
    text-align: center;
    vertical-align: middle;
`;

//TODO: Hover behavior of button (see react-native-web-hover)

const StyledPressable = styled.Pressable`
  background-color: background;
  border-radius: 100px;
  line-height: 17px;
  padding: 10px 30px;
  vertical-align: middle;
  &:focus {
    border-color: red;
    transition: border-color 0.3s ease-in-out;
`

const Pill = (props: Props) => {
    const {title, onPress} = props;
    return(
        <StyledPressable onPress={onPress}>
            <StyledText>
                {title}
            </StyledText>
        </StyledPressable>
    )
}

export default Pill;