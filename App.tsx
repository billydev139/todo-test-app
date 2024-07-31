import React from 'react';
import NavContainer from './src/Navigation';
import {Provider} from 'react-redux';
import {LogBox} from 'react-native';
import {ReduxStore} from './src/Redux/ReduxStore';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications
const App: React.FC = () => {
  return (
    <Provider store={ReduxStore}>
      <NavContainer />
    </Provider>
  );
};

export default App;
