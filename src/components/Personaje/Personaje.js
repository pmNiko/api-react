import React from 'react';
const moment = require('moment');

const Personaje = ({id,name, image, gender, species, created, status}) => {
    return (  
        <div className="col-4 mt-3">                
            <div className="card">
                <img className="card-img-top" 
                    src= {image}
                    alt={name}
                />
                <div className="card-body">
                    <h4 className="card-title"><a>{name}</a></h4>
                    <p className="card-text">
                        {gender} - {species} - 
                        {status === 'Alive' ? ' vivo' : ' muerto'}
                    </p>
                    <div className="card-footer text-muted text-center mt-4">
                        Fecha de nacimiento: {" "}
                        {moment(created).format("DD-MM-YYYY")}
                    </div>
                    <a href="#" className="btn btn-primary btn-block">Click</a>
                </div>
            </div>
        </div>
    );
}
 
export default Personaje;