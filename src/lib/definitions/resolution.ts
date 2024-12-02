enum Resolution {
  Best = "best",
  P144 = "144",
  P240 = "240",
  P360 = "360",
  P480 = "480",
  HD = "720",
  FHD = "1080",
  QHD = "1440",
  UHD = "2160",
  P4320 = "4320",
}

const resolutions: Readonly<Record<Resolution, string>> = {
  [Resolution.Best]: "BEST",
  [Resolution.P144]: "144p",
  [Resolution.P240]: "240p",
  [Resolution.P360]: "360p",
  [Resolution.P480]: "480p",
  [Resolution.HD]: "720p",
  [Resolution.FHD]: "1080p",
  [Resolution.QHD]: "1440p",
  [Resolution.UHD]: "2160p",
  [Resolution.P4320]: "4320p",
};

export { Resolution, resolutions };
