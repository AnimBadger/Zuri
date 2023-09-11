const asyncHandler = require('express-async-handler');
const Person = require('../models/personModel');

// const getPersons = asyncHandler(async (req, res) => {
//   const persons = await Person.find();
//   res.status(200).json(persons);
// });

const getPerson = asyncHandler(async (req, res) => {
  const person = await Person.findById(req.params.id);
  if (!person) {
    res.status(404);
    throw new Error('Person not found');
  }
  res.status(200).json(person);
});

const createPerson = asyncHandler(async (req, res) => {
  const { name } = req.body;
  if (!name) {
    res.status(404);
    throw new Error('Field is mandatory');
  }
  const person = await Person.create({ name });
  res.status(201).json({ person });
});

const updatePerson = asyncHandler(async (req, res) => {
  const person = await Person.findById(req.params.id);
  if (!person) {
    res.status(404);
    throw new Error('Person not found');
  }
  const updatedPerson = await Person.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(updatedPerson);
});

const deletePerson = asyncHandler(async (req, res) => {
  const person = await Person.findByIdAndDelete(req.params.id);
  if (!person) {
    res.status(404);
    throw new Error('Person not found');
  }
  res.status(204).json({});
});

module.exports = { createPerson, updatePerson, deletePerson, getPerson };
