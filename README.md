# React component portal

Transports the rendering of a component to a portal destination, in both React and React Native.

## Getting started
Install `step-definition-generator` from "Install" in Atom's settings or run:
`$ apm install step-definition-generator`

## Usage

```
$ npm install --save react-native-snap-carousel
```

```
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
```

## Example

You can find the example in the (/example folder)[]
