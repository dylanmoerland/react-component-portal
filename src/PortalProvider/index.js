import React from 'react';
import PT from 'prop-types';

const PortalContext = React.createContext();

export const usePortalRegistery = () => {
  const context = React.useContext(PortalContext);
  if (!context) {
    throw new Error(
      'Portal components should be rendered inside the Portal compount component'
    );
  }
  return context;
};

const useRegistery = () => {
  const containers = React.useRef({}).current;
  const children = React.useRef({}).current;
  const [currentId, setCurrentId] = React.useState(0);

  const renderContainer = React.useMemo(() => (name) =>
    children[name]
      ? Object.keys(children[name])
        .sort()
        .map((id) => children[name][id])
      : []
  , [children]);

  const addContainer = React.useMemo(() => (name, container) => {
    containers[name] = container;
  }, [containers]);

  const removeContainer = React.useMemo(() => (name) => {
    containers[name] = null;
  }, [containers]);

  const addChild = React.useMemo(() => (name, id, child) => {
    children[name][id] = child;
  }, [children]);

  const clearChild = React.useMemo(() => (name, id) => {
    delete children[name][id];
  }, [children]);

  const register = React.useMemo(() => (name, child) => {
    children[name] = children[name] || {};

    const id = `${name}_${currentId}`;
    children[name][id] = child;
    setCurrentId(currentId + 1);

    return id;
  }, [children, currentId]);

  const unregister = React.useMemo(() => (name, id) => {
    clearChild(name, id);
  }, [clearChild]);

  return React.useMemo(
    () => ({
      addChild,
      renderContainer,
      addContainer,
      removeContainer,
      clearChild,
      register,
      unregister,
    }),
    [
      addChild,
      renderContainer,
      addContainer,
      removeContainer,
      register,
      unregister,
      clearChild,
    ]
  );
};

const PortalProvider = ({ children }) => {
  const value = useRegistery();

  return (
    <PortalContext.Provider value={value}>{children}</PortalContext.Provider>
  );
};

PortalProvider.propTypes = {
  children: PT.oneOfType([PT.node, PT.arrayOf(PT.node)]),
};

export default PortalProvider;
