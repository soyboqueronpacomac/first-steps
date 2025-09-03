import type { CSSProperties } from "react";

const isActive = true;
const firstName = 'Fco Javier';
  const lastName = 'Moreno García'
  const favoriteGames = ['Elden Ring', 'Smash', 'Metal Gear'];
  
  const address = {
    zipCode: '29004',
    contry: 'España'
  };
const myStyles: CSSProperties = {
          backgroundColor: isActive ? '#FAFAFA' : 'red',
          borderRadius: 10,
          padding: 20,
          marginTop: 30 
        };
export function MyAwesomeApp () {
  
  
  return (
    <>
      <h1>{firstName}</h1>
      <h3>{lastName}</h3>
      <p>{favoriteGames.join(' - ')}</p>
      <p>{isActive ? 'Activo' : 'No activo'}</p>
      <p
        style={myStyles}
      >{ JSON.stringify(address)}</p>
    </>
  )
}