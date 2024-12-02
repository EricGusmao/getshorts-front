enum DownloadMode {
  Video = "video",
  Audio = "audio",
}

const downloadModes: Readonly<Record<DownloadMode, string>> = {
  [DownloadMode.Video]: "Video",
  [DownloadMode.Audio]: "Audio",
};

export { DownloadMode, downloadModes };
