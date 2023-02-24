import * as data from '../../notifications.json';
import { normalize, schema } from 'normalizr';

const getAllNotificationsByUser = (userId) => {
    const notifications = data.filter(notification => notification.author.id === userId);
    return notifications.map(notification => notification.context);
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


export { normalizedData };
export default getAllNotificationsByUser;