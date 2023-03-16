import Image from 'next/image'
import ContactForm from '@/components/components/Forms/ContactForm'
//import styles from './contact.module.css'

export const metadata = {
  title: 'Contact Us',
  description: 'Contact Us description',
}

const AboutPage = () => {
  const args = { title: "Write us a message" };
  return (
      <>
        <section className="flex flex-col justify-between items-center py-[6rem] px-8 max-w-7xl mx-auto">
            <ContactForm title="Kr neki"/>
        </section>
      </>
  )
}

export default AboutPage;