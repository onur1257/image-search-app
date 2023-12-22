import ImagesItem from './imagesitem';


function ImagesList( {imagesPlaceholder} ){
    return (
    <div className='imageList'>
       { imagesPlaceholder.map((image,index)=> {
  return  <ImagesItem key={index} image={image} />;
       } )}
    </div>
    );
};
export default ImagesList;