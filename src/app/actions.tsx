"use server";

export interface MediaResponse {
  description: string;
  videoUrl: string;
  channelName: string;
  videoName: string;
}

export interface Response {
  error?: string;
  data?: MediaResponse;
}

export async function fetchVideo(
  previousState: Response,
  formData: FormData,
): Promise<Response> {
  const url = "https://tikvideofetch.slocksert.dev/video";
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(Object.fromEntries(formData)),
  });

  if (!response.ok) {
    return { error: "Failed to fetch video." };
  }

  const data: MediaResponse = await response.json();

  return { data: data };
}
