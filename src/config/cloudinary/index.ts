import {envConfig} from '../../env';
import {v2} from 'cloudinary';

v2.config({
    cloud_name: envConfig.get('CLOUDINARY_NAME'),
    api_key: envConfig.get('CLOUDINARY_API_KEY'),
    api_secret: envConfig.get('CLOUDINARY_API_SECRET'),
    secure: true
});

export const cloudinary = v2;
