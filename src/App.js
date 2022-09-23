import React, { useState, useEffect } from 'react';
import { ImArrowRight2, ImArrowLeft2 } from 'react-icons/im';
import SliderTitle from './SliderTitle';
import Slide from './Slide';
import people from './people';

function App() {
  // Index used for the slider
  const [index, setIndex] = useState(0);
  
  // Enable continous cycling through the slides in both directions
  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index]);

  // Automate sliding
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <section className='slider'>

      {/* Component which displays the slider title */}
      <SliderTitle sliderTitle='Testimonial slider' />

      <div className='slider-center'>
        
        {/* Loop through the items in the people array */}
        {people.map((person, personIndex) => {

          /* Get the data from each person object in the array */
          const {id, image, name, title, quote} = person;

          let position = 'nextSlide';
          
          /* Display the current slide */
          if (personIndex === index) {
            position = 'activeSlide';
          }
          
          /* Hide the previously active slide */
          if (personIndex === index-1 || (index === 0 && personIndex === people.length - 1)) {
            position = 'lastSlide';
          }

          /* Return the component which displays the slide */
          return (
            <Slide
              position={position}
              key={id.toString()}
              image={image}
              name={name}
              title={title}
              quote={quote}
            />
          );
        
        })}
        
        {/* Slider buttons */}
        <button className='prev' onClick={() => setIndex(index-1)}>
          <ImArrowLeft2 />
        </button>
        <button className='next' onClick={() => setIndex(index+1)}>
          <ImArrowRight2 />
        </button>
      
      </div>
    
    </section>
  );
}

export default App;