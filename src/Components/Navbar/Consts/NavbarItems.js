import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountTreeRoundedIcon from '@mui/icons-material/AccountTreeRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import FilePresentIcon from '@mui/icons-material/FilePresent';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import SettingsIcon from '@mui/icons-material/Settings';

export const  MainNavbarItems =[
    {
        id:0,
        icon:<DashboardIcon />,
        label:'Dashboard',
        route:'/',
    },
    {
        id:1,
        icon:<AccountTreeRoundedIcon />,
        label:'Projects',
        route:'/projects',
    },
    {
        id:2,
        icon:<SchoolRoundedIcon />,
        label:'Education',
        route:'/education',
    },
    {
        id:3,
        icon:<CastForEducationIcon />,
        label:'Experience',
        route:'/experience',
    },
    {
        id:4,
        icon:<NoteAltIcon />,
        label:'Skills',
        route:'/skills',
    },
    {
        id:5,
        icon:<MilitaryTechIcon />,
        label:'Honors',
        route:'/about',
    },
    {
        id:6,
        icon:<FilePresentIcon />,
        label:'Key Courses',
        route:'/keyCourses',
    },

    
    
    
]