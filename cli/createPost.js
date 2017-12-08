const fs = require('fs-extra')
const prompt = require('prompt')
const moment = require('moment')

prompt.message = ''
prompt.start()

prompt.get('title', function(err, res) {
  console.log(`The post '${res.title}' has been created!`)

  // Make the directory
  let date = moment().format('YYYY[-]MM[-]DD')
  let title = res.title.split(' ').join('-')
  let fileName = date + '---' + title
  let dir = `./src/pages/blog/${fileName}`
  fs.ensureDir(dir)

  // Make the new empty post
  let timeDate = new Date()
  let newPost = `---
title: '${res.title}'
date: '${timeDate.toJSON()}'
---
  `
  let postPath = `${dir}/index.md`
  fs.writeFile(postPath, newPost, function(err, fileContents) {
    if (err) throw err
  })
})
