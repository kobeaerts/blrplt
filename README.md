# blrplt


## Javascript

Write ES6+ or React Javascript and get it linted with the AirBnb eslint config.


## Styles

All your styles get autoprefixed and sass compiled.
It even has some lovely opinionated stylelint config


## Getting started

1. Create an entrypoint in `config/entrypoints.js`
2. Create the entrypoint file in `bundles`
3. Import some `.scss/.js` files from the `resources` folder
4. `yarn run dev` / `npm run dev`
5. Your entrypoint files will be compiled to `public/resources`
6. Reference your generated `[bundle].js` and `[bundle].css` files in your html files in the public folder
7. Visit your hotreloading site at `localhost:8080`
8. run `yarn run build` or `npm run build` to get your optized css or Javascript files.
