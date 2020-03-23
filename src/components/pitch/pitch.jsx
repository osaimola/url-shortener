import React from "react";
import "./pitch.css";
import brand_recognition from "../../images/icon-brand-recognition.svg";
import detailed_records from "../../images/icon-detailed-records.svg";
import fully_customizable from "../../images/icon-fully-customizable.svg";

function Pitch() {
  return (
    <React.Fragment>
      <div className="pitch">
        <div className="pitch-intro">
          <h2>Advanced Statistics</h2>
          <p>
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
        <div className="pitch-body">
          <div className="pitch-offer">
            <div className="pitch-icon">
              <img alt="brand recognition" src={brand_recognition} />
            </div>
            <div className="pitch-copy">
              <h3>Brand Recognition</h3>
              <p>
                Boost your brand recognition with each click. Generic links
                don’t mean a thing. Branded links help instil confidence in your
                content.
              </p>
            </div>
          </div>

          <div className="pitch-offer">
            <div className="pitch-icon">
              <img alt="detailed records" src={detailed_records} />
            </div>
            <div className="pitch-copy">
              <h3>Detailed Records</h3>
              <p>
                Gain insights into who is clicking your links. Knowing when and
                where people engage with your content helps inform better
                decisions.
              </p>
            </div>
          </div>

          <div className="pitch-offer">
            <div className="pitch-icon">
              <img alt="fully customizable" src={fully_customizable} />
            </div>
            <div className="pitch-copy">
              <h3>Fully Customizable</h3>
              <p>
                Improve brand awareness and content discoverability through
                customizable links, supercharging audience engagement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Pitch;
