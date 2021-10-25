export function passwordValidator(password) {
  if (!password) return "Senha não pode estar vazia."
  if (password.length < 5) return 'Senha tem que ter pelo menos 5 caracteres.'
  return ''
}
