"use client";

import React, { useActionState, useEffect } from "react";
import { Spinner } from "@/components/spinner";
import { Resolution, resolutions } from "@/lib/definitions/resolution";
import { DownloadMode, downloadModes } from "@/lib/definitions/download-mode";
import Form from "next/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { fetchVideo } from "app/actions";
import { useToast } from "@/hooks/use-toast";
import VideoBox from "./video-box";

export default function LinkBox() {
  const { toast } = useToast();
  const [state, formAction, isPending] = useActionState(fetchVideo, {});

  useEffect(() => {
    if (state.error) {
      toast({
        title: "Error",
        description: state.error,
        variant: "destructive",
      });
    }

    if (state.data) {
      toast({
        title: "Success",
        description: "Video fetched successfully.",
        variant: "default",
      });
    }
  }, [state, toast]);

  return (
    <>
      <Form
        action={formAction}
        className="flex flex-row flex-wrap justify-center gap-4"
      >
        <Input type="text" name="url" className="w-96" />

        <Select name="resolution" defaultValue={Resolution.Best}>
          <SelectTrigger className="w-28">
            <SelectValue placeholder="Quality" />
          </SelectTrigger>
          <SelectContent>
            {Object.entries(resolutions).map(([key, value]) => (
              <SelectItem key={key} value={key}>
                {value}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select name="downloadMode" defaultValue={DownloadMode.Video}>
          <SelectTrigger className="w-28">
            <SelectValue placeholder="Mode" />
          </SelectTrigger>
          <SelectContent>
            {Object.entries(downloadModes).map(([key, value]) => (
              <SelectItem key={key} value={key}>
                {value}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Button
          className="font-bold uppercase"
          type="submit"
          disabled={isPending}
        >
          Send
        </Button>
      </Form>

      {isPending && <Spinner size="large" className="mt-16" show={true} />}

      {!isPending && state.data && (
        <div className="mx-auto mt-5 flex flex-1 justify-center">
          <VideoBox data={state.data} />
        </div>
      )}
    </>
  );
}
