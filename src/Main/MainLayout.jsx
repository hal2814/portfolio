import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { css } from '@emotion/core';
import NavBar from '../Nav/NavBar';
import Panel from '../Panel/Panel';
import { PRIMARY } from '../consts/css';

const MainLayout = ({
    // things, doThingsAction,
}) => {

    const mainLayoutStyles = css`
        color: ${PRIMARY};
        width: 100%;
        height: 1000px;
        margin-top: 60px;
        ${'' /* background-color:rebeccapurple; */}
        font-size:36;
        background-image: linear-gradient(#340068, #DA3E52);

        .container { 
            display: flex;
        }

        ${'' /* .other-section {
            height: 1000px;
            background-color:rebeccapurple;
            font-size:36;
        } */}
    `;

    return (
            <div css={mainLayoutStyles}>
                <NavBar />
                {/* <div className="other-section">
                </div> */}
                <Panel />
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