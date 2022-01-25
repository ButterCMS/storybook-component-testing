import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

const LandingPage = ({ data }) => {
  return (
    <>
      <div className="jumbotron">
        <div
          className="jumbotron__image"
          style={{
            backgroundImage: `url(${data.fields.jumbotron.image})`,
          }}
        >
          <div className="jumbotron__title">{data.fields.jumbotron.title}</div>
        </div>
      </div>
      <div className="features">
        {data.fields.features.features_card.map((feature, index) => {
          return (
            <div key={index} className="features__card">
              <img
                src={feature.image}
                alt={feature.title}
                className="features__card__image"
              />
              <h1 className="features__card__title">{feature.title}</h1>
              <p className="features__card__description">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

LandingPage.propTypes = {
  name: PropTypes.string,
};

export default LandingPage;
