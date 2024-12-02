import { MediaResponse } from "app/actions";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export default function VideoBox({ data }: { data: MediaResponse }) {
  return (
    <Card className="max-w-md">
      <CardContent>
        <video src={data.videoUrl} className="aspect-square" controls />

        <div className="self-center text-justify">
          <p>
            <strong>Channel:</strong> {data.channelName}
          </p>
          <br />
          <p>
            <strong>Description:</strong> {data.videoName}
          </p>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <a href={data.videoUrl} download={data.videoName}>
            <Download /> Download
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
