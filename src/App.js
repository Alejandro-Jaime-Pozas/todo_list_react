import { useState } from 'react';
import Navbar from "./components/Navbar";

function App(props) {

    // Set a state for count - initial state of 0 and setCount is function to change state value of count
    const [count, setCount] = useState(0);
    // Set a state for names - initial state of [] and setNames is function to change state value of names
    const [names, setNames] = useState([]);

    // Function to be exectuted when the name form is submitteed
    function handleNameClick(e){
        // Prevent default of refreshing page
        e.preventDefault();
        // Get the value from the form
        const name = e.target.firstName.value;
        let newNames = [...names, name]
        // Set the state of names to be the current state of names + the new name
        setNames(newNames)
    }

    return (
        <>
            <Navbar name='Alex' city='Mexico'/>
            <div className='container text-center'>
                <br></br>
                <h1 className=''>What's in your grocery list:</h1>
                <br></br>
                <form onSubmit={handleNameClick}>
                    <input type='text' className='form-control ' name='firstName' />
                    <br />
                    <input className='text-center btn btn-primary' type='submit' value='Submit' />
                </form>
                <br></br>
                <div className='lead text-start card my-3'>
                    <ul className='my-3'>
                        {names.map((n, i) => 
                            <li key={i} className='my-3'>
                                {n}
                            </li>
                        )}
                    </ul>

                </div>
            </div>
        </>
    )
}

export default App;
