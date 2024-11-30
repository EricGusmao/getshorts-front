interface VideoPlayerProps {
  videoUrl: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl }) => (
  <div className="mb-4">
    <video src={videoUrl} className="h-96 w-96" controls />
  </div>
);

export default VideoPlayer;