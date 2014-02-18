### What is Notes
Notes is a workflow tool for managing my personal notes. Notes are stored in Markdown and accessed via the Web.

### Why Notes
I take notes on my computer. In the past if I want to carry my notes to a meeting I had to print them, write them on paper, or just not bring them.

I made Notes so I had an easy way to keep my notes with me. Now I just run notes on my computer and open the browser on my iPad and have access to my notes wherever I have the internet.

### Getting started

Notes runs on [NodeJS](http://nodejs.org/download/). If you don't already have it installed do that first.

If you don't already have grunt-cli installed globally run:
```npm install -g grunt-cli```

Install **Notes** dependencies:
```npm install```

Make your notes directory:
```mkdir notes```

Add a markdown file to the ```./notes``` directory:
```echo "# I am a note" > notes/sample.md```.

Run grunt:
```grunt```

Open your browser to ```localhost:9001/notes/``` and click on ```sample.html```

Now if you make changes to ```sample.md``` you can see the changes in your browser automatically.