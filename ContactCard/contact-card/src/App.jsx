import React from 'react';
import Contact from './components/Contact.jsx';
import whiskerson from './images/mr-whiskerson.png';
import fluffyKins from './images/fluffykins.png';
import pumpkin from './images/pumpkin.png';
import felix from './images/felix.png'

const App = () => {
  return (
    <div className="contacts">
      <Contact
        img={whiskerson}
        name="Mr. Whiskerson"
        phone="(238) 444-3334"
        email="mr.whiskaz@catnip.meowd"
      />
      <Contact
        img={fluffyKins}
        name="Fluffykins"
        phone="(300) 444-3456"
        email="fluffdituff@mama.caw"
      />
      <Contact
        img={pumpkin}
        name="Pumpkin Bumpkin"
        phone="(330) 243-3356"
        email="pumpkin@mama.caw"
      />
      <Contact
        img={felix}
        name="Felix"
        phone="(212) 555-4567"
        email="thecat@hotmail.com"
      />
    </div>
  );
};

export default App;
