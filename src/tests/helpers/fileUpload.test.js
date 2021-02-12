import cloudinary from 'cloudinary';

import { fileUpload } from "../../helpers/fileUpload";

cloudinary.config({ 
    cloud_name: 'dcnlp5ojh', 
    api_key: '621928362923965', 
    api_secret: '931Ad0qdb6KRrOxNOoBit2WHygI' 
  });

describe('Pruebas en fileUpload.js', () => {
    
    test('debe cargar un archivo y retornar el url', async () => {

        const resp = await fetch('https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png');
        const blob = await resp.blob();

        const file = new File([blob], 'foto.png');
        const url = await fileUpload(file);

        expect(typeof url).toBe('string');

        // Borrar imagen por id
        const segments = url.split('/');
        const imageId = segments[segments.length -1].replace('.png', '');

        await cloudinary.v2.api.delete_resources(imageId, {}, () => {});

    });

    test('debe retornar un error si la imagen es null', async () => {
        
        const file = new File([], 'foto.png');
        const url = await fileUpload(file);

        expect(url).toBe( null );

    });
    

});
