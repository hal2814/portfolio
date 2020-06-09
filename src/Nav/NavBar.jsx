import React, { useState, useEffect } from 'react';
import { css } from '@emotion/core';
import { NAVCOLOR, PRIMARY } from '../consts/css';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';

const NavBar = ({
    // things, doThingsAction,
}) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth <= 600)
        }
        window.addEventListener('resize', handleResize)
    });

    useEffect(() => {
        // function handleScroll(window.pageYOffset)
    });

    const navBarStyles = css`
        position: fixed;
        overflow: hidden;
        top: 0;
        width: 100%;

        a {
            color: ${PRIMARY};
            text-decoration: none;
        }

        .nav-wrapper {
            position: fixed;
            background-color: ${NAVCOLOR};
            top: 0;
            left: 0;
            right: 0;
            display: flex;
            justify-content: center;
            flex-direction: column;
            z-index: 2;
            transition: transform 0.4s;
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
            ${'' /* width: 275px; */}
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

        .logo-img {
            width: 35px;
        }

        @keyframes spin {
            from {
                transform: rotate(0deg);
            }
            to {
                transform: rotate(360deg);
            }
        }

        .make-spin:hover {
            animation: spin 0.5s;
        }

        @media only screen and (max-width: 600px) {
            .nav-container {
                display: none;
            }

            .nav-item {
                width: unset;
                font-size: 6vw;
            }

            .logo {
                font-size: 7vw;
            }

            ${'' /* .item-container {
                display: flex;
                justify-contnent: center;
            } */}

            .mobile-dropdown {
                
            }

            .mobile-item-container {
                padding: 2px;
                ${'' /* border: .5px solid black; */}
                ${'' /* border-radius: 7px; */}
                display: flex;
                font-family: 'Staatliches', cursive;
                align-items: center;
                justify-content: space-evenly;
                flex-wrap: wrap;
            }

            .mobile-logo-container {
                height: 100%;
                padding: 2px;
                ${'' /* border: .5px solid black; */}
                ${'' /* border-radius: 7px; */}
                display: flex;
                font-family: 'Staatliches', cursive;
                align-items: center;
                justify-content: center;
            }

        }
    `;

    if (isMobile) {
        return (
            <div css={navBarStyles}>
                <div className="nav-wrapper">
                    <div className="mobile-logo-container">
                        <img alt="spinning rainbow logo" className="logo-img make-spin" src="rainbow-small.png"></img>
                        <div className="logo">
                            <a href="#">NATE McGREGOR</a>
                        </div>
                    </div>
                    <div className="mobile-item-container">
                        <div className="nav-item">
                            <a href="#work">WORK</a>
                        </div>
                    
                        <div className="nav-item">
                            <a href="#life">LIFE</a>
                        </div>
                    
                        <div className="nav-item">
                            <a href="#stuff">STUFF</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }else{
        return (
            <div css={navBarStyles}>
                <nav className="nav-container">
                    <div className="logo-container">
                        <img alt="spinning rainbow logo" className="logo-img make-spin" src="rainbow-small.png"></img>
                        <div className="logo">
                            <a href="#">NATE McGREGOR</a>
                        </div>
                    </div>
                    <div className="item-container">
                        <div className="nav-item">
                            <a href="#work">WORK</a>
                        </div>
                        <div className="nav-item">
                            <a href="#life">LIFE</a>
                        </div>
                        <div className="nav-item">
                            <a href="#stuff">STUFF</a>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
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