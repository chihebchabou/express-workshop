// Dpendencies
const express = require('express');
const path = require('path');

// Define Port
const port = process.env.PORT || 3000;

// Define public directory
const publicDir = path.join(__dirname, 'public');

// Data from database
const users = [
  { id: 1, fullName: 'John Doe', email: 'john@gmail.com' },
  { id: 2, fullName: 'Jane Doe', email: 'jane@gmail.com' },
  { id: 3, fullName: 'Sam Smith', email: 'sam@gmail.com' },
];

// Initialize application
const app = express();

// Define authorize middleware
const authorize = (req, res, next) => {
  const isAuth = true;
  const date = new Date();
  const hour = date.getHours();
  const toDay = date.getDay();

  console.log(toDay);
  console.log(hour);
  if (isAuth && toDay >= 1 && toDay <= 5 && hour >= 9 && hour < 17) {
    console.log('autorization verified');
    req.users = users;
    // console.log(req);
    next();
  } else {
    res.status(401).send('Not Authorized');
  }
};

// Middleware
app.use(authorize);
app.use(express.static(publicDir));

// Routes
// app.get('/', (req, res) => {
//   //   res.send('<h1>Home Page</h1>');
//   res.sendFile(publicDir + '/index.html', err => {
//     if (err) {
//       res.status(500).send('500 Server Error');
//     } else {
//       console.log('Success');
//     }
//   });
// });

// app.get('/about', (req, res) => {
//   //   res.send('<h1>About Page</h1>');
//   res.sendFile(publicDir + '/about.html', err => {
//     if (err) {
//       res.status(500).send('500 Server Error');
//     } else {
//       console.log('Success');
//     }
//   });
// });

// app.get('/contact', (req, res) => {
//   //   res.send('<h1>Contact Page</h1>');
//   res.sendFile(publicDir + '/contact.html', err => {
//     if (err) {
//       console.log(err.message);
//       res.status(500).send('500 Server Error');
//     } else {
//       console.log('Success');
//     }
//   });
// });

// User Services
app.get('/api/users', (req, res) => {
  //   res.send(users);
  res.json(req.users);
});

// Server should listent on port 3000
app.listen(port, () => console.log(`Server is running on port ${port}`));
