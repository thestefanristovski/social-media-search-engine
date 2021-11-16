import React from 'react';
import {Button, Pressable, Text, Image, ImageSourcePropType, View} from "react-native";
import styled from "styled-components/native";
import {Icon} from "@iconify/react"
import PostSource from "../../atoms/PostSource";
import PostLocation from "../../atoms/PostLocation";
import EngagementMetric from "../../atoms/EngagementMetric";


interface Props {
    metricTitle1:string;
    metricAmount1:string;
    metricTitle2:string;
    metricAmount2:string;
    metricTitle3:string;
    metricAmount3:string;
}

const StyledPressable = styled.Pressable`
  background-color: white;
  border-radius: 30px;
  padding: 0px;
  width: 500px;
  height: 300px;
  border: white 1px solid;
`

const StyledView = styled.View`
  display: inline-block;
  vertical-align: middle;
  line-height: 30px;
`

const StyledText = styled.Text`
  color: black;
  font-size: 15px;
  text-align: center;
  display: inline-block;
  vertical-align: middle;
  padding: 0px 5px;
`

const PostEngagement = (props: Props) => {
    const {metricTitle1, metricAmount1, metricTitle2, metricAmount2, metricTitle3, metricAmount3} = props

    return(
        <StyledView>
            <EngagementMetric metric={metricTitle1} amount={metricAmount1}/>
            <EngagementMetric metric={metricTitle2} amount={metricAmount2}/>
            <EngagementMetric metric={metricTitle3} amount={metricAmount3}/>
            <Icon icon="heroicons-solid:external-link" style={{color:"black", width:20, height:20, display:"inline-block", padding:"0 20", verticalAlign:"middle"}}/>
        </StyledView>
    )
}


PostEngagement.defaultProps = {
    metricTitle1: "thumbsup",
    metricTitle2: "thumbsdown",
    metricTitle3: "views",
    metricAmount1: 0,
    metricAmount2: 0,
    metricAmount3: 0,
}

export default PostEngagement;
