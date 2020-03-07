# resume

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
npm install --s vue-simple-markdown
npm install --s bootstrap
npm install --s devicons
npm install --s font-awesome
```
I think --s, -s, & --save-dev are all the same. I also think that by doing that in the project, it saves it in a way that makes it so you won't ever have to do it when cloning this project. :facepalm: :shrug:

### Amplify
You can search for AWS Amplify in the AWS Console. From there you can link your GitHub repository and it will add a webhook for you so that everytime you push to your repo, it will auto deploy your website. You can set up different branches for different environments of your site. It will auto install and run the npm commands that you setup for it. 

These are some other commands that could help you connect to Amplify for more features but I ended up not needed them.
```
"amplify status" will show you what you've added already and if it's locally configured or deployed
"amplify <category> add" will allow you to add features like user login or a backend API
"amplify push" will build all your local backend resources and provision it in the cloud
"amplify publish" will build all your local backend and frontend resources (if you have hosting category added) and provision it in the cloud
```

### Thanks

Special thanks to Jesper Bang for this template https://github.com/JesperBang/resume