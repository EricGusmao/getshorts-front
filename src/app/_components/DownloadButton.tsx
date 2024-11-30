import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
interface DownloadButtonProps {
  videoUrl: string;
  videoName: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({
  videoUrl,
  videoName,
}) => (
  <div className="buttonDownload self-center">
    <Button
      variant="default"
      onClick={(e) => {
        e.preventDefault();
        const link = document.createElement("a");
        link.href = videoUrl;
        link.download = videoName || "video.mp4";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }}
    >
      <Download /> Download
    </Button>
  </div>
);

export default DownloadButton;
