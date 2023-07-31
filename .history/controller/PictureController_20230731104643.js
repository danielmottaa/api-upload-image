const Picture = require('../models/Picture')

exports.create = async (req, res) => {
  try {
    res.json('Deu certo')
  } catch (error) {
    res.status(500).json({ msg: 'Erro ao salvar imagem.' })
  }
}