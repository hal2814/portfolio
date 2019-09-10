import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { css } from '@emotion/core';
import NavBar from '../Nav/NavBar';
import { PRIMARY } from '../consts/css';

const MainLayout = ({
    // things, doThingsAction,
}) => {

    const mainLayoutStyles = css`
        color: ${PRIMARY};

        ${'' /* .parallax {
            background-image: url(${imgUrl});
            height: 100%;
            width: 100%;
            background-attachment:fixed;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
        } */}

        .other-section {
            height: 1000px;
            background-color:rebeccapurple;
            font-size:36;
        }
    `;

    return (
            <div css={mainLayoutStyles}>
                <NavBar />
                <div className="other-section">
                </div>
            </div>
    );
};

MainLayout.propTypes = {
    // things: PropTypes.array.isRequired,
    // doThingAction: PropTypes.func.isRequired, 
};

MainLayout.defaultProps = {
    // things: null;
};

const mapStateToProps = (state) => ({
    // things: state.store.things,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    // doThingAction: doThing,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);