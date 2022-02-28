import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import useVideos from '../hooks/useVideos';

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos('MERN STACK')
  
  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
          <div className='ui container'>
            <SearchBar onFormSubmit={ search }/>
            <div className='ui grid'>
              <div className="ui row">
                <div className='eleven wide column'>
                  <VideoDetail video={selectedVideo} />
                </div>
              {/* There are 16 default available columns within a row */}
                <div className='five wide column'>
                <VideoList
                  videos={videos}
                  onVideoSelect={selectedVideo}
                />
                </div>
              </div>
            </div>
          </div>
        )
}

/* 
(video) => selectedVideo(video) is equivilant to setSelectedVideo
*/
export default App