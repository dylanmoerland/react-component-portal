import * as React from 'react';

export interface PortalProps {
  destination: string;
}
declare class Portal extends React.Component<PortalProps> {}

export interface PortalDestinationProps {
  name: string;
}
declare class PortalDestination extends React.Component<PortalDestinationProps> {}

declare class PortalProvider extends React.Component {}
