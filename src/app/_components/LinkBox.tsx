import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Spinner } from '@/components/Spinner';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { IoMdDownload } from "react-icons/io";

const LinkBox = () => {
  const [url, setUrl] = useState<string>('');
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [channelName, setChannelName] = useState<string | null>('');
  const [videoName, setVideoName] = useState<string | null>('');

  const [loading, setLoading] = useState(false);
  const [resolution, setResolution] = useState<string>('144');
  const [downloadMode, setDownloadMode] = useState<string>('video');
  const [platform, setPlatform] = useState<string>('Base');

  const SERVER_URL = "https://tikvideofetch.slocksert.dev/video";

  const { toast } = useToast();

  const SendLink = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (url === '') {
      toast({ title: "Error", description: "You need to fill in the field", variant: "destructive" });
      return;
    }

    if (url.includes("instagram.com")) {
      setPlatform("Instagram");
      toast({ title: "Success", description: "Platform recognized: Instagram", variant: "default" });
    } else if (url.includes("tiktok.com")) {
      setPlatform("TikTok");
      toast({ title: "Success", description: "Platform recognized: TikTok", variant: "default"});
    } else if (url.includes("x.com")) {
      setPlatform("Twitter");
      toast({ title: "Success", description: "Platform recognized: Twitter", variant: "default"});
    } else if (url.includes("facebook.com")) {
      setPlatform("Facebook");
      toast({ title: "Success", description: "Platform recognized: Facebook", variant: "default"});
    } else {
      toast({ title: "Error", description: "Platform not recognized", variant: "destructive" });
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(SERVER_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          url,
          resolution,
          downloadMode
        })
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const data = await response.json();
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
      toast({ title: "Error", description: "An error occurred. Please check the server and try again.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value);
  };

  return (
    <>
      <div className="">
        <form onSubmit={SendLink} className="flex flex-row flex-wrap gap-4  justify-center">
        
        <Input type='text' className='text-white w-96' value={url} onChange={handleChange}></Input>
        
        <Select onValueChange={setResolution} defaultValue='best'>
          <SelectTrigger className="w-28 text-white">
            <SelectValue placeholder="Quality" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="144">144p</SelectItem>
            <SelectItem value="240">240p</SelectItem>
            <SelectItem value="360">360p</SelectItem>
            <SelectItem value='480'>480p</SelectItem>
            <SelectItem value='720'>720p</SelectItem>
            <SelectItem value='1080'>1080p</SelectItem>
            <SelectItem value='1440'>1440p</SelectItem>
            <SelectItem value='2160'>2160p</SelectItem>
            <SelectItem value='best'>BEST</SelectItem>
          </SelectContent>
        </Select>

        <Select onValueChange={setDownloadMode} defaultValue='video'>
          <SelectTrigger className="w-28 text-white">
            <SelectValue placeholder="Mode" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="video">Video</SelectItem>
            <SelectItem value="audio">Audio</SelectItem>
          </SelectContent>
        </Select>

        <Button type='submit' variant="outline">SEND</Button>
        </form>
        {loading && (
          <Spinner size="large" className="mt-16" show={true}/>
        )}
      </div>

      {!loading && videoUrl && (
        <div className="m-5 flex justify-center items-center">
          <div className="text-white bg-zinc-800 p-4 rounded-lg max-w-md flex flex-col">
            <div className="mb-4">
              <video src={videoUrl} className="h-96 w-96" controls />
            </div>
            <div className="mb-4 w-72 self-center text-justify">
              <p><strong>Channel Name:</strong> {channelName}</p>
              <br></br>
              <p><strong>Video Name:</strong> {videoName}</p>
            </div>
            <div className="downloadButton self-center">
              <Button variant="default" onClick={(e) => {
                  e.preventDefault();
                  const link = document.createElement('a');
                  link.href = videoUrl;
                  link.download = videoName || 'video.mp4';
                  link.className = "buttonDownload";
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}><IoMdDownload /> Download</Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LinkBox;
