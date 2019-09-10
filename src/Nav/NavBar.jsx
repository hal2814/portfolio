import React from 'react';
import { css } from '@emotion/core';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';

const NavBar = ({
    // things, doThingsAction,
}) => {
    const navBarStyles = css`
        .nav-container {
            width: 100%;
            height: 100px;
            background-color: goldenrod;
            overflow: hidden;
        }
    `;

    return (
        <div css={navBarStyles}>
            <div className="nav-container">cool</div>
        </div>
    );
};

// NavBar.propTypes = {
//     // things: PropTypes.array.isRequired,
//     // doThingAction: PropTypes.func.isRequired, 
// };

// NavBar.defaultProps = {
//     // things: null;
// };

// const mapStateToProps = (state) => ({
//     // things: state.store.things,
// });

// const mapDispatchToProps = (dispatch) => bindActionCreators({
//     // doThingAction: doThing,
// }, dispatch);

// export default connect(mapStateToProps, mapDispatchToProps)(NavBar);

export default NavBar;