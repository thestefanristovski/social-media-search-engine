import React from 'react';
import styled from "styled-components/native";
import Pill from '../../atoms/Pill';

interface Props {
    TypeTitle1:string;
    TypeTitle2:string;
    TypeTitle3:string;
    TypeTitle4:string;
    title: string;
}

const StyledView = styled.View`
  background-color: #191932;
  border-radius: 30px;
  padding: 2px;
  margin: 10px;
`

const StyledText = styled.Text`
  color: white;
  font-size: 20px;
  padding: 10px 0px;
`

const TypePills = (props: Props) => {
    const {TypeTitle1,  TypeTitle2, TypeTitle3, TypeTitle4, title} = props

    return(
      <><StyledText>
        {title}
      </StyledText><StyledText>
          <><StyledView><Pill title={TypeTitle1} onPress={function (): void { } }></Pill></StyledView>
            <StyledView><Pill title={TypeTitle2} onPress={function (): void { } }></Pill></StyledView></>
          <StyledView><Pill title={TypeTitle3} onPress={function (): void { } }></Pill></StyledView>
          <StyledView><Pill title={TypeTitle4} onPress={function (): void { } }></Pill></StyledView>
        </StyledText></>
    )
}

TypePills.defaultProps = {
    TypeTitle1: "All",
    TypeTitle2: "Images",
    TypeTitle3: "Videos",
    TypeTitle4: "Text",
    title: " Content Types:"
}

export default TypePills;