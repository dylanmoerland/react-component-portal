import React from 'react';
import PT from 'prop-types';

import { usePortalRegistery } from '../PortalProvider';

const PortalDestination = ({ name }) => {
  const [amountOfChildren, setAmountOfChildren] = React.useState(0);
  const { addContainer, removeContainer, renderContainer } = usePortalRegistery(name);

  React.useEffect(() => {
    addContainer(name, this);

    return () => {
      removeContainer(name, this);
    };
  }, []);

  React.useEffect(() => {
    const length = renderContainer(name).length;

    if (length !== amountOfChildren) {
      setAmountOfChildren(length);
    }
  }, [renderContainer(name)]);

  return renderContainer(name);
};

PortalDestination.propTypes = {
  name: PT.string.isRequired,
};

export default PortalDestination;
