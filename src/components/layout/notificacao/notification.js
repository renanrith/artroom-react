//create a notification tray component
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { notificationActions } from '../../../actions/notificationActions';
import { notificationConstants } from '../../../constants/notificationConstants';
import { notificationTypes } from '../../../constants/notificationTypes';
import { notificationMessages } from '../../../constants/notificationMessages';
import { notificationColors } from '../../../constants/notificationColors';
import { notificationIcons } from '../../../constants/notificationIcons';
import { notificationPositions } from '../../../constants/notificationPositions';
import { notificationDurations } from '../../../constants/notificationDurations';
import { notificationStyles } from '../../../constants/notificationStyles';
import { notificationAnimation } from '../../../constants/notificationAnimation';
import { notificationAnimationDuration } from '../../../constants/notificationAnimationDuration';
import { notificationAnimationDelay } from '../../../constants/notificationAnimationDelay';
import { notificationAnimationEasing } from '../../../constants/notificationAnimationEasing';

class Notification extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notification: {
                id: '',
                type: '',
                message: '',
                color: '',
                icon: '',
                position: '',
                duration: '',
                style: '',
                animation: '',
                animationDuration: '',
                animationDelay: '',
                animationEasing: '',
                show: false
            }
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.notification.show) {
            this.setState({
                notification: nextProps.notification
            });
        }
    }
    render() {
        return (
            <div className={this.state.notification.show ? 'notification-container show' : 'notification-container'}>
                <div className={this.state.notification.show ? 'notification show' : 'notification'} style={{ backgroundColor: this.state.notification.color }}>
                    <div className="notification-icon">
                        <i className={this.state.notification.icon}></i>
                    </div>
                    <div className="notification-message">
                        <span>{this.state.notification.message}</span>
                    </div>
                </div>
            </div>
        );
    }
}