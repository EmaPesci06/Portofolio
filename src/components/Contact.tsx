export default function Contact () {
  return (
    <article className='w-9/12 mx-auto  flex flex-col align-middle py-8'>
      <h2 className='text-4xl py-6 font-bold'>Contacto</h2>
      <form action=''>
        <div className='flex flex-col gap-4 align-middle'>
          <div className='flex flex-col'>
            <label htmlFor='name'>Nombre</label>
            <input type='text' id='name' className='border-2 border-black dark:border-white rounded-md p-1 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white' />
          </div>
          <div className='flex flex-col'>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' className='border-2 border-black dark:border-white rounded-md p-1 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white' />
          </div>
          <div className='flex flex-col'>
            <label htmlFor='message'>Mensaje</label>
            <textarea id='message' className='border-2 border-black dark:border-white rounded-md p-1 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white resize-none' />
          </div>
          <button type='submit' className='bg-slate-100 dark:bg-slate-700 dark:text-white py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white'>Enviar</button>
        </div>
      </form>
    </article>
  )
}
