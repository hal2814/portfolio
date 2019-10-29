import React from 'react';
import { css } from '@emotion/core';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';

const Panel = ({
    // things, doThingsAction,
}) => {
    const PanelStyles = css`
        padding: 30px;

        .focus { 
            height: 500px;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            border: .5px solid black;
        }
    `;

    return (
        <div css={PanelStyles}>
            <div className="focus">
                Hi, I'm Nate. I use modern frontend frameworks to build web applications.
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