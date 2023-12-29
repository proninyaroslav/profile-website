import "/styles/globals.scss"

const init = () => {
  setCopyrightDate()
}

document.addEventListener("DOMContentLoaded", init)

const setCopyrightDate = () => {
  let time = document.getElementById("copyright-date")
  time.innerText = new Date().getFullYear()
}
