const Tour = require('../models/tourModel');
const User = require('../models/userModel');
const Booking = require('../models/bookingModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.alerts = (req, res, next) => {
  const { alert } = req.query;
  if (alert === 'booking') {
    res.locals.alert = 'Booking was successful.';
  }
  next();
};

exports.getOverview = catchAsync(async (req, res, next) => {
  //Get all tour data from collection
  const tours = await Tour.find();
  //Build the template
  //Render that template using tour data
  res.status(200).render('overview', { title: 'All tours', tours });
});

exports.getTour = catchAsync(async (req, res, next) => {
  //Get data of requested tour
  const tour = await Tour.findOne({ slug: req.params.slug }).populate({
    path: 'reviews',
    fields: 'review rating user',
  });

  if (!tour) {
    return next(new AppError('No tour with that name was found.', 404));
  }
  //Build the template

  //Render template using the data
  res.status(200).render('tour', { title: `${tour.name} Tour`, tour });
});

exports.getLoginForm = (req, res) => {
  //Render template
  res.status(200).render('login', { title: 'Log into your account' });
};

exports.getSignupForm = (req, res) => {
  //Render template
  res.status(200).render('signup', { title: 'Create a new account' });
};

exports.getAccount = (req, res) => {
  //Render template
  res.status(200).render('account', { title: 'Your account' });
};

exports.getMyTours = catchAsync(async (req, res, next) => {
  //Find all bookings
  const bookings = await Booking.find({ user: req.user.id });

  //Find tours with the returned IDs
  const tourIDs = bookings.map((el) => el.tour);
  const tours = await Tour.find({ _id: { $in: tourIDs } });

  res.status(200).render('overview', { title: 'My tours', tours });
});

exports.updateUserData = catchAsync(async (req, res, next) => {
  const updatedUser = await User.findByIdAndUpdate(
    req.user.id,
    {
      name: req.body.name,
      email: req.body.email,
    },
    { new: true, runValidators: true },
  );

  res
    .status(200)
    .render('account', { title: 'Your account', user: updatedUser });
});
