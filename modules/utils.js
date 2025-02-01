const calculadora = () =>{
  let subTotal = 0
  const sumar = (num) =>{
      subTotal += num
  }

  const restar = (num) =>{
      subTotal += num
  }

  const multiplicar = (num) =>{
      subTotal *=  num
  }

  const dividir = (num) =>{
      subTotal /= num
  }

  const total = () =>{
      return subTotal
  }

  return {
      sumar,
      restar,
      multiplicar,
      dividir,
      total,
  }
}

export default calculadora

export const defaultValue = 12
export const test = 'message'
export const suma = (a, b) => a + b
// 1 export default
// 2 export

