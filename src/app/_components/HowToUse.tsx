const HowToUse = () => {
  return (
    <div className="text-white max-w-3xl mx-auto p-4 mb-24 pb-16">
      <h2 className="text-2xl font-semibold mb-4">How to Use GetShorts</h2>
      <ol className="list-decimal pl-5 space-y-2">
        <li>Copy the URL of the short video you want to download from platforms like Instagram, TikTok, Twitter, or Facebook.</li>
        <li>Paste the URL into the input field on the GetShorts homepage.</li>
        <li>Select the desired video quality from the dropdown menu.</li>
        <li>Choose the download mode (video or audio) from the dropdown menu.</li>
        <li>Click the SEND button to fetch the video.</li>
        <li>Wait for the video to be processed. Once ready, a download button will appear.</li>
        <li>Click the download button to save the video to your device.</li>
      </ol>
    </div>
  );
};

export default HowToUse;
