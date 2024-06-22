// import Picture1 from './components/Picture1.png';
// import Picture2 from './components/Picture2.png';
// import Picture3 from './components/Picture3.png';

const data = [
  {
    id: 1,
    img: require('./Picture1.png'),
    stats: {
      rating: '5.0',
      reviewCount: 6
    },
    
    location: 'Online',
    title: 'Life lessons with Katie Zaferes',
    price: 136,
    description: 'Join Olympic triathlete Katie Zaferes for an in-depth series of life lessons. Learn how she overcame challenges, stayed motivated, and achieved success in her career. This session will provide valuable insights and practical advice for anyone looking to improve their personal and professional life.',
    openSpots: 3
  },
  {
    id: 2,
    img: require('./Picture2.png'),
    stats: {
      rating: '5.0',
      reviewCount: 3
    },
    
    location: 'Online',
    title: 'Learn wedding photography',
    price: 125,
    description: 'Master the art of wedding photography with guidance from a seasoned professional. This comprehensive course covers everything from camera settings and composition to lighting techniques and post-processing. Perfect for aspiring photographers looking to break into the wedding industry or improve their skills.',
    openSpots: 5
  },
  {
    id: 3,
    img: require('./Picture3.png'),
    stats: {
      rating: '4.2',
      reviewCount: 2
    },
  
    location: 'Online',
    title: 'Group Mountain Biking',
    price: 50,
    description: 'Experience the thrill of mountain biking with a group of like-minded enthusiasts. This adventure takes you through scenic trails and challenging terrains, providing an exhilarating outdoor experience. Suitable for riders of all levels, this session promises excitement, camaraderie, and plenty of fresh air.',
    openSpots: 0
  },
 
  
  
  // Add more items as needed
];

export default data;
