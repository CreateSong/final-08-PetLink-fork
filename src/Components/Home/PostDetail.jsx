import React, { useEffect, useState } from 'react'
import *as S from './PostList.style'

import moreIcon from '../../assets/image/icon- more-vertical.png'
import profileIcon from '../../assets/image/icon-basic-profile.png'
import { PostContents } from './PostList'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import SearchHeader, { DetailHeader } from '../Common/Header/Header'
import { Container } from '../../Styles/reset.style'
import HeaderLayouts from '../Common/Header/Header'



export default function PostDetail(props) {
  const navigate = useNavigate()
  const handleBack = ()=>{
navigate(-1)
  }
    return (
      <Container>
          <HeaderLayouts back search/>
          <PostContents />
          <CommentList/>
          <WriteComment/>
      </Container>
    )
  }


export const CommentList = () => {
    return (
      <S.CommentBox>
        <S.UserInfo>
     <div>
            <a href='#'><img src={profileIcon} alt='사용자 프로필 이미지' /></a>
              <p>서귀포시 무슨 농장 <span>· 5분 전</span></p>
              
     </div>
        <button ><img src={moreIcon} alt='신고하기 모달창 불러오기'/></button>
        </S.UserInfo>
        <S.CommentTxt>게시글 답글 ~~ !! 최고최고</S.CommentTxt>
      </S.CommentBox>
    );
  };

function WriteComment(){
  const [comment, setComment] = useState('')


  const reqUrl = "https://api.mandarin.weniv.co.kr/user/myinfo";
  const postData = {
    "Authorization" : "Bearer {token}"
  }

useEffect(()=>{
  const userInfo = () =>{
    return (
      axios.get('reqUrl',postData).then((결과)=>{
        console.log(결과.postData)
      })
      .catch(()=>{
        console.log('22')
      })
    )
      }
}, [])

  // const SendComment = async()=>{
  //   const baseUrl = "https://api.mandarin.weniv.co.kr"
  //   const reqPath ="/post/:post_id/comments"
  //   const reqUrl = baseUrl+reqPath
  //   const PostData ={
  //     "comment":{
  //         "content":String
  //     }
  // }
  // fetch( reqUrl, {
  //   method:"POST",
  //   headers:{
  //       "Authorization" : "Bearer {token}",
  //       "Content-type" : "application/json"
  //   },
  //   body:JSON.stringify(PostData)
  // })
  // }




  const inputComment= (e)=>{
    setComment(e.target.value)
  }
  const submitComment= (e)=>{
e.preventDefault()
// SendComment()
  }
    return(
      <S.InputForm onSubmit={submitComment}>
             <div >
                <img src={profileIcon} alt="사용자 프로필"/>
                 <input type="text" id="commemt-input" placeholder="댓글 입력하기..." onChange={inputComment}/>
             </div>
              <button type="submit" disabled={comment.length === 0}>게시</button>
      </S.InputForm>
    )
  }
  


