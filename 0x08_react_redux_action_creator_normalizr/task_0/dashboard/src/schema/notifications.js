import * as data from '../../notifications.json';


const getAllNotificationsByUser = (userId) => {
    const notifications = data.filter(notification => notification.author.id === userId);
    return notifications.map(notification => notification.context);
};


export default getAllNotificationsByUser;

