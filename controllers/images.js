import Image from '../models/image';

export const index = (req, res, next) => {

  Image.find().lean().exec((err, images) => res.json(

    { images: images.map(image => ({
      ...image,
    }))}
  ));
};
