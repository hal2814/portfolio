import React from 'react';
import { css } from '@emotion/core';
import { FOCUSCOLOR } from '../consts/css';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';

const Panel = ({
    // things, doThingsAction,
}) => {
    const PanelStyles = css`
        padding: 30px;

        .focus { 
            display: flex;
            height: 500px;
            width: 100%;
            ${'' /* border: .5px solid black; */}
            align-items: center;
            justify-content: center;
        }

        .text-focus {
            color: ${FOCUSCOLOR};
            display: flex;
            align-items: center;
            height: 100px;
            ${'' /* border: .5px solid black; */}
        }

        .welcome-text {
            font-size: 42px;
            font-family: 'Didact Gothic', sans-serif;
        }
    `;

    return (
        <div css={PanelStyles}>
            <div className="focus">
                <div className="text-focus welcome-text">
                    Hi, I'm Nate. I use modern frontend frameworks to build web applications.
                </div>
            </div>
        </div>
    );
};

// Panel.propTypes = {
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