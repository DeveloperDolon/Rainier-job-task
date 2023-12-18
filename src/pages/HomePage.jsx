import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import iconVector from "../assets/Icon_Vector.svg";
import { LuHome } from "react-icons/lu";
import { IoPersonOutline } from "react-icons/io5";
import { LuCalendarRange } from "react-icons/lu";
import { FaHistory } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import lightIcon from "../assets/noto_sun.svg";
import avater from "../assets/Avatar.svg";
import { IoIosArrowDown } from "react-icons/io";
import WellcomeComponent from '../components/WellcomeComponent/WellcomeComponent';

const drawerWidth = 300;

const menuItems = [
    {
        item: "Home",
        icon: <LuHome />
    },
    {
        item: "Patient Profile",
        icon: <IoPersonOutline />
    },
    {
        item: "Appointments",
        icon: <LuCalendarRange />
    },
    {
        item: "Medical History",
        icon: <FaHistory />
    },
    {
        item: "Settings",
        icon: <IoSettingsOutline />
    }
]

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

export default function HomePage() {
    const [toolPadding, setToolPadding] = React.useState(24);
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
        setToolPadding(0);
    };

    const handleDrawerClose = () => {
        setOpen(false);
        setToolPadding(24);
    };

    const handleTheme = () => {
        if(document.body.getAttribute("data-theme") === "dark") {
            document.body.setAttribute("data-theme", "light");
            return;
        }
        document.body.setAttribute("data-theme", "dark");
    }

    return (
        <Box sx={{ display: 'flex', border: "0px" }}>
            <CssBaseline />
            <AppBar style={{ boxShadow: "none" }} position="fixed" open={open}>
                <Toolbar style={{ paddingLeft: toolPadding, paddingRight: 0 }} className='bg-white flex text-black'>
                    <IconButton
                        className='shadow-md'
                        color="#FF7594"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                            borderRadius: "7px",
                            backgroundColor: "white",
                            marginRight: 1.5,
                            ...(open && { display: 'none' }),
                        }}
                    >
                        <MenuIcon className='text-[#FF7594]' />
                    </IconButton>
                    <div className='flex-1 pt-3 flex justify-between pr-10 items-center bg-[#F9F9F9]'>
                        <Typography className='border-l md:py-6 py-5 pl-6' noWrap component="div">
                            <span className='font-medium md:text-3xl text-xl'>
                                Home
                            </span>
                        </Typography>

                        <div className='flex md:gap-5 gap-3 items-center'>
                            <div className='border-[#FDDAD6] border-2 rounded-full w-20 flex justify-end h-fit'>
                                <button onClick={handleTheme} className='bg-[#fddad686] rounded-full w-fit h-fit p-2 cursor-pointer'>
                                    <img className='md:w-5 w-3 md:h-5 h-3 rounded-full' src={lightIcon} alt="" />
                                </button>
                            </div>

                            <div className='flex items-center md:gap-2 gap-1'>
                                <img src={avater} alt="" />
                                <IoIosArrowDown className='md:text-2xl text-lg' />
                            </div>
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
            <Drawer style={{
                border: "0px",
            }} variant="permanent" open={open}>
                <DrawerHeader sx={{ border: "0px" }} className='flex justify-end'>
                    <div className='flex w-full pl-5 justify-start items-center md:gap-5 gap-3 md:py-6 py-4 mt-3'>
                        <img src={iconVector} alt="" />
                        <h1 className='md:text-3xl text-xl font-medium'>Medl<span className='text-[#FF7594]'>Doc</span></h1>
                    </div>
                    <IconButton className='shadow-md text-[#FF7594]' style={{
                        zIndex: 100
                    }} onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon className='text-[#FF7594]' /> : <ChevronLeftIcon className='text-[#FF7594]' />}
                    </IconButton>
                </DrawerHeader>

                <List sx={{
                    mt: 5
                }}>
                    {menuItems?.map((text, index) => (
                        <ListItem key={index} disablePadding sx={{ display: 'block' }}>
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                }}
                                className='font-medium'
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                    }}

                                >
                                    <span className='md:text-2xl font-bold text-xl'>
                                        {text?.icon}
                                    </span>
                                </ListItemIcon>
                                <ListItemText primary={text?.item} sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <Box component="main" className='bg-[#F9F9F9] mt-3 min-h-[calc(100vh)]' sx={{ flexGrow: 1, p: 3, border: "0px" }}>
                <DrawerHeader />

                <WellcomeComponent></WellcomeComponent>
            </Box>
        </Box>
    );
}
