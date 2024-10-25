import React from "react";
import "./Banner.scss";
import { Button } from "../Button/Button";
import stars from "../../assets/stars.svg";
import video from "../../assets/video/presentation.MP4";
import videoImg from "../../assets/video-img.svg";

export const Banner = () => (
  <div className="banner-page">
    <div className="banner">
      <div className="banner__titles">
        <div className="banner__text">
          <img
            src={stars}
            className="banner__stars"
            alt="Corporate stars logo"
          />
          <h6 className="banner__text-clients">
            English for corporate clients
          </h6>
        </div>

        <h1 className="banner__title-main">
          Expand
          <br />
          your business horizons
          <br />
          with English!
        </h1>

        <h6 className="banner__explanation">
          Learn English to expand your opportunities, improve communication with
          <br />
          international partners and reach new heights in business!
        </h6>
      </div>

      <Button className="banner__button" aria-label="Learn more about courses">
        More About Courses
      </Button>
    </div>

    <div className="video">
      {video && (
        <video
          controls
          autoPlay
          muted
          className="video__size"
          src={video}
          poster={videoImg}
        />
      )}
    </div>
  </div>
);
