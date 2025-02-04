interface CardProjectProps {
  title: string;
  description: string;
  image: string;
  url: string;
}

export function CardProject({ title, description, image, url }: CardProjectProps) {
  return (
    <a href={url} target="_blank" rel="noreferrer" className="flex w-full p-4  rounded-md hover:shadow-lg transition-shadow duration-300">
      <div className='w-96 h-96 flex-shrink-0 overflow-hidden rounded-md'>
        <img src={image} alt={title} className='w-full h-full object-cover transition-transform duration-300 hover:scale-105 rounded-3xl' />
      </div>
      <div className='ml-4 flex flex-col justify-center'>
        <h2 className='font-bold text-2xl'>{title}</h2>
        <p className='mt-2 text-lg'>{description}</p>
      </div>
    </a>
  );
}