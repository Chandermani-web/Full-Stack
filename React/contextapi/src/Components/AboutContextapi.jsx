import React from 'react'
import "./AboutContextapi.css";

const AboutContextAPI = () => {
  return (
    <div className='about-contextapi'>
      <h1>Learning about contextapi</h1>
      <p>Context API is a powerful feature in React that allows you to share values between components without having to pass props down manually at every level. It is particularly useful for global data that needs to be accessed by many components at different nesting levels, such as themes, user authentication, or language settings.</p>
      <p>To use Context API, you typically create a context using `React.createContext()`, which provides a Provider and a Consumer. The Provider component is used to wrap the part of your component tree that needs access to the context, and it takes a `value` prop that contains the data you want to share. The Consumer component is used to access the context value in any component that is a descendant of the Provider.</p>
      <p>Here's a simple example:</p>
      <pre>
{`import React, { createContext, useContext } from 'react';
const MyContext = createContext();

const MyProvider = ({ children }) => {
  const sharedValue = 'Hello from context!';
  return (
    <MyContext.Provider value={sharedValue}>
      {children}
    </MyContext.Provider>
  );
};

const MyComponent = () => {
  const contextValue = useContext(MyContext);
  return <div>{contextValue}</div>;
};  

export default App;
`}
      </pre>
      <p>In this example, `MyProvider` wraps `MyComponent`, allowing it to access the shared value from `MyContext`. The `useContext` hook is used to consume the context value in `MyComponent`.</p>
      <p>Context API is a great way to manage global state in React applications, making it easier to share data across components without prop drilling. However, it's important to use it judiciously, as overusing context can lead to performance issues and make your application harder to understand.</p>
    </div>
  );
};    

export default AboutContextAPI;
