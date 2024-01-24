import { MenuButton } from "../MenuButton"

function HeaderSection() {

  const menuList = [
    {
      id: crypto.randomUUID(),
      label: "about me",
      dest: "about-me-section"
    },
    {
      id: crypto.randomUUID(),
      label: "experience",
      dest: "experience-section"
    },
    {
      id: crypto.randomUUID(),
      label: "Works",
      dest: "work-section"
    },
    {
      id: crypto.randomUUID(),
      label: "Contact me",
      dest: "contact-section"
    },
  ]

  return (
    <nav className="shadow-lg p-4 mx-auto max-w-screen-xl fixed top-0 w-full z-10 bg-[#242424]">
      <ul className="flex justify-end gap-x-4">
        {menuList.length > 0 ?
          menuList.map((menu) => (
            <MenuButton key={menu.id} {...menu} />
          ))
        : null}
      </ul>
    </nav>
  )
}

export { HeaderSection }
