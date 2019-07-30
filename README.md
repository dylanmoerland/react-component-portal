# React component portal

Transports the rendering of a component to a portal destination, in both React and React Native.

## Usage

```
$ npm install --save react-component-portal
```

`React: `
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

`React Native:`
```
import React from 'react';
import { View, Text } from 'react-native'

import {
  PortalProvider,
  PortalDestination,
  Portal,
} from 'react-component-portal';

export default () => (
  <PortalProvider>
    <View>
      <PortalDestination name="example" />
    </View>
    <Portal destination="example">
      <Text>This will render in the View</Text>
    </Portal>
  </PortalProvider>
);
```

## Example

You can find the example in the [/example folder](https://github.com/dylanmoerland/react-component-portal/tree/master/example)

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
