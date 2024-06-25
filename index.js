import { setCopyrightDate } from "/src/utils"
import "/styles/globals.scss"

const init = () => {
  setCopyrightDate()
}

document.addEventListener("DOMContentLoaded", init)
