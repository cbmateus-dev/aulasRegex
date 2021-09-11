
  const senha = 'Zatarah12#'
  const regex = RegExp(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%"^&*]).{6,20}$/gm)

  console.log(regex.test(senha))
  console.log(senha.match(regex))

 