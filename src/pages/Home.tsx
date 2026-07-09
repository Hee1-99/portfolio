import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Focus from '../sections/Focus'
import ProjectsGrid from '../sections/ProjectsGrid'
import Skills from '../sections/Skills'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Focus />
        <ProjectsGrid />
        <Skills />
      </main>
      <Footer />
    </>
  )
}
