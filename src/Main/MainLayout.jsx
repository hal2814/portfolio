import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { css } from '@emotion/core';
import NavBar from '../Nav/NavBar';
import Panel from '../Panel/Panel';
import { PRIMARY, GRAD1, GRAD2 } from '../consts/css';

const MainLayout = ({
    // things, doThingsAction,
}) => {

    const mainLayoutStyles = css`
        color: ${PRIMARY};
        ${'' /* width: 100%; */}
        height: 1000px;
        margin-top: 60px;
        font-size:36;
        ${'' /* background-image: linear-gradient(${GRAD1}, ${GRAD2}); */}

        .container { 
            display: flex;
        }
    `;

    const welcomeText = "I use modern frontend frameworks to build web applications.";

    const welcomeTextHead = "Hi, I'm Nate. "

    const gradBackground = "gradient-background";

    const curve = "curve";


    return (
            <div css={mainLayoutStyles}>
                <NavBar />
                <Panel welcomeText={welcomeText} welcomeTextHead={welcomeTextHead} backgroundType={gradBackground} curveType={curve} />
                <Panel />
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