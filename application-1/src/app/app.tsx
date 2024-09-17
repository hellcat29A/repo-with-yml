import { SharedHeader } from '@hellcat29a/shared-header';
import '@hellcat29a/shared-header/dist/index.css'

import NxWelcome from './nx-welcome';

import { Route, Routes, Link } from 'react-router-dom';


const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
]
export function App() {
  return (
    <div>
     <SharedHeader navigation={navigation}/>
    </div>
  );
}

export default App;
