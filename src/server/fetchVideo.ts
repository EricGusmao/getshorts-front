"use server"


export async function fetchVideo(url: string, resolution: string, downloadMode: string){
    const SERVER_URL = "https://tikvideofetch.slocksert.dev/video";
    console.log(SERVER_URL);
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

    return await response.json();
}