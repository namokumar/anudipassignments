import React from 'react'
import Student from './Student'
import Faculty from './Faculty'


function App() {
    return (
        <div>
            <h1>App Component</h1>
            <Student />
            <Faculty name="Anuj sir" course="React" duration={30} />
        </div>
    );
}

export default App