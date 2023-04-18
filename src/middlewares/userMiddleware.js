import express from "express";
import passport from "passport";
import passportLocalMongoose from "passport-local-mongoose";
import GoogleStrategy from 'passport-google-oauth20';
import findOrCreate from "mongoose-findorcreate";

userSchema.plugin(findOrCreate);

// Serialize and deserialize user
passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    
    User.findById(id , function(err , user){
        done(err, user);
    });

});


passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/home",
    userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"

  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));