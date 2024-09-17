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
     <div className='container'>
      <h1 className='bg-orange-900 text-red-400'>Add This TItle </h1>
     </div>
    </div>
  );
}

export default App;
