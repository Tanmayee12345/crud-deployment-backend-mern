// Import necessary modules
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the student schema
const studentSchema = new Schema({
  name: String,
  email: String,
  rollNo: String,
  summary: String,
  selectedBooks: [
    {
      id: String,
      name: String,
    },
  ],
});

// Create the Student model
const Student = mongoose.model('Student', studentSchema);

module.exports = Student;




// echo "# crud-deployment-backend-mern" >> README.md
//   git init
//   git add README.md
//   git commit -m "first commit"
//   git branch -M main
//   git remote add origin https://github.com/Tanmayee12345/crud-deployment-backend-mern.git
//   git push -u origin main