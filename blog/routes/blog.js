const express = require('express')
const path = require('path')
const b = require('../data/blogs')

const router = express.Router()

router.get('/', (req,res) => {
    // res.sendFile(path.join(__dirname, '../Views/index.html'))
    res.render('../home');
})

router.get('/blog', (req,res) => {
    // b.forEach(e => {
    //     console.log(e.title)
    // });
    res.sendFile(path.join(__dirname, '../template/blogHome.html'))
})

router.get('/blogpost/:slug', (req,res) => {
    // console.log(req.params.slug)     //This is used to debug
    myBlog = b.filter((e) => {
        return e.slug == req.params.slug
    })
    console.log(myBlog)
    res.sendFile(path.join(__dirname, '../template/blogPage.html'))
})

module.exports = router