const Picture = require('../models/Picture')

exports.create = async (req, res) => {
  try {
    res.json('Deu certo')
  } catch (error) {
    console.log('Erro ao fazer upload da imagem: ', error)
  }
}