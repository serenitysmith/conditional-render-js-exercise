// **
//      * Challenge:
//      * - Only display the <h1> below if there are unread messages
//      *
import './App.css';
import React, {useState} from 'react';
function App() {
  
    // Define a state variable called 'messages' using the 'useState' hook.
    // Initialize it with an array containing two strings, "a" and "b".
    const [messages, setMessages] = React.useState(["a", "b"])
    
     // Render the component's UI
    return (
        <div>
         {/* Check if the 'messages' array has a length greater than 0 */}
            {messages.length > 0 && (
               // If there are unread messages, display a heading
              <h1> You have {messages.length} unread {messages.length === 1 ? 'message' : 'messages'}  </h1>

            )}
        </div>
    );
}


//scrimbAS answer

// export default function App() {
//     const [messages, setMessages] = React.useState(["a", "b"])
//     /**
//      * Challenge:
//      * - Only display the <h1> below if there are unread messages
//      */
//     return (
//         <div>
//             {
//                 messages.length > 0 && 
//                 <h1>You have {messages.length} unread messages!</h1>
//             }
//         </div>
//     )


export default App;


// inside the App component, there's a state variable called messages defined using the useState hook. This state variable is initialized with an array containing two strings, "a" and "b".

// The component's return statement defines the JSX (JavaScript XML) that will be rendered to the DOM when this component is used.

// Inside the JSX, there's a conditional check {messages.length > 0 && ...}. It checks if the messages array has a length greater than 0. If it does, the code within the parentheses will be executed.

// Inside the conditional block, a heading element (<h1>) is displayed. The heading text dynamically changes based on the number of unread messages:

// It uses the messages.length to display the count of unread messages.
// It uses a ternary operator to determine whether to display "message" or "messages" based on whether there's exactly one unread message.