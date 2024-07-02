import React, { useEffect, useState } from 'react'

const About = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/todos/";
    fetch(url).then((response) => {
      response.json().then((data) => {
        console.log(data);
        setData(data);
      })
    })

  }, [])
  return (
    <div>
   

    </div>
  )
}

export default About