// props - passing data into component.

import React from 'react'
import Student from './Student'
function App() {
  return (
    <div>
      <h1>App Component</h1>
      <Student stdname="Yash Agarwal" age={22} standard="MCA" />
    </div>
  );
}

export default App