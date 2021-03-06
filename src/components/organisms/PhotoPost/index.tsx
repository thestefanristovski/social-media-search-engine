import React from 'react';
// @ts-ignore
import styled from "styled-components/native";
import PostMetadata from "../../molecules/PostMetadata";
import PostEngagement from "../../molecules/PostEngagement";
import FBCollage from "react-native-fb-collage";


interface Props {
    metricTitles:string[];
    metricAmounts:string[];
    text: string;
    poster: string;
    socialMedia: string;
    postTime: string;
    postLocation: string;
    images: string[];
    postLink: string;
}

const PostContainer = styled.View`
  background-color: #191932;
  border-radius: 30px;
  padding: 20px;
  margin: 10px;
  //width: fit-content;
`

const PostTitle = styled.Text`
  color: white;
  font-size: 18px;
  padding: 0px 0px;
  //max-width: 400px;
`

const PhotoPost = (props: Props) => {
    const {metricTitles, metricAmounts, text, poster, socialMedia, postTime, postLocation, images, postLink} = props

    const handleClick = () => {
        window.open(postLink)
    }

    return(
        <PostContainer>
            <PostTitle>{text}</PostTitle>
            <FBCollage
            images={images}
            />
            <PostMetadata poster={poster} socialMedia={socialMedia} postTime={postTime} postLocation={postLocation}/>
            <PostEngagement metricTitles={metricTitles} metricAmounts={metricAmounts} onPress={handleClick}/>
        </PostContainer>
    )
}


PhotoPost.defaultProps = {
    metricTitle1: "likes",
    metricTitle2: "retweets",
    metricTitle3: "comments",
    metricAmount1: 0,
    metricAmount2: 0,
    metricAmount3: 0,
    text: "Tweet not found",
    poster: "Unknown",
    socialMedia: "twitter",
    postTime: "Just Now",
    postLocation: "Unknown",
    images: ['https://images.unsplash.com/photo-1637090404371-e04d03de9be5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80', 'https://images.unsplash.com/photo-1593642633279-1796119d5482?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=688&q=80', 'https://images.unsplash.com/photo-1637090404371-e04d03de9be5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80', 'https://images.unsplash.com/photo-1593642633279-1796119d5482?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=688&q=80']
}

export default PhotoPost;
