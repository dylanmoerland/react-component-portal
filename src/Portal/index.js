import React from 'react';
import PT from 'prop-types';

import { usePortalRegistery } from '../PortalProvider';

const Portal = ({ destination, children }) => {
  const data = React.useRef({}).current;
  const { register, unregister, addChild } = usePortalRegistery();

  React.useEffect(() => {
    data.id = register(destination, children);
    renderNodeInPortal();

    return () => {
      unregister(destination, data.id);
    };
  }, [children]);

  const renderNodeInPortal = React.useCallback(() => {
    addChild(destination, children);
  }, [addChild, destination, children]);

  return null;
};

Portal.propTypes = {
  destination: PT.string.isRequired,
  children: PT.node,
};

export default Portal;
