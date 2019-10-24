import React from 'react';
import { css } from '@emotion/core';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';

const NavBar = ({
    // things, doThingsAction,
}) => {
    const navBarStyles = css`
        .nav-container {
            height: 100px;
            background-color: goldenrod;
            overflow: hidden;
            padding: 5px;
            border: .5px solid black;
            border-radius: 10px;
            display: flex;
            align-items: center;
        }

        .logo {
            order: 0;
            justify-content: flex-start;
            font-size: 30px;
            font-family: 'Fredoka One', cursive;
        }

        .nav-item {
            justify-content: flex-end;
        }
    `;

    return (
        <div css={navBarStyles}>
            <div className="nav-container">
                <div className="logo">
                    NATE MCGREGOR
                </div>
            </div>
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