// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Card from '@mui/material/Card'; // Optional styling for cards
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import IconButton from '@mui/material/IconButton';
// import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

// const cardStyle = {
//   maxWidth: 250,
//   margin: '10px',
//   transition: 'transform 0.3s, box-shadow 0.3s',
//   boxShadow: '0px 0px 8px rgba(0,0,0,0.3)',
// }; // Optional styling for cards

// const cardHoverStyle = {
//   transform: 'scale(0.95)',
//   boxShadow: '0px 0px 12px rgba(0,0,0,0.5)',
// }; // Optional styling for cards on hover

// // Replace with your actual backend API endpoint for courses
// const API_URL = '/api/courses';

// // Function to handle adding a new course
// const handleAddCourse = async (setCourses, courseToAdd) => {
//   try {
//     const response = await axios.post(API_URL, courseToAdd);
//     if (response.status === 201) { // Check for successful creation (201 Created)
//       setCourses([...courses, response.data]); // Add the newly created course to state
//     } else {
//       console.error('Error adding course:', response);
//     }
//   } catch (error) {
//     console.error('Error adding course:', error);
//   }
// };

// export default function Courses() {
//   const [courses, setCourses] = useState([]); // Array to store course data
//   const [newCourse, setNewCourse] = useState({
//     courseId: '',
//     name: '',
//     image: '', // Add image field
//     registerLink: '', // Add registration link field
//   });

//   // Fetch initial course data on component mount
//   useEffect(() => {
//     const fetchCourses = async () => {
//       try {
//         const response = await axios.get(API_URL);
//         setCourses(response.data);
//       } catch (error) {
//         console.error('Error fetching courses:', error);
//       }
//     };
//     fetchCourses();
//   }, []);

//   const handleNewCourseChange = (e) => {
//     setNewCourse({ ...newCourse, [e.target.id]: e.target.value });
//   };

//   // Split courses into rows with four cards each (optional for card layout)
//   const rows = [];
//   for (let i = 0; i < courses.length; i += 4) {
//     rows.push(courses.slice(i, i + 4));
//   }

//   return (
//     <div>
//       <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
//         <h3>Courses</h3>
//         <IconButton onClick={() => setNewCourse({ courseId: '', name: '', image: '', registerLink: '' })}>
//           <AddCircleOutlineIcon color="primary" />
//         </IconButton>
//       </div>

//       {/* Add Course Form */}
//       {newCourse.courseId && ( // Show form only when a course ID is entered
//         <div style={{ display: 'flex', flexWrap: 'wrap' }}>
//           <TextField
//             id="courseId"
//             label="Course ID"
//             variant="outlined"
//             value={newCourse.courseId}
//             onChange={handleNewCourseChange}
//             required
//             style={{ marginRight: '10px', marginBottom: '10px', width: '200px' }}
//           />
//           <TextField
//             id="name"
//             label="Course Name"
//             variant="outlined"
//             value={newCourse.name}
//             onChange={handleNewCourseChange}
//             required
//             style={{ marginRight: '10px', marginBottom: '10px', width: '200px' }}
//           />
//           <TextField
//             id="image"
//             label="Course Image URL"
//             variant="outlined"
//             value={newCourse.image}
//             onChange={handleNewCourseChange}
//             required
//             style={{ marginRight: '10px', marginBottom: '10px', width: '200px' }}
//           />
//             <TextField
//               id="registerLink"
//               label="Registration Link"
//               variant="outlined"
//               value={newCourse.registerLink}
//               onChange={handleNewCourseChange}
//               required
//               style={{ marginRight: '10px', marginBottom: '10px', width: '200px' }}
//             />
//             <Button variant="contained" color="primary" onClick={() => handleAddCourse(setCourses, newCourse)}>
//               Add Course
//             </Button>
//           </div>
//         )}
  
//         {/* Display Courses */}
//         {courses.length > 0 ? (
//           <div>
//             {rows.map((row, rowIndex) => (
//               <div key={rowIndex} style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
//                 {row.map((course, courseIndex) => (
//                   <Card key={course._id || course.id} style={cardStyle} onMouseEnter={() => (cardStyle.boxShadow = cardHoverStyle.boxShadow)} onMouseLeave={() => (cardStyle.boxShadow = cardStyle.boxShadow)}>
//                     <CardContent>
//                       <h3>{course.name}</h3>
//                       <img src={course.image} alt={course.name} style={{ width: '100%', maxWidth: '200px', marginBottom: '10px' }} />
//                     </CardContent>
//                     <CardActions>
//                       <Button size="small" href={course.registerLink} target="_blank" rel="noreferrer noopener">
//                         Register Now
//                       </Button>
//                     </CardActions>
//                   </Card>
//                 ))}
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p>No courses found.</p>
//         )}
//       </div>
//     );
//   }
   
