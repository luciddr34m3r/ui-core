import React from 'react';
import PropTypes from 'prop-types';

import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Paper,
  ListItemIcon,
  IconButton,
} from '@material-ui/core';

/**
 * Primary UI component for user interaction
 */
export const ActionList = ({ items, actions, listItemProps, ...props }) => {

  return (
    <List {...props} >
      { items.map((item, idx) => (
        <ListItem key={idx}
          {...listItemProps}
        >
          <ListItemText primary={item.text} />
          { actions.map((action, idx) => (
            <ListItemIcon
              key={idx}
            >
              <IconButton
                onClick={action.action}
              >
                {action.icon}
              </IconButton>
            </ListItemIcon>
          ))}
        </ListItem>
      ))}
    </List>
  );
};

ActionList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
  })),
  actions: PropTypes.arrayOf(PropTypes.shape({
    action: PropTypes.func,
    icon: PropTypes.node,
    text: PropTypes.string,
  })),
  listItemProps: PropTypes.object,
};

ActionList.defaultProps = {
  items: [],
  actions: [],
};

export default ActionList;