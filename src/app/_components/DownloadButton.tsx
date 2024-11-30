import { Button } from '@/components/ui/button';
import { IoMdDownload } from 'react-icons/io';

interface DownloadButtonProps {
  videoUrl: string;
  videoName: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ videoUrl, videoName }) => (
  <div className="buttonDownload self-center">
    <Button variant="default" onClick={(e) => {
      e.preventDefault();
      const link = document.createElement('a');
      link.href = videoUrl;
      link.download = videoName || 'video.mp4';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }}>
      <IoMdDownload /> Download
    </Button>
  </div>
);

export default DownloadButton;