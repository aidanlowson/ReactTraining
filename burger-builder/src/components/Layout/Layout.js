import React from 'react';

import Class from './Layout.css';

const layout = (props) => (
    <div>
      <div>
        Toolbar
      </div>
      <main className={Class.Content}>
        {props.children}
      </main>
    </div>
  );

export default layout;
