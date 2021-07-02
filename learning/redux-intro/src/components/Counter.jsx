import React from 'react';
import { connect } from 'react-redux';

const Counter = (props) => {
    return (
        <div>
            <h1>{props.counter}</h1>
        </div>
    );
};

function mapStateToProps(state) {
    return { counter: state.counterReducer };
}

export default connect(mapStateToProps)(Counter);
