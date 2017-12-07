const fs = require('fs-extra')
const prompt = require('prompt')

prompt.message = ''
prompt.start()

prompt.get('title', function (err, res) {
  console.log(`The post '${res.title}' has been created!`)

  // Make the directory
  let title = res.title.split(' ').join('-')
  let dir = `./src/pages/blog/${title}`
  fs.ensureDir(dir)

  // Make the new empty post
  let now = new Date()
  let newPost = `---
title: '${res.title}'
date: '${now.toJSON()}'
---
  `
  let postPath = `${dir}/index.md`
  fs.writeFile(postPath, newPost, function(err, fileContents) {
    if (err) throw err;
  })
})
