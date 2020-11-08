import React, { Component } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; //Kiểm tra kiểu dữ liệu của props
import MessageNotify from './../components/MessageNotify';

class MessageContainer extends Component {
    render() {
        var {message} = this.props;
        return <MessageNotify message={message}/>
    }
}

MessageContainer.propTypes = {
    message: PropTypes.string.isRequired,
}

const mapStateToProps = state => {
    return {
        message: state.message,
    }
}
export default connect(mapStateToProps, null)(MessageContainer);
