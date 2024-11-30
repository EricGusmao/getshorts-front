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
  <div className="self-center">
    <Button asChild>
      <a href={videoUrl} download={videoName ?? "video"}>
        <Download /> Download
      </a>
    </Button>
  </div>
);

export default DownloadButton;
