import React from 'react';
import './css/style.css';
import './css/reset.css';
import iconSearch from '../../assets/images/icon-search.png'
import iconMap from '../../assets/images/icon-map.png'
import shareInfoMap from '../../assets/images/img-share-info-map.png';
import userProfile from '../../assets/images/icon-basic-profile.png';


export default function CommunityPage() {
  return (
    <div className="container">

      {/* <!-- Header 공용 컴포넌트 추가 필요 --> */}
      <header classNae="header">
        <h1>커뮤니티</h1>
        <img src={iconSearch} alt="검색" />
      </header>

      {/* <!-- main 시작 --> */}
      <main>
        <div className="community-category">
          <button>정보 공유</button>
          <button>산책 크루</button>
          <button>반려 돌보미</button>
          <button>실종 신고</button>
        </div>

        <div className="share-info-map">
        <img src={iconMap} alt="위치표시" />
          <p>서울시 중구</p>
          <img src={shareInfoMap} alt="정보공유 지도" />
        </div>

        <article className="share-info-post">
          <a href="#">
            <img src={userProfile} alt="user-profile" />
            <div>
              <h2>광화문 24시 동물병원 추천!</h2>
              <p>김펫피</p>
              <p>좋아요 0</p>
              <p>댓글 0</p>
            </div>
          </a>
        </article>
      </main>
      {/* <!-- main 끝 --> */}

      {/* <!-- NavBar 컴포넌트 추가 필요 --> */}
      <nav>

      </nav>
    </div>
  );
}