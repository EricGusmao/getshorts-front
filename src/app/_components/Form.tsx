import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } 
from "@/components/ui/select"

interface FormProps {
    url: string;
    setUrl: (url: string) => void;
    setResolution: (resolution: string) => void;
    setDownloadMode: (downloadMode: string) => void;
    SendLink: (event: React.FormEvent<HTMLFormElement>) => void;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}


export const Form: React.FC<FormProps> = ({ url, setResolution, setDownloadMode, SendLink, handleChange}) => (
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
    );