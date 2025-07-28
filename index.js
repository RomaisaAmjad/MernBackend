const express = require("express");
const passport = require("passport");
const session = require("express-session");
const app = express();
const port = 3000;
require("./auth/google.auth");

//Session setup

app.use(
  session({
    secret: "mysecretkey",
    resave: false,
    saveUninitialized: true,
  })
);

//Passport setup
app.use(passport.initialize());
app.use(passport.session());

// Middleware to check if user is authenticated
function authCheck(req,res,next){
  if(req.isAuthenticated()){
    return next();
  }
  res.redirect('/');
}

// Routes

app.get("/", (req, res) => {
  res.send('<a href="/auth/google">Login with Google</a>');
});

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/",
    successRedirect: "/profile",
  })
);

app.get("/profile", authCheck,(req, res) => {
 
  console.log(req.user);
  res.send(`<h1>Hello ${req.user.displayName}</h1>
            <p>Email: ${req.user.emails[0].value}</p>
            <img src="${req.user.photos[0].value}" alt="Profile Picture" />
            <br><a href="/logout">Logout</a>`);
});

app.get("/logout", (req, res) => {
  req.logout(() => {
    res.redirect("/");
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
