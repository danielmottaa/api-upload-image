const Picture = require('../models/Picture')

exports.create = async (req, res) => {
  try {
  
    const { name } = req.body
    const file = req.file
    const picture = new Picture({
      name,
      file: file.path,
    })

    
  } catch (error) {
    res.status(500).json({ msg: 'Erro ao salvar imagem.' })
  }
}