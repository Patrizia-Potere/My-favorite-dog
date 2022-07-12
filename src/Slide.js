import React, {useState,useEffect} from "react";
import { Slide } from './react-slideshow-image/lib';
import './react-slideshow-image/dist/styles.css';
import axios from 'axios';

const custom = {
    duration:3000,
    indicators: () => <span className='indicator'></span>,
    prevArrow: <div className='prev'>&#10094;</div>,
    nextArrow: <div className='next'>&#10095;</div>
}

const Slideshow = ({apibreed}) => {
const [dogImage,setDogImage] = useState([]);
const getData = async (dog) => {
  const response = await axios.get(`https://dog.ceo/api/breed/${dog}/images/random/10`)
  console.log(response)
  setDogImage(response.data.message)

}

useEffect(()=> {
  getData(apibreed)
},[apibreed]);

    return (
      <div className='each-slide'>
        <Slide {...custom}>
         {dogImage.map((slide, index)=> (
              <img key={index} className='dog-img' src={slide} alt={'dog'}/>
          ))} 
        </Slide>
      </div>
    )
}

export default Slideshow;