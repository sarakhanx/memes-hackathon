import React from "react";

const FacebookShareButton: React.FC<FacebookShareButtonProps> = ({
  url,
  quote,
}) => {
  const handleClick = () => {
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      url ?? ""
    )}&quote=${encodeURIComponent(quote)}`;
    window.open(shareUrl, "_blank");
  };

  return <button className="w-full bg-blue-700 rounded-md mt-2 p-2" onClick={handleClick}>Share on Facebook</button>;
};

export default FacebookShareButton;