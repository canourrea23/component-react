import React from 'react'
export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <button onClick={()=> {
        location.assign('https://cypress.io')
      }}>Click me</button>
      
    </div>
  );
}