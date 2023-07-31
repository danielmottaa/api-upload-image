const Picture = require('../models/Picture')
const fs = require('fs')
exports.create = async (req, res) => {
  try {
    const { name } = req.body
    const file = req.file
    const picture = new Picture({
      name,
      src: file.path,
    })
    await picture.save()
    res.json({ picture, msg: 'Imagem salva com sucesso!' })
  } catch (error) {
    res.status(500).json({ msg: 'Erro ao salvar imagem.' })
  }
},
exports.findAll = async(req, res) => {
  try {
    const picture = await Picture.find()
    res.json(picture)
  } catch (error) {
    res.status(500).json({ msg: 'Erro ao buscar upload de imagem: ', error })
  }
},
exports.remove = async (req, res) => {
  try {
    const picture = await Picture.findById(req.params.id);
    if (!picture) {
      return res.status(404).json({ message: "Imagem não encontrada" });
    }
    fs.unlinkSync(picture.src);
    await picture.remove();
    res.json({ message: "Imagem removida com sucesso" });
  } catch (err) {
    res.status(500).json({ message: "Erro ao remover a imagem" });
  }
};
