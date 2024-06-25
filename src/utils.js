export const setCopyrightDate = () => {
  let time = document.getElementById("copyright-date")
  time.innerText = new Date().getFullYear()
}
