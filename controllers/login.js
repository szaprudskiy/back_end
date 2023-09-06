const User = require('../models/user')

const login = async (req, res) => {
  const { email, password } = req.body

  try {
    // Проверьте, существует ли пользователь с указанным email и паролем
    const user = await User.findOne({ email, password })

    if (user) {
      // Пользователь найден, отправьте сообщение об успешном входе
      res.status(200).json({ message: 'Успешный вход' })
    } else {
      // Пользователь не найден, отправьте сообщение о неудачном входе
      res.status(401).json({ message: 'Неверные учетные данные' })
    }
  } catch (error) {
    // Ошибка при поиске пользователя
    res.status(500).json({ message: 'Ошибка сервера' })
  }
}
module.exports = login
