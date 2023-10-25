import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from '../Pages/HomePage/Home';
import LoginPage from '../Pages/LoginPage/Login';
import JoinPage from '../Pages/JoinPage/Join';
import ChatPage from '../Pages/ChatPage/Chat';
import CommunityPage from '../Pages/CommunityPage/Community';
import CommunityUpload from '../Pages/CommunityPage/CommunityUpload'
import CommunityDetail from '../Components/Community/CommunityDetail'
import MarketPage from '../Pages/MarketPage/Market';
import MarketDetail from '../Pages/MarketPage/MarketDetail';
import ProfilePage from '../Pages/ProfilePage/Profile';
import FollowPage from '../Pages/FollowPage/FollowList';
import ErrorPage from '../Pages/ErrorPage/Error404';
import SplashPage from '../Pages/Splashpage/Splash';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SplashPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/join" element={<JoinPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/community/upload" element={<CommunityUpload />} />
        <Route path="/community/detail" element={<CommunityDetail />} />
        <Route path="/market" element={<MarketPage />} />
        <Route path="/market/detail" element={<MarketDetail />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/follow" element={<FollowPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}
