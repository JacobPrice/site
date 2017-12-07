---
title: 'Creating a Node CLI for this blog'
date: '2017-12-06T23:06:25.808Z'
---

Most developers are what I call 'ambitiously lazy', including myself... That is
not a derogatory remark, but rather a side effect of power, great power.

> With great power comes great responsibility.
>
> -- Spiderman
>
> Saturday - Nov 10,2012(2:00 am)

The power that developers have is that they can utilize the wonderful world of
programming to accomplish a goal. Now, this can be a great thing, but can also
lead to some serious rabbit holes. We’ve all heard the stories of someone taking
hours to solve something that routinely takes them like 2 minutes. My particular
case that I’m going to share today is not really that bad because it didn’t take
me a substantial period of time, but I am guilty of spending a little to much
time on issues that were less than minor.

The benefits of the automation should truly be measured to ensure that time is
not unnecessarily allocated to fixing something that isn’t an issue.

Back to today’s post.

Later I will write up more about the technologies my site uses, you can view the
source here if you’d like. Basically, all you need to know to understand why I
did this, is that I write my posts in markdown. I have it set up so that I am
able to utilize frontmatter to label my post with a title and give a timestamp.
These posts live in a folder structure like so:

```
├── blog
   ├── Creating-a-Node-CLI-for-this-blog
   │   └── index.md
   └── day-0
       └── index.md
```

The index.md file has the front matter I mentioned which looks like this.

```markdown
---
title: 'Creating a Node CLI for this blog'
date: '2017-12-06T23:06:25.808Z'
---

Most developers are what I call 'ambitiously lazy', including myself…
```

As you can probably guess, I’m not typing out that date. I can read binary if I
really try (I’m a nerd), but nope not writing that date. I decided that I would
start a CLI for my site and being able to create a new post seemed like the
perfect place to start.

Really I didn’t need much. I just wanted to be able to create a post by running
`npm run create-post` -> type the title and then be done.

I accomplished just that by doing the following

```jsx
const fs = require('fs-extra')
const prompt = require('prompt')

prompt.message = ''
prompt.start()

prompt.get('title', function(err, res) {
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
    if (err) throw err
  })
})
```

That resulted in the following process.

![](https://media.giphy.com/media/3oxHQuntMljWKIxBeg/giphy.gif)

It really wouldn’t be difficult to create a new folder and file for each post,
but I’m a developer and I make things a little bit easier when I can.
