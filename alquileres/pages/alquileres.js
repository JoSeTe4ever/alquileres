import React from 'react'

function Alquileres() {
    return (
        <div>
            lista de alquileres
        </div>
    )
}

export default Alquileres

export async function getStaticProps() {
    const req = await fetch("http://localhost:3000/alquileres.json");
    const data =  req.json();
    return {
        props : {data}
    }
}