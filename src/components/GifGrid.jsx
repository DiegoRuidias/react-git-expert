import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category, onDeleteCategory }) => {
  const { images, isLoading } = useFetchGifs(category);
  const onClick = (event) => {
    onDeleteCategory(category);
  };

  return (
    <>
      <h1>{category}</h1>
      <button onClick={onClick}>Delete</button>
      {isLoading && <h2>Cargando...</h2>}

      <div className="card-grid">
        {images.map((image) => (
          <GifGridItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};
