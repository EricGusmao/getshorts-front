import React, { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Spinner } from "@/components/Spinner";
import { fetchVideo } from "server/fetchVideo";
import { Form } from "@/components/Form";
import DownloadButton from "@/components/DownloadButton";
import VideoDescription from "@/components/VideoDescription";
import VideoPlayer from "@/components/VideoPlayer";

const LinkBox = () => {
  const [url, setUrl] = useState<string>("");
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [channelName, setChannelName] = useState<string | null>("");
  const [videoName, setVideoName] = useState<string | null>("");

  const [loading, setLoading] = useState(false);
  const [resolution, setResolution] = useState<string>("best");
  const [downloadMode, setDownloadMode] = useState<string>("video");
  const [platform, setPlatform] = useState<string>("Base");
  console.log(platform);

  const { toast } = useToast();

  const SendLink = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (url === "") {
      toast({
        title: "Error",
        description: "You need to fill in the field",
        variant: "destructive",
      });
      return;
    }

    if (url.includes("instagram.com")) {
      setPlatform("Instagram");
      toast({
        title: "Success",
        description: "Platform recognized: Instagram",
        variant: "default",
      });
    } else if (url.includes("tiktok.com")) {
      setPlatform("TikTok");
      toast({
        title: "Success",
        description: "Platform recognized: TikTok",
        variant: "default",
      });
    } else if (url.includes("x.com")) {
      setPlatform("Twitter");
      toast({
        title: "Success",
        description: "Platform recognized: Twitter",
        variant: "default",
      });
    } else if (url.includes("facebook.com")) {
      setPlatform("Facebook");
      toast({
        title: "Success",
        description: "Platform recognized: Facebook",
        variant: "default",
      });
    } else {
      toast({
        title: "Error",
        description: "Platform not recognized",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      const data = await fetchVideo(url, resolution, downloadMode); // fetch video from server

      if (data.videoUrl) {
        setVideoUrl(data.videoUrl);
        setChannelName(data.channelName);
        setVideoName(data.videoName);
        toast({ title: "Success", description: "Video fetched successfully" });
      } else {
        throw new Error("Invalid response from server");
      }
    } catch (error) {
      console.error("Error fetching video:", error);
      toast({
        title: "Error",
        description:
          "An error occurred. Please check the server and try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value);
  };

  useEffect(() => {
    if (videoUrl) {
      const downloadButton = document.querySelector(".buttonDownload");
      if (downloadButton) {
        downloadButton.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [videoUrl]);

  return (
    <>
      <Form
        SendLink={SendLink}
        handleChange={handleChange}
        setDownloadMode={setDownloadMode}
        setResolution={setResolution}
        setUrl={setUrl}
        url={url}
      ></Form>

      {loading && <Spinner size="large" className="mt-16" show={true} />}

      {!loading && videoUrl && (
        <div className="m-5 flex items-center justify-center">
          <div className="flex max-w-md flex-col rounded-lg bg-zinc-800 p-4 text-white">
            <VideoPlayer videoUrl={videoUrl} />
            <VideoDescription
              channelName={channelName || ""}
              videoName={videoName || ""}
            />
            <DownloadButton videoUrl={videoUrl} videoName={videoName || ""} />
          </div>
        </div>
      )}
    </>
  );
};

export default LinkBox;
