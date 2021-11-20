import React from "react";
import "./card.css";

const OtherCard = ({ card_head, card_list }) => {
  return (
    <div className="other_card">
      {card_head && <h3>{card_head}</h3>}
      {card_list && (
        <ul>
          {card_list.map((c, index) => (
            <li key={index}>{c}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OtherCard;
