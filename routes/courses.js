const express = require('express');
const Course = require('../models/Course');
const advancedResults = require('../middleware/advancedResult');
const router = express.Router({ mergeParams: true });
const { protect, authorize } = require('../middleware/auth');
const {
  getCourses,
  getCourse,
  addCourse,
  updateCourse,
  deleteCourse,
} = require('../controllers/courses');

router
  .route('/')
  .get(
    advancedResults(Course, {
      path: 'Bootcamp',
      select: 'name description',
    }),
    getCourses,
  )
  .post(protect, authorize('publisher', 'admin'), addCourse);

router
  .route('/:id')
  .get(getCourse)
  .put(protect, authorize('publisher', 'admin'), updateCourse)
  .delete(protect, authorize('publisher', 'admin'), deleteCourse);

module.exports = router;
