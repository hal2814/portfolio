import React from 'react';
import { css } from '@emotion/core';
import { NAVCOLOR, PRIMARY } from '../consts/css';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';

const NavBar = ({
    // things, doThingsAction,
}) => {
    const navBarStyles = css`
        position: fixed;
        overflow: hidden;
        top: 0;
        width: 100%;

        a {
            color: ${PRIMARY};
            text-decoration: none;
        }

        .nav-container {
            height: 60px;
            background-color: ${NAVCOLOR};
            overflow: hidden;
            padding: 5px;
            ${'' /* border: .5px solid black; */}
            border-radius: 7px;
            display: flex;
            font-family: 'Staatliches', cursive;
            align-items: center;
            justify-content: space-between;
        }

        .logo-container {
            width: 275px;
            height: 100%;
            display: flex;
            margin: 20px;
            align-items: center;
            ${'' /* border: .5px solid black; */}
        }

        .item-container {
            height: 100%;
            width: 100%;
            display: flex;
            margin: 20px;
            ${'' /* border: .5px solid black; */}
            align-items: center;
            justify-content: flex-end;
        }

        .logo {
            order: 0;
            padding: 5px;
            justify-content: flex-start;
            font-size: 33px;
            white-space: nowrap;
        }

        .nav-item {
            width: 100px;
            padding: 5px;
            ${'' /* border: .5px solid black; */}
            font-size: 23px;
        }
    `;

    return (
        <div css={navBarStyles}>
            <div className="nav-container">
                <div className="logo-container">
                    <div className="logo">
                        NATE MCGREGOR
                    </div>
                </div>
                <div className="item-container">
                    <div className="nav-item">
                        <a href="#">Work</a>
                    </div>
                    <div className="nav-item">
                        <a href="#">Life</a>
                    </div>
                    <div className="nav-item">
                        <a href="#">Stuff</a>
                    </div>
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