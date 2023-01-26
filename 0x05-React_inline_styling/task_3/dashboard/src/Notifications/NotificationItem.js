import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  urgent: {
    color: '#FF0000',
  },
  default: {
    color: '#00008b',
  },
});


class NotificationItem extends PureComponent {
  render() {
    const { type, html, value, markAsRead, id } = this.props;

    

    if (this.value) {
      return ( <li  
                    onClick={this.markAsRead}
                    data-priority={type}
                    className={ (type === 'urgent') ? css(styles.urgent)
                                             : css(styles.default) }
                    >
                    {value}
              </li> );
    }
    return ( <li  
                  data-priority={type}
                  dangerouslySetInnerHTML={{__html: html }} 
                  onClick={() => markAsRead(id)}
           /> );
  }
}

NotificationItem.propTypes = {
  type: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string.isRequired
  }),
  value: PropTypes.string,
  markAsRead: PropTypes.func,
  id: PropTypes.number,
  }

NotificationItem.defaultProps = {
  type: 'default',
  html: { __html: '' },
  value: '',
  markAsRead: () => undefined,
}

export default NotificationItem;