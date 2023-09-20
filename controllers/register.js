const User = require('../models/user')

const register = async (req, res) => {
  try {
    const { email, password } = req.body

    // Проверка наличия пользователя с таким email
    const existingUser = await User.findOne({ email })

    if (existingUser) {
      return res
        .status(400)
        .json({ message: 'Пользователь с таким email уже существует' })
    }

    // Создание нового пользователя
    const newUser = await User.create({ email, password })

    res.status(201).json({ message: 'Регистрация успешна', user: newUser })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Ошибка сервера' })
  }
}
module.exports = register
