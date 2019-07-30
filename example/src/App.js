import React from 'react';

import {
  PortalProvider,
  PortalDestination,
  Portal,
} from 'react-component-portal';

export default () => (
  <PortalProvider>
    <main>
      <PortalDestination name="example" />
    </main>
    <Portal destination="example">
      <p>This will render in main</p>
    </Portal>
  </PortalProvider>
);
