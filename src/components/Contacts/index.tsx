import { ReactElement } from "react"

type ContactCardProps = {
  label: string
  children: ReactElement
}
function ContactCard({label, children}: ContactCardProps) {
  return (
    <div className="bg-slate-700 rounded-lg p-4 mb-4 grid grid-cols-[minmax(100px,150px)_1fr]">
      <p className="mr-6">{label}</p>
      {children}
    </div>
  )
}

function ContactSection() {
  const contact1 = {
    label: "Email"
  }
  const contact2 = {
    label: "LinkedIn"
  }
  const contact3 = {
    label: "GitHub"
  }
  return (
    <section className="screen-section" id="contact-section">
      <h2 className="section-title">
        Contact
      </h2>
      <ContactCard {...contact1}>
        <a href="" target="_blank">chayapol.cha@gmail.com</a>
      </ContactCard>
      <ContactCard {...contact2}>
        <a href="" target="_blank">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quos dolore expedita minus cum, nisi nostrum. Vitae enim vel aliquam.</a>
      </ContactCard>
      <ContactCard {...contact3}>
        <a href="" target="_blank">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quos dolore expedita minus cum, nisi nostrum. Vitae enim vel aliquam.</a>
      </ContactCard>

    </section>
  )
}

export { ContactSection }