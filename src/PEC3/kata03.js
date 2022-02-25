export default function suma_de_elementos_positivos(array) {
  let res = 0
  if (array.length !== 0) {
    array.forEach((elem) => {
      if (elem > 0) {
        res += elem
      }
    })
  }
  return res
}
