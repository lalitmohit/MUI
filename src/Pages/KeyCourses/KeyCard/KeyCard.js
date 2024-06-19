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
    title: 'Python Programming',
    description: 'Beginner to advanced', 
    
  },
  {
    title: 'Data Structures and Algorithms',
    description: 'Basic data structures to Advanced algorithms',
    
  },
  {
    title: 'Computer Organisation and Architecture',
    description: 'CPU Architecture, IOs, Memory',
  },
  {
    title: 'Operating System',
    description: 'Advanced',
  },
  
  {
    title: ' Software Tools and Technologies',
    description: 'Git,Docker and lot'
  },
  {
    title: ' DataBase Management System',
    description: 'Deep Level',

  },
  {
    title: ' Computer NetWork',
    description: 'OSI model and lot of Network Protocols',

  },

  {
    title: ' Compiler Design',
    description: 'Designing Compiler',

  },
  {
    title: ' Machine Learning',
    description: 'Basic Models to Computer Vision Neural Network and NLP',
  },
  {
    title: ' BlockChain',
    description: 'BlockChain Technologies'

  },
  {
    title: 'Parallelization of Programs',
    description: 'Zero to Streaming Multiprocessors Design and Working Process',

  },
  {
    title: 'System Design',
    description: 'Basic to Advanced',

  },
  // Add more events here
];

export default function KeyCard() {
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
              <Typography variant="h6" component="span" >
                {event.title}
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
