'use strict';
import data from '../../notifications.json';
import { normalize, schema } from 'normalizr';

/* getAllNotificationsByUser function*/
const getAllNotificationsByUser = (userId) => {
    const notifications = normalizedData.entities.notifications;
    const userNotifications = [];

    for (const id in notifications) {
        const notification = notifications[id];

        if (notification.author === userId) {
            userNotifications.push(notification.context);
        }
    }
    return userNotifications;
};


/* notificationsNormalizer function*/
const notificationsNormalizer = (data) => {
    const normalizedNotif = normalize(data, [notification]);
    return normalizedNotif.entities;
};

/* normalizr schema*/
const user = new schema.Entity("users");
const message  = new schema.Entity("messages", {}, { idAttribute: 'guid' });
const notification = new schema.Entity(
    "notifications", {
        author: user,
        context: message,
});

const dataSchema = { users: [user], messages: [message], notifications: [notification] };
const normalizedData = normalize(data, dataSchema);

module.exports = { normalizedData };

export { notificationsNormalizer };
export default getAllNotificationsByUser;

