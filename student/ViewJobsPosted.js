import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

const cardStyle = {
  maxWidth: 250,
  margin: '10px', // Adjust margin to add spacing between cards
  transition: 'transform 0.3s, box-shadow 0.3s',
  boxShadow: '0px 0px 8px rgba(0,0,0,0.3)',
};

const cardHoverStyle = {
  transform: 'scale(0.95)',
  boxShadow: '0px 0px 12px rgba(0,0,0,0.5)',
};

export default function Courses() {
  const [hoveredCard, setHoveredCard] = React.useState(null);

  const handleMouseEnter = (index) => {
    setHoveredCard(index);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  // Array of course objects
  const courses = [
    { courseId: 'E001', name: 'Meta Front-End Developer', image: '/course1.png', registerLink: 'https://www.coursera.org/professional-certificates/meta-front-end-developer?' },
    { courseId: 'E002', name: 'Introduction to Deep Learning', image: '/course2.png', registerLink: 'https://www.coursera.org/learn/introduction-to-deep-learning-boulder' },
    { courseId: 'E003', name: 'Java Programming', image: '/course3.png', registerLink: 'https://www.coursera.org/learn/java-programming' },
    { courseId: 'E004', name: 'Black-box and White-box Testing', image: '/course4.png', registerLink: 'https://www.coursera.org/learn/black-box-white-box-testing' },
    { courseId: 'E005', name: 'Python for Data Science', image: '/course5.png', registerLink: 'https://www.coursera.org/learn/python-for-applied-data-science-ai?' },
    { courseId: 'E006', name: 'Machine Learning Fundamentals', image: '/course6.png', registerLink: 'https://www.coursera.org/specializations/machine-learning-introduction' },
    { courseId: 'E007', name: 'iOS App Development', image: '/course7.png', registerLink: 'https://www.coursera.org/professional-certificates/meta-ios-developer?' },
    { courseId: 'E008', name: 'Android Development with Kotlin', image: '/course8.png', registerLink: 'https://www.coursera.org/specializations/android-app-development?' },
    { courseId: 'E009', name: 'Full-Stack JavaScript', image: '/course9.png', registerLink: 'https://www.coursera.org/professional-certificates/ibm-full-stack-cloud-developer9' },
    { courseId: 'E009', name: 'Java Full Stack Developer', image: '/course10.png', registerLink: 'https://www.coursera.org/specializations/java-fullstack' }
  ];

  // Split courses into rows with four cards each
  const rows = [];
  for (let i = 0; i < courses.length; i += 5) {
    rows.push(courses.slice(i, i + 5));
  }

  return (
    <div>
      <h3 align="center">Courses</h3>
      <br />
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
          {row.map((course, index) => (
            <Card
              key={index}
              sx={hoveredCard === index ? { ...cardStyle, ...cardHoverStyle } : cardStyle}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <img src={course.image} alt={course.name} height="150" width="250" />

              <CardContent>
                <h5>Course Code: {course.courseId}</h5>
                <h5>{course.name}</h5>
              </CardContent>
              <CardActions>
                <Button size="small" href={course.registerLink}>Register</Button>
                <div style={{ flexGrow: 1 }} /> {/* Spacer */}
                <Button size="small" href={`https://mail.google.com/mail/u/0/#inbox?compose=new&subject=Check%20out%20${encodeURIComponent(course.name)}`}>Share</Button>
              </CardActions>
            </Card>
          ))}
        </div>
      ))}
    </div>
  );
}
