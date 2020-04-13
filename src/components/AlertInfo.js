import React, { Component } from 'react';
import { Alert, AlertContainer } from "react-bs-notifier";
import {connect} from 'react-redux';

class AlertInfo extends Component {
    handleDismiss = () => {
        this.props.alertOff();
    }
    render() {
        if (!this.props.alertShow) return null;
        return (
            
            <AlertContainer>
                <Alert type="info" onDismiss={() => this.handleDismiss()} timeout={100}>
                    {this.props.alertContent}
                </Alert>
            </AlertContainer>
            
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        alertShow: state.alertShow,
        alertContent: state.alertContent
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        alertOn: () => {
            dispatch({
                type:"ALERT_ON"
            })
        },
        alertOff: () => {
            dispatch({
                type:"ALERT_OFF"
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AlertInfo);