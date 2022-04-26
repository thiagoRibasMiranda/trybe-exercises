const generateErrorMessage = (fild) => {
  if(!fild) {
    return {
    error: true,
    message: "O campo 'password' deve ter pelo menos 6 caracteres"
    }
  }
  return {
    error: false,
    message: `O campo ${fild} deve ter pelo menos 6 caracteres`
  }

}

const isValid = (firstName,lastName, email, password) => {
  if (!firstName || typeof firstName !== 'string') return generateErrorMessage('firstName');
  if (!lastName || typeof lastName !== 'string') return generateErrorMessage('lastName');
  if (!email || typeof email !== 'string') return generateErrorMessage('email');
  if (!password || typeof password !== 'string' || password.length <6 ) return generateErrorMessage('password');

  return generateErrorMessage();
};

module.exports = {
  isValid,
}