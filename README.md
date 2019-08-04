# portfolio

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Dependencies
```
npm install --s axios
npm install -s vue-simple-markdown
npm install --s bulma
npm install --save-dev node-sass
npm install --save-dev sass-loader
```
I think --s, -s, & --save-dev are all the same. I also think that by doing that in the project, it saves it in a way that makes it so you won't ever have to do it when cloning this project. :facepalm: :shrug:

### Bulma Overide
See [Configuration Reference](https://versions.bulma.io/0.7.1/documentation/overview/customize/).

### Amplify
```
"amplify status" will show you what you've added already and if it's locally configured or deployed
"amplify <category> add" will allow you to add features like user login or a backend API
"amplify push" will build all your local backend resources and provision it in the cloud
"amplify publish" will build all your local backend and frontend resources (if you have hosting category added) and provision it in the cloud
```