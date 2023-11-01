import { FC } from 'react';
import { Content } from './content/content';
import { Sidebar } from './sidebar/sidebar';

import './style.css';

export const App: FC<{ name: string }> = ({ name }) => {
  return (<div>
    <div className = 'navbar'>
      <h1>{name}</h1>
    </div>
    <Sidebar />
    <Content />
    </div>
  );
};
