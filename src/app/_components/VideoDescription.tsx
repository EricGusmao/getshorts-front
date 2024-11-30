interface VideoDescriptionProps {
  channelName: string;
  videoName: string;
}

const VideoDescription: React.FC<VideoDescriptionProps> = ({ channelName, videoName }) => (
  <div className="mb-4 w-72 self-center text-justify">
    <p><strong>Channel:</strong> {channelName}</p>
    <br />
    <p><strong>Description:</strong> {videoName}</p>
  </div>
);

export default VideoDescription;