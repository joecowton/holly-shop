import mongoose from 'mongoose';
import Image from './models/image';

const images = [
  {
    path: 'https://cdn.shopify.com/s/files/1/0197/8160/products/santa-reindeer-christmas-crackers-meri_800x.jpg',
    name: 'crackers',
  },
  {
    path: 'https://cdn.shopify.com/s/files/1/0197/8160/products/gold-honeycomb-ball-decorations-christmas_800x.jpg?v=1478798343',
    name: 'decorations',
  },
]

mongoose.connect('mongodb://localhost/images', {
  useMongoClient: true,
});

images.map(data => {
  const image = new Image(data);

  image.save();
});
