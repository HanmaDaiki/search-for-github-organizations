/* eslint-disable react-refresh/only-export-components */
import { withProviders } from './providers';
import { Routing } from '@pages/index';

const App = () => {
  return (
    <div>
      <Routing />
    </div>
  );
};

export default withProviders(<App />);
