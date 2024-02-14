import 'swiper/css';
import '../styles/shorts.css';
import { useContext} from 'react';
import { FaRegEye } from "react-icons/fa";
import Tooltip from '@mui/material/Tooltip';
import { AiTwotoneLike } from "react-icons/ai";
import 'react-toastify/dist/ReactToastify.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { GlobalContext } from '../provider/provider';

const Shorts = () => {
    const { shortVideos, loading } = useContext(GlobalContext);

    return (
        <div className='shorts'>
            <div className="shorts-card">
                {loading ? (
                    <div className='loading-card'>
                        <div className="loading"></div>
                    </div>
                ) : (
                    <Swiper
                    direction={'vertical'}
                    pagination={{
                        clickable: true,
                    }}
                    className="mySwiper"
                    > 
                    {shortVideos.map(video => (
                        <SwiperSlide key={video.id}>
                          <iframe title={video.snippet.title} src={`https://www.youtube.com/embed/${video.id}`} className='shorts-pl'></iframe>
                            <div className="reaction">
                                <Tooltip title='Likes' placement='top'><h3><AiTwotoneLike />: {video.statistics.likeCount}</h3></Tooltip>
                                <Tooltip title='Views' placement='top'><h3><FaRegEye />: {video.statistics.viewCount}</h3></Tooltip>
                            </div>
                            <p className='description'>{video.snippet.description.slice(0, 90)}</p>
                        </SwiperSlide>
                    ))}
                </Swiper>
                )}
            </div>
        </div>
    );
};

export default Shorts;
