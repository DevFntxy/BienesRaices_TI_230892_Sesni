import bcrypt from 'bcrypt'
const usuarios = [
    {
        nombre: 'Esperanza',
        email: '',
        fechaNacimiento: '',
        confirmado: 1,
        password: bcrypt.hashSync('password', 10)
    }
]

export default usuarios