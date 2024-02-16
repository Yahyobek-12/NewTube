import '../styles/video.css'
import { useParams } from 'react-router-dom';
import { AiTwotoneLike } from "react-icons/ai";
import React, { useEffect, useState } from 'react';
import { FaRegEye, FaCommentDots, FaClock } from "react-icons/fa";

const Video = () => {
  const { videoId } = useParams();
  const [videoData, setVideoData] = useState(null);
  const API_KEY = 'AIzaSyBqE8OMbdKd-7NOT_LBvkgATb8huk3sPHI';

  useEffect(() => {
    const fetchVideoData = async () => {
      try {
        const response = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`);
        if (!response.ok) {
          throw new Error('Failed to fetch video data');
        }
        const data = await response.json();
        if (data.items.length === 0) {
          throw new Error('Video not found');
        }
        setVideoData(data.items[0]);
        console.log(data.items[0]);
      } catch (error) {
        console.error('Error fetching video data:', error);
      }
    };

    fetchVideoData();
  }, [videoId, API_KEY]);

  if (!videoData) return <div>Loading...</div>;

  return (
    <div className="video">
        <div className="video-card">
            <iframe title={videoData.snippet.title} src={`https://www.youtube.com/embed/${videoData.id}`} className='video-pl'></iframe>
            <div className="video-content">
                <h2>{videoData.snippet.title}</h2>
                <div className="video-body">
                    <div><AiTwotoneLike /> {videoData.statistics.likeCount}</div>
                    <div><FaRegEye /> {videoData.statistics.viewCount}</div>
                    <div><FaCommentDots /> {videoData.statistics.commentCount}</div>
                    <div><FaClock /> {videoData.snippet.publishedAt.slice(0, 10)}</div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Video;
