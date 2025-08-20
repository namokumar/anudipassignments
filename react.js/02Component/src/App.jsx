// functional component.

import React from 'react'
import { DisplayStudent, DisplayStandard } from './Components/student'
function App() {
    return (
        <div>
            <h1>Welcome to the Student Portal</h1>
            <DisplayStudent />
            <DisplayStandard />
        </div>
    );
}

export default App