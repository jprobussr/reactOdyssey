// src/data.js
import mustang from './assets/carImages/car1.jpg';
import supra from './assets/carImages/car2.jpg';
import skyline from './assets/carImages/car3.jpg';


export default [
  {
    id: 1,
    img: {
      src: mustang,
      alt: '1967 Ford Mustang Fastback',
    },
    title: '1967 Ford Mustang',
    country: 'USA',
    carInfoLink: 'https://en.wikipedia.org/wiki/Ford_Mustang',
    dates: '1967 - Classic Era',
    text: 'The 1967 Ford Mustang Fastback is an American icon known for its aggressive styling, V8 power, and cultural impact. It remains a highly collectible classic muscle car.',
  },
  {
    id: 2,
    img: {
      src: supra,
      alt: 'Toyota Supra Mk4',
    },
    title: 'Toyota Supra Mk4',
    country: 'Japan',
    carInfoLink: 'https://en.wikipedia.org/wiki/Toyota_Supra',
    dates: '1993 - 2002',
    text: 'The fourth-generation Toyota Supra gained fame for its 2JZ engine, tunability, and starring role in car culture. A JDM legend revered worldwide.',
  },
  {
    id: 3,
    img: {
      src: skyline,
      alt: 'Nissan Skyline GT-R R34',
    },
    title: 'Nissan Skyline GT-R R34',
    country: 'Japan',
    carInfoLink: 'https://en.wikipedia.org/wiki/Nissan_Skyline_GT-R',
    dates: '1999 - 2002',
    text: 'The R34 Skyline GT-R is one of the most iconic JDM sports cars. Advanced technology, racing heritage, and pop culture appearances make it unforgettable.',
  },
];
