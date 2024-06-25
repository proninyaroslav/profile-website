import { setCopyrightDate } from "/src/utils"
import "/styles/error-page.scss"
import "/styles/globals.scss"

const init = () => {
  setCopyrightDate()
}

document.addEventListener("DOMContentLoaded", init)
