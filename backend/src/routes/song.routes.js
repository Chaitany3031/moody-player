const express = require('express')
const multer = require('multer')
const uploadFile = require('../service/storage.service')
const router = express.Router()
const songModel = require('../models/song.model')


const upload = multer({storage:multer.memoryStorage()})


router.post('/songs',upload.single("audio"),async (req,res)=>{
  // console.log(req.body)
  // console.log(req.file)
  const fileData = await uploadFile(req.file)
  // console.log(req.fileData)

  const song = await songModel.create({
    title:req.body.title,
    audio:fileData.url,
    artist:req.body.artist,
    mood:req.body.mood
  })

  res.status(201).json({
    message:"Song created sucessfully",
    song:song
  })
})

router.get('/songs',async (req,res)=>{
  const {mood} = req.query
  const song = await songModel.find({
    mood:mood
  })

  res.status(200).json({
    message:"Songs fetched",
    song:song
  })
})

module.exports=router