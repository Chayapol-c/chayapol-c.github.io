type MenuButtonProps = {
  label: string
  dest: string
}

function MenuButton({label, dest}: MenuButtonProps) {
  const navigateTo = () => {
    const destEl = document.getElementById(dest)
    if (destEl) {
      destEl.scrollIntoView({behavior: "smooth"})
    }
  }
  return (
    <li>
      <button onClick={navigateTo} className="bg-transparent p-0 outline-none hover:underline hover:underline-offset-8 capitalize font-bold text-lg tracking-wider">
        {label}
      </button>
    </li>
  )
}

export {MenuButton}