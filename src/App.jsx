import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    fetch(
      "https://gateway.marvel.com/v1/public/characters?ts=1&apikey=6282336b2772f159d998dec2f4f104e5&hash=f13fe181e7f7e7736e638e099af20039"
    )
      .then((response) => response.json())
      .then((data) => setData(data.data.results));
  }, []);

  console.log(data);

  return (
    <>
      <div>
        {data.map((marvel) => (
          <>
            <li key={marvel.id}>{marvel.name}</li>
            {/* <img src={`${marvel.thumbnail.path}.${marvel.thumbnail.extension}`}/> */}

            {/* VARIOS MAPEOS */}
            {
              marvel.comics.items?.map((comic, index)=>(
                <li>{comic.resourceURI}</li>
              ))
            }
            
          </>
        ))}
      </div>
    </>
  );
}

export default App;
