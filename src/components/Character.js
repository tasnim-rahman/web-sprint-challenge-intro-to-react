// Write your Character component here
import react from 'react'
import axios from 'axios'


const Character =  (props) => {

    console.log(props)
    return (
        <div>
            <p>Name:{}</p>
            <p>Gender:{}</p>
            <p>Height:{}</p>
            <p>Mass:{}</p>
            <p>BirthYear:{}</p>
            <p>Eyecolor:{}</p>
            <p>SkinColor:{}</p>
            <p>HairColor:{}</p>
        </div>

    );

}
export default Character;