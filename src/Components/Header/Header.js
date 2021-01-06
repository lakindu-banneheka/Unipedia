import { AppBar, Typography , makeStyles, Avatar, Toolbar, IconButton, fade } from "@material-ui/core";
import { React } from "react";
import SideBar from "./SideBar/SideBar";
import SearchField from "./SearchField";

const usestyles = makeStyles((theme)=>({
    TypographyStyles:{
      paddingRight:20,
      flex:1,
    },
    AvatarStyle:{
        width: theme.spacing(4),
        height: theme.spacing(4),
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: 'auto',
        },
      },
      searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          width: '15ch',
          '&:focus': {
            width: '40ch',
          },
        },
      },
  }))

function Header (){
    const classes = usestyles();
    return(
        <AppBar >
            <Toolbar>
                <Typography className={classes.TypographyStyles}>
                    LOGOiasfnias
                </Typography>
                <SearchField />
                <IconButton color="" aria-label="upload picture" component="span">
                    {/* Image dosent work ... src ???? */}
                    <Avatar  id="Avatar" src="" className={classes.AvatarStyle}  /> 
                </IconButton>
                <SideBar />
            </Toolbar>
        </AppBar>
    );
}

export default Header;