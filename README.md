# marty-tech-news
Simple webpage that will allow you to post the latest tech news in a CMS-style page

## Preview

- [Click here for a Video demo!](https://www.youtube.com/watch?v=ND7LVlr3UkE)
- [Click here for a preview image!](https://user-images.githubusercontent.com/98830462/169703058-51855c26-7ee2-4233-b43c-ec24e0b23b46.PNG)
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

- Forked from [Coding Bootcamp](https://github.com/coding-boot-camp)
- Uses [Node.js](https://nodejs.org/en/)
- [sequelize](https://sequelize.org/)
- [mysql2](https://dev.mysql.com/doc/)
- [express](https://expressjs.com/)
- [dontenv](https://www.npmjs.com/package/dotenv)
