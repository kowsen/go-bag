# Kyle's Go-Bag

I found myself writing a lot of boilerplate for a responsive-enough Svelte app a few times, so I decided to pull it out into a template.

This template gives you five things on top of a Svelte project:

- A centered column for your content that switches from resizing to scaling at a specified breakpoint so my page can function well enough on all screen sizes without having to actually design a layout for 320px width.
- Automatically adjusts this column's positioning when a scrollbar shows up so there isn't an abrupt layout shift if the content's length increases.
- An "npm run fix" command that runs eslint, stylelint, and prettier. Also has pre-commit hooks to check that these have no errors before pushing so I don't get too lazy.
- A really basic loading spinner that I feel like I'm always building.
- Sets up svelte-routing

If you stumble upon this and wanna use it, you can use it to set up your project with this command:

```
npx degit kowsen/go-bag#main my-project
```

Just make sure you either disable husky or set up your project in a git repository or you'll get an error when you run npm install.
