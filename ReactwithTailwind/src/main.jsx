import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Card from './Card.jsx'

let someObj={
  name:"sonu",
  age:23
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <Card username="Sonu Kachhap" intro="I am Frontend Developer"></Card>
    <Card username="Sanjay" intro="I am an Software Developer"></Card>
    <Card username="Hitesh" intro= "I am an youtuber"></Card>

    
    
  </React.StrictMode>
) 
 