import React from 'react';
import { css } from '@emotion/core';
import { FOCUSCOLOR, FOCUSHEAD, GRAD1, GRAD2  } from '../consts/css';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';

const Panel = (props) => {
    const {
        welcomeText, welcomeTextHead, backgroundType, curveType
        // things, doThingsAction,
    } = props;

    const PanelStyles = css`

        .focus { 
            display: flex;
            height: 600px;
            width: 100%;
            ${'' /* border: .5px solid black; */}
            align-items: center;
            justify-content: center;
            flex-direction: column;
        }

        .gradient-background {
            background-image: linear-gradient(${GRAD1}, ${GRAD2});
        }

        .curve {
            border-radius: 0 0 75% 0%;
        }

        .text-focus {
            color: ${FOCUSCOLOR};
            display: flex;
            width: 75%;
            ${'' /* border: .5px solid black; */}
        }

        .welcome-text {
            font-size: 42px;
            font-family: 'Armata', sans-serif;
            text-shadow: 2px 2px 5px #340068;
        }

        .welcome-text-head {
            font-size: 50px;
            color: ${FOCUSHEAD};
        }
    `;

    return (
        <div css={PanelStyles}>
            <div className={"focus" + " " + backgroundType + " " + curveType}>
                <div className="text-focus welcome-text welcome-text-head">
                    {welcomeTextHead}
                    {/* {welcomeText} */}
                </div>
                <div className="text-focus welcome-text">
                    {/* {welcomeTextHead} */}
                    {welcomeText}
                </div>
            </div>
        </div>
    );
};

// Panel.propTypes = {
//     welcomeText: propTypes.string.isRequired
//     // things: PropTypes.array.isRequired,
//     // doThingAction: PropTypes.func.isRequired, 
// };

// Panel.defaultProps = {
//     // things: null;
// };

// const mapStateToProps = (state) => ({
//     // things: state.store.things,
// });

// const mapDispatchToProps = (dispatch) => bindActionCreators({
//     // doThingAction: doThing,
// }, dispatch);

// export default connect(mapStateToProps, mapDispatchToProps)(Panel);

export default Panel;