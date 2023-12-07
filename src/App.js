import React, { memo } from 'react';
import { useRoutes } from 'react-router-dom';
import routes from './router';

const App = memo(() => {
  return (
    <div>
      <header>Header marsterHeader</header>
      <div>{useRoutes(routes)}</div>
      <footer>Footer marsterFooter</footer>
    </div>
  );
});

export default App;
