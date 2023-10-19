import React from "react";
import Card from "./Card";
import first from "../assets/001-mockup 1.png";
import second from "../assets/002-manager 1.png";
import third from "../assets/003-calendar 1.png";

const CardSection = () => {
  return (
    <div className="cardContainer">
      <Card
        title={"Easily capture and create expense reports."}
        desc={
          "Lorem ipsum dolor sit amet, consecteturadipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Utenm adminim veniam, quis nostrud exercitationullamco laboris nisi ut aliquip ex ea commodoconsequat."
        }
        imageSrc={first}
      />

      <Card
        title={"Review and manage expense workflow"}
        desc={
          "Lorem ipsum dolor sit amet, consecteturadipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Utenm adminim veniam, quis nostrud exercitationullamco laboris nisi ut aliquip ex ea commodoconsequat."
        }
        imageSrc={second}
      />

      <Card
        title={"Saves employees and business owners time."}
        desc={
          "Lorem ipsum dolor sit amet, consecteturadipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Utenm adminim veniam, quis nostrud exercitationullamco laboris nisi ut aliquip ex ea commodoconsequat."
        }
        imageSrc={third}
      />
    </div>
  );
};

export default CardSection;
