import React from "react";
import { css } from "@emotion/core";
import { FOCUSCOLOR, FOCUSHEAD, GRAD1, GRAD2 } from "../consts/css";
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';

const Portfolio = props => {
  const {
    titleText,
    anchorId,
    // things, doThingsAction,
  } = props;

  const PortfolioStyles = css`
    .container {
      display: flex;
      height: 600px;
      width: 100%;
      ${"" /* border: .5px solid black; */}
      align-items: center;
      justify-content: center;
      flex-direction: row;
    }

    .text-focus {
      color: ${FOCUSCOLOR};
      display: flex;
      width: 75%;
      ${"" /* border: .5px solid black; */}
    }

    .title-text {
      font-size: 42px;
      font-family: "Armata", sans-serif;
      text-shadow: 2px 2px 5px #340068;
    }

    .media-slot {
        width: 33%;
        display: flex;
        justify-content: center;
        padding: 20px;
    }

    .media-img {
        width: 100%;
    }

    @media only screen and (max-width: 600px) {
      .welcome-text {
        font-size: 22px;
      }

      .welcome-text-head {
        font-size: 25px;
      }

      .curve {
        border-radius: 0 0 0% 0%;
      }
    }
  `;

  return (
    <div css={PortfolioStyles}>
      <div className="container" id={anchorId}>
        <div className="media-slot">
          <img alt="live activity monitor" className="media-img" src="live-activity-monitor.png"></img>
        </div>
        <div className="media-slot">
          <img alt="rent tracker" className="media-img" src="rentgif.gif"></img>
        </div>
        <div className="media-slot">
          <img alt="food delivery" className="media-img" src="food-delivery.png"></img>
        </div>
      </div>
    </div>
  );
};

// Portfolio.propTypes = {
//     welcomeText: propTypes.string.isRequired
//     // things: PropTypes.array.isRequired,
//     // doThingAction: PropTypes.func.isRequired,
// };

// Portfolio.defaultProps = {
//     // things: null;
// };

// const mapStateToProps = (state) => ({
//     // things: state.store.things,
// });

// const mapDispatchToProps = (dispatch) => bindActionCreators({
//     // doThingAction: doThing,
// }, dispatch);

// export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);

export default Portfolio;
