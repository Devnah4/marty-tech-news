# marty-tech-news
Simple webpage that will allow you to post the latest tech news in a CMS-style page

## Preview

- [Click here for a Video demo!](https://user-images.githubusercontent.com/98830462/170813050-7492db1f-dde1-4d09-8de6-a9f2dd6ceeca.mp4)
- [Click here for a preview image!](https://user-images.githubusercontent.com/98830462/170813053-488849e0-6f47-4f31-9d03-d72fea134f26.PNG)
- [View a Live Demo!](https://marty-tech-news-app.herokuapp.com/)
***

## Install

```
npm i
```

## How to Use

Step 1: (requires mysql install)
```
mysql -u root -p
```

Step 2: create the Database
```
source db/schema.sql;
```

Step 3: Fill in seed info
```
node seeds/index
```

step 4: 
```
node server
```

I recommend [Insomnia](https://insomnia.rest/) for testing and usage
***

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
***

## Made with

- [Node.js](https://nodejs.org/en/)
- [sequelize](https://sequelize.org/)
- [mysql2](https://dev.mysql.com/doc/)
- [express](https://expressjs.com/)
- [dontenv](https://www.npmjs.com/package/dotenv)
- [Handlebars.js](https://handlebarsjs.com/)
