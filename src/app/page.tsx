import Animation from './components/home/animation'
import Intro from './components/home/intro'

export default function Home() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <Intro />
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Animation />
        </div>
      </div>
    </section>
  )
}
