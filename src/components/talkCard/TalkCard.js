import React from "react";
import "./TalkCard.scss";
import youtubeImage from '../../assets/images/channel.jpg';




export default function TalkCard({talkDetails}) {
  return (
    <div className="container">
  <div className={talkDetails.isDark ? "dark-rectangle rectangle" : "rectangle"}>
    <div className="diagonal-fill"></div>
    <div className="talk-card-title">{talkDetails.title}</div>
    <a href="https://www.youtube.com/channel/UC20Ptt-YzxH-2MLo0XOAEnQ" target="_blank" rel="noopener noreferrer">
      <div className="youtube-card">
        <img
          src={youtubeImage} // Ensure youtubeImage is the correct path to your YouTube logo/image
          alt="YouTube Icon"
          className="youtube-icon"
        />
        <div className="youtube-channel-name">Go to My YouTube Channel</div>
      </div>
    </a>
  </div>
</div>

    // <div>
    //   <div className="container">
    //     <div
    //       className={
    //         talkDetails.isDark ? "dark-rectangle rectangle" : "rectangle"
    //       }
    //     >
    //       <div className="diagonal-fill"></div>
    //       <div className="talk-card-title">{talkDetails.title}</div>
    //       <img src={youtubeImage} alt="youtubskjn" className="talk-card-subtitle" ></img>
    //     </div>
    //   </div>
    // </div>
  );
}
