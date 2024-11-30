const HowToUse = () => {
  return (
    <div className="mx-auto mb-24 max-w-3xl p-4 pb-16 text-white">
      <h2 className="mb-4 text-2xl font-semibold">How to Use GetShorts</h2>
      <ol className="list-decimal space-y-2 pl-5">
        <li>
          Copy the URL of the short video you want to download from platforms
          like Instagram, TikTok, Twitter, or Facebook.
        </li>
        <li>Paste the URL into the input field on the GetShorts homepage.</li>
        <li>Select the desired video quality from the dropdown menu.</li>
        <li>
          Choose the download mode (video or audio) from the dropdown menu.
        </li>
        <li>Click the SEND button to fetch the video.</li>
        <li>
          Wait for the video to be processed. Once ready, a download button will
          appear.
        </li>
        <li>Click the download button to save the video to your device.</li>
      </ol>
    </div>
  );
};

export default HowToUse;
