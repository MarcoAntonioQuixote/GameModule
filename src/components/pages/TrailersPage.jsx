import YouTube from 'react-youtube'

function TrailersPage() {

    let videos = [
        {name: 'Mario', videoID: 'TnGl01FkMMo'},
        {name: 'Link', videoID: 'uHGShqcAHlQ'},
        {name: 'Pokemon', videoID: 'eNML51GuBew'},
        {name: 'Pakman', videoID: 'qAUwCe_8DXE'},
    ]

    const opts = {
      height: '390',
      width: '640',
      playerVars: { autoplay: 0} 
    }

    const showVideos = videos.map(video => <YouTube videoId={video.videoID} key={video.videoID} opts={opts} />)
    
  return (
    <div>
        {showVideos}
    </div>
  )
}

export default TrailersPage