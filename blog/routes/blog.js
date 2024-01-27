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
    // res.sendFile(path.join(__dirname, '../template/blogHome.html'))
    res.render('../Views/blogHome', {
        blogs: blogs
    });
})

router.get('/blogpost/:slug', (req,res) => {
    // console.log(req.params.slug)     //This is used to debug
    myBlog = b.filter((e) => {
        return e.slug == req.params.slug
    })
    console.log(myBlog);
    res.render('../Views/blogPage', {
        title: myBlog[0].title,
        content: myBlog[0].content
    });
    // res.sendFile(path.join(__dirname, '../template/blogPage.html'))
})

module.exports = router