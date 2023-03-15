import HeaderSection from '../components/Headers/HeaderSection/HeaderSection'
import ContactForm from '../components/Forms/ContactForm'
import Popup from '../components/Popups/Popup'

export const metadata = {
  title: 'Home Is Where The Heart Is',
  description: 'Home Is Where The Heart Is but the heart is in the head',
}

export default function HomePage() {
  return (
    <>
      <HeaderSection />
      <section>
        <Popup />
      </section>
    </>
    
  )
}
