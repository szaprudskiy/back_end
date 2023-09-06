const User = require('../models/user')

const register = async (req, res) => {
  const { email, password } = req.body

  try {
    // Проверьте, существует ли пользователь с указанным email
    const existingUser = await User.findOne({ email })

    if (existingUser) {
      res
        .status(400)
        .json({ message: 'Пользователь с таким email уже существует' })
    } else {
      // Создайте нового пользователя
      const newUser = new User({ email, password })

      // Сохраните нового пользователя в базе данных
      await newUser.save()

      res.status(201).json({ message: 'Новый пользователь успешно создан' })
    }
  } catch (error) {
    res.status(500).json({ message: 'Ошибка сервера' })
  }
}
module.exports = register
