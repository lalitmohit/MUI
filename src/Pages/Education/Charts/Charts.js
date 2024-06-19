// import * as React from 'react';
// import Timeline from '@mui/lab/Timeline';
// import TimelineItem from '@mui/lab/TimelineItem';
// import TimelineSeparator from '@mui/lab/TimelineSeparator';
// import TimelineConnector from '@mui/lab/TimelineConnector';
// import TimelineContent from '@mui/lab/TimelineContent';
// import TimelineDot from '@mui/lab/TimelineDot';
// import Typography from '@mui/material/Typography';

// export default function BasicTimeline() {
//   return (
//     <Timeline>
//       <TimelineItem>
//         <TimelineSeparator>
//           <TimelineDot />
//           <TimelineConnector />
//         </TimelineSeparator>
//         <TimelineContent>
//         <Typography variant="h6" component="span">
//             Eat
//           </Typography>
//           <Typography variant="body1" >
//             Eat
//           </Typography>
//           <Typography variant="body2" color="textSecondary">
//             Have breakfast at 8:00 AM
//           </Typography>
//         </TimelineContent>
        
//       </TimelineItem>
//       <TimelineItem>
//         <TimelineSeparator>
//           <TimelineDot />
//           <TimelineConnector />
//         </TimelineSeparator>
//         <TimelineContent>
//         <Typography variant="h6" component="span">
//             Eat
//           </Typography>
//           <Typography variant="body1" >
//             Eat
//           </Typography>
//           <Typography variant="body2" color="textSecondary">
//             Have breakfast at 8:00 AM
//           </Typography>
//         </TimelineContent>
        
//       </TimelineItem>
//       <TimelineItem>
//         <TimelineSeparator>
//           <TimelineDot />
//           <TimelineConnector />
//         </TimelineSeparator>
//         <TimelineContent>
//         <Typography variant="h6" component="span">
//             Eat
//           </Typography>
//           <Typography variant="body1" >
//             Eat
//           </Typography>
//           <Typography variant="body2" color="textSecondary">
//             Have breakfast at 8:00 AM
//           </Typography>
//         </TimelineContent>
        
//       </TimelineItem>
//       <TimelineItem>
//         <TimelineSeparator>
//           <TimelineDot />
//           <TimelineConnector />
//         </TimelineSeparator>
//         <TimelineContent>Code</TimelineContent>
//       </TimelineItem>
//       <TimelineItem>
//         <TimelineSeparator>
//           <TimelineDot />
//         </TimelineSeparator>
//         <TimelineContent>Sleep</TimelineContent>
//       </TimelineItem>
//     </Timeline>
//   );
// }

import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
// import Stack from '@mui/material/Stack';

// Sample event data
const events = [
  {
    title: 'Matriculation',
    description: 'Completed my Matriculation from State Board with 94.8% marks', 
    time: '2018-2019'
  },
  {
    title: 'Intermediate',
    description: 'Completed my Intermediate from State Board with 96% marks',
    time: '2020-2021'
  },
  {
    title: 'First Year',
    description: 'Completed my First Year of B.Tech in Computer Science and Engineering from IIT BHILAI with 7.7 CGPA',
    time: '2021- 2022 '
  },
  {
    title: 'InternShip',
    description: 'Worked as Software Delveloper Intern at Saeternus Inovations Pvt. Ltd.',
    time: 'Oct 2022- Dec 2022'
  },
  
  {
    title: 'Second Year',
    description: 'Completed my Second Year of B.Tech in Computer Science and Engineering from IIT BHILAI with 7.13 CGPA',
    time: '2022- 2023'
  },
  {
    title: 'Third Year',
    description: 'Completed my Third Year of B.Tech in Computer Science and Engineering from IIT BHILAI with 7.03 CGPA',
    time: '2023- 2024'
  },
  // Add more events here
];

export default function Charts() {
  return (
    <Box sx={{flexGrow:1}}>
    <Timeline>
      {events.map((event, index) => (
        <TimelineItem key={index}>
          <TimelineSeparator>
            <TimelineDot />
            {index < events.length - 1 && <TimelineConnector />}
          </TimelineSeparator>
          <TimelineContent>
            {/* <Stack direction="column" spacing={1}> */}
              <Typography variant="h6" component="span">
                {event.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" style={{color:'white'}}>
                {event.time}
              </Typography>
              <Typography variant="body2" color="textSecondary" style={{color:'white'}}>
                {event.description}
              </Typography>
            {/* </Stack> */}
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
    </Box>
  );
}
