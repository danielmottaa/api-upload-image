const Picture = require('../models/Picture')

exports.create = async (req, res) => {
  try {

    const { name } = req.body
    const file = req.file
    const picture = new Picture({
      name,
      file: file.path,
    })
    await picture.save(
      res.json({picture, msg: 'Imagem salva com sucesso!' })
    )
  } catch (error) {
    res.status(500).json({ msg: 'Erro ao salvar imagem.' })
  }
},
exports.findAll = async(req, res) => {
  try {
    
  } catch (error) {
    res.status(500).json({ msg: 'Erro ao buscar upload de imagem: ', error })
  }
}