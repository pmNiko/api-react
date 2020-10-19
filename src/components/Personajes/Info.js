import React from 'react';

const Info = ({count, next}) => {
    return (  
       <div key={count} className="jumbotron card card-image mt-1">
           <p>Cantidad de personajes: {count}</p>
           <a href="/#">Pagina siguiente: {next}</a>
       </div>
    );
}
 
export default Info;