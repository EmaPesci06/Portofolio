import ferrari from '../assets/img/ferrari.webp'

export default function Projects () {
  return (
    <article className='w-9/12 mx-auto'>
      <h2 className='text-4xl py-6 font-bold'>Proyectos</h2>
      <section className='grid justify-center sm:grid-cols-2 gap-16 mt-3'>
        <div className='flex flex-col items-center '>
          <div className='h-min overflow-hidden rounded-md'>
            <img src={ferrari} alt='ferrari' className='w-80 h-56 hover:scale-125 transition-all duration-500 cursor-pointer' />
          </div>
          <h3 className='font-bold'>Ferrari</h3>
          <p className='text-center mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum soluta consequuntur at illum sint hic molestias vel quas. Velit delectus eligendi nemo repudiandae nam eaque libero! Dicta delectus debitis cum?</p>
        </div>
        <div className='flex flex-col items-center'>
          <div className='h-min overflow-hidden rounded-md'>
            <img src={ferrari} alt='ferrari' className='w-80 h-56 hover:scale-125 transition-all duration-500 cursor-pointer' />
          </div>
          <h3 className='font-bold'>Ferrari</h3>
          <p className='text-center mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum soluta consequuntur at illum sint hic molestias vel quas. Velit delectus eligendi nemo repudiandae nam eaque libero! Dicta delectus debitis cum?</p>
        </div>
        <div className='flex flex-col items-center'>
          <div className='h-min overflow-hidden rounded-md'>
            <img src={ferrari} alt='ferrari' className='w-80 h-56 hover:scale-125 transition-all duration-500 cursor-pointer' />
          </div>
          <h3 className='font-bold'>Lujema-Carpinteria</h3>
          <p className='text-center mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum soluta consequuntur at illum sint hic molestias vel quas. Velit delectus eligendi nemo repudiandae nam eaque libero! Dicta delectus debitis cum?</p>
        </div>
        <div className='flex flex-col items-center'>
          <div className='h-min overflow-hidden rounded-md'>
            <img src={ferrari} alt='ferrari' className='w-80 h-56 hover:scale-125 transition-all duration-500 cursor-pointer' />
          </div>
          <h3 className='font-bold'>Rod-Mar</h3>
          <p className='text-center mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum soluta consequuntur at illum sint hic molestias vel quas. Velit delectus eligendi nemo repudiandae nam eaque libero! Dicta delectus debitis cum?</p>
        </div>
      </section>
    </article>
  )
}
