import React from 'react';
import css from './Notification.module.css';

function Notification({ message }) {
  return <p className={css['notification-name']}>{message}</p>;
}

export default Notification;
