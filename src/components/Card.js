import React from "react";

export default function Card(props) {
  return (
    <section>
      <img src={props.imageUrl} className="card--image" />
      <div className="card--content">
        <div className="location--details">
          <img src="images/location-symbol.png" className="location--symbol" />
          <p className="location--country">{props.location.toUpperCase()}</p>
          <a href={props.googleMapsUrl} className="location--map">
            View on Google Maps
          </a>
        </div>
        <p className="location--name">{props.title}</p>
        <p className="open--date">
          {props.startDate} - {props.endDate}
        </p>
        <p className="location--description">{props.description}</p>
      </div>
    </section>
  );
}
