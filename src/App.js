import React, { memo } from 'react';
import { useRoutes } from 'react-router-dom';
import routes from './router';

const App = memo(() => {
  return (
    <div>
      <header>Header submitHeader11111</header>
      <div>{useRoutes(routes)}</div>
      <footer>Footer sbumitFooter11111</footer>
    </div>
  );
});

export default App;
