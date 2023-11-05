import { WithRouter } from './WithRouter';
import { WithStore } from './WithStore';

export const withProviders = (component: React.ReactNode) => {
  return WithRouter(WithStore(component));
};
