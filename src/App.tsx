import Contact from './components/Contact'
import { Header } from './components/Header'
import Projects from './components/Projects'

function App () {
  return (
    <>
      <Header />

      <main className='flex flex-col bg-zinc-300 dark:bg-zinc-900 dark:text-white py-5'>
        <Projects />

        <Contact />
      </main>

      <footer>
        <p className='text-center py-5 bg-slate-100 dark:bg-slate-700 dark:text-white'> © Emanuel Pesci - 2024</p>
      </footer>

    </>
  )
}

export default App
