import React from "react";
import "./Banner.scss";
import { Button } from "../Button/Button";
import arrdown from '../../assets/arrowDown.svg';
import stars from "../../assets/stars.svg";
import video from "../../assets/video/presentation.MP4";
import videoImg from "../../assets/video-img.svg";

export const Banner = () => (
  <div className="banner-page">
    <div className="banner">
      <div className="banner__titles">
        <div className="banner__block-clients">
          <img src={stars} className="banner__stars-img" alt="stars-img" />
          <h6 className="banner__text">English for corporate clients</h6>
        </div>

        <h1 className="banner__main-title">
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

      <Button className="banner__button" aria-label="banner-button">
        More About Courses
        <img
          src={arrdown}
          className="banner__batton-img"
          alt="arrow-down"
        />
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
