import React from 'react'
import *as S from './Header.style'
import backIcon from '../../../assets/image/icon-arrow-left.png'
import searchIcon from '../../../assets/image/icon-search.png'
import logoTxt from '../../../assets/image/logo-color_txt.png'
import { useNavigate } from 'react-router'


export default function HeaderLayouts(props){
   const navigate = useNavigate()
   const handleBack = ()=>{
  navigate(-1)
    }
    return(
        <S.HeaderLayout>
         {props.logo && (
            <img src={logoTxt} alt="반결고리 로고" width={75} height={21} />
          )}
          {props.back && (
            <S.HeaderButton onClick={handleBack}>
              <img src={backIcon} alt="뒤로가기" />
            </S.HeaderButton>
          )}
          {props.search && (
            <S.HeaderButton>
              <img src={searchIcon} alt="검색하기" />
            </S.HeaderButton>
          )}
            {props.searchInput && (
            <>
            <S.HeaderButton onClick={handleBack}><img src={backIcon} alt="'뒤로가기'" /></S.HeaderButton>
            <S.SearchInput type="text" placeholder='계정 검색' />
            </>
          )}

        </S.HeaderLayout>
      );
    }


  // export function DetailHeader(props){
  //   return(
  //       <S.HeaderLayout>
  //           <S.HeaderButton onClick={props.goBack}><img src={backIcon} alt='뒤로가기' />
  //           </S.HeaderButton>
  //           <S.HeaderButton ><img src={searchIcon} aria-label='검색하기' />
  //           </S.HeaderButton>
  //       </S.HeaderLayout>
  //   )
  // }

  // export function LogoHeader(){
  //   return(
   
  //       <S.HeaderLayout>
  //          <img src={logoTxt} alt='반결고리 로고' width={75} height={21} />
  //           <S.HeaderButton ><img src={searchIcon} aria-label='검색하기' />
  //           </S.HeaderButton>
  //       </S.HeaderLayout>
  
  //   )
  // }


