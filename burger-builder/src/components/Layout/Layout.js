import React from 'react';
import Aux from '../../hoc/Aux';

import Class from './Layout.css';

const layout = (props) => (
    <Aux>
    <div>
      Toolbar
    </div>
    <main className={Class.Content}>
      {props.children}
    </main>
    </Aux>
  );

export default layout;
