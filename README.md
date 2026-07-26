# Full Stack Blog App
MERN stack blog application with the following features:
- Account creation (using Clerk webhooks)
- Database integration (using MongoDB Atlas)
- Infinite scrolling
- Post creation
  - Categories
  - Images and videos (using ImageKit)
- Post saving
- Admin account functionalities

Following [this]([https://](https://youtu.be/Pfy3q6PbbRA?si=37zJlGS-BmVxheMI&t=21423)) tutorial

Startup commands:
```cmd
cd client
npm run dev
```
```cmd
cd backend
node --env-file .env --watch index.js
```
```cmd
cd backend
ngrok http http://localhost:3000
```

Built using:
- Clerk
- ImageKit
- MongoDB
- Ngrok