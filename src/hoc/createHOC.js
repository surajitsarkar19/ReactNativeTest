import hoistNonReactStatics from 'hoist-non-react-statics';

export const getDisplayName = Component =>
  Component.displayName || Component.name || 'Component';

export default function(WrappedComponent, EnhancedComponent) {
  hoistNonReactStatics(EnhancedComponent, WrappedComponent);
  EnhancedComponent.displayName = getDisplayName(WrappedComponent);
  return EnhancedComponent;
}
