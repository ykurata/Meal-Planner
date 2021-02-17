import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';

import CreateIcon from '@material-ui/icons/Create';

import ListItemIcon from '@material-ui/core/ListItemIcon';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';




const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  closeMenuButton: {
    marginRight: 'auto',
    marginLeft: 0,
  },
  paper: {
    padding: theme.spacing(5 ),
    margin: 'auto',
    maxWidth: 500,
    align: "right"
  },
  paddingBottom: {
    paddingBottom: 20
  },
  iconGrid: {
    paddingBottom: 20
  },
  dialog: {
    width: 200
  },
  addItemGrid: {
    paddingTop: 20,
    paddingBottom: 50
  }
  
}));

function Dashboard() {
  const dummyCategories = ['Hokusai', 'Hiroshige', 'Utamaro', 'Kuniyoshi', 'Yoshitoshi']
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  function handleDrawerToggle() {
      setMobileOpen(!mobileOpen)
    }
  const drawer = (
      <div>
        <List>
          {dummyCategories.map((text, index) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    );

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    
  return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Meal Planner
            </Typography>
          </Toolbar>
        </AppBar>
        
        <nav className={classes.drawer}>
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              <IconButton onClick={handleDrawerToggle} className={classes.closeMenuButton}>
                <CloseIcon/>
              </IconButton>
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              className={classes.drawer}
              variant="permanent"
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              <div className={classes.toolbar} />
              {drawer}
            </Drawer>  
          </Hidden>
        </nav>
        
        {/* Main content  */}
        <div className={classes.content}>
          <div className={classes.toolbar} />
          
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="h6">Monday</Typography>
              <Paper className={classes.paper}>
                <Grid container spacing={3}>

                  {/* icon grid */}
                  <Grid container  direction="row-reverse" justify="flex-start" onClick={handleClickOpen}>
                    <Grid item  className={classes.iconGrid}>
                      <CreateIcon ></CreateIcon>
                    </Grid>
                  </Grid>
                  

                  {/* Dialog */}
                  <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    maxWidth="xs"
                    fullWidth="true"
                  >
                    <DialogContent>
                      {/* Breakfast grid */}
                      <Grid container direction="column">
                        <Typography variant="h6">Breakfast</Typography>
                        <TextField label="Menu Item"></TextField>
                        <Grid container direction="row" className={classes.addItemGrid}>
                          <AddIcon></AddIcon>
                          <Typography>Add item</Typography>
                        </Grid>
                      </Grid>
                      
                      {/* Lunch grid */}
                      <Grid container direction="column">
                        <Typography variant="h6">Lunch</Typography>
                        <TextField label="Menu Item"></TextField>
                        <Grid container direction="row" className={classes.addItemGrid}>
                          <AddIcon></AddIcon>
                          <Typography>Add item</Typography>
                        </Grid>
                      </Grid>

                      {/* Dinner grid */}
                      <Grid container direction="column">
                        <Typography variant="h6">Dinner</Typography>
                        <TextField label="Menu Item"></TextField>
                        <Grid container direction="row" className={classes.addItemGrid}>
                          <AddIcon></AddIcon>
                          <Typography>Add item</Typography>
                        </Grid>
                      </Grid>
                      
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleClose} color="primary">
                        Cancel
                      </Button>
                      <Button onClick={handleClose} color="primary" autoFocus>
                        Create 
                      </Button>
                    </DialogActions>
                  </Dialog>
                  
                  <Grid container spacing={2} className={classes.paddingBottom}>
                    <Grid item xs={4}>
                      <Typography align="left">Breakfast</Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <Typography align="left">Rice and something</Typography>
                      <Typography align="left">Rice and something</Typography>
                      <Typography align="left">Rice and something</Typography>
                    </Grid>
                  </Grid>
                  <Grid container spacing={2} className={classes.paddingBottom}>
                    <Grid item xs={4}>
                      <Typography align="left">Lunch</Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <Typography align="left">Rice</Typography>
                    </Grid>
                  </Grid>
                  <Grid container spacing={2} className={classes.paddingBottom}>
                    <Grid item xs={4}>
                      <Typography align="left">Dinner</Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <Typography align="left">Rice</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="h6">Tuesday</Typography>
              <Paper className={classes.paper}>
                <Grid container spacing={3}>
                  <Grid container spacing={2} className={classes.paddingBottom}>
                    <Grid item xs={4}>
                      <Typography align="left">Breakfast</Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <Typography align="left">Rice and something</Typography>
                  
                    </Grid>
                  </Grid>
                  <Grid container spacing={2} className={classes.paddingBottom}>
                    <Grid item xs={4}>
                      <Typography align="left">Lunch</Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <Typography align="left">Rice</Typography>
                    </Grid>
                  </Grid>
                  <Grid container spacing={2} className={classes.paddingBottom}>
                    <Grid item xs={4}>
                      <Typography align="left">Dinner</Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <Typography align="left">Rice</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="h6">Wednesday</Typography>
              <Paper className={classes.paper}>
                <Grid container spacing={3}>
                  <Grid container spacing={2} className={classes.paddingBottom}>
                    <Grid item xs={4}>
                      <Typography align="left">Breakfast</Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <Typography align="left">Rice and something</Typography>
                      <Typography align="left">Rice and something</Typography>
                      <Typography align="left">Rice and something</Typography>
                    </Grid>
                  </Grid>
                  <Grid container spacing={2} className={classes.paddingBottom}>
                    <Grid item xs={4}>
                      <Typography align="left">Lunch</Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <Typography align="left">Rice</Typography>
                    </Grid>
                  </Grid>
                  <Grid container spacing={2} className={classes.paddingBottom}>
                    <Grid item xs={4}>
                      <Typography align="left">Dinner</Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <Typography align="left">Rice</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            
          </Grid>
        </div>
      </div>
    );
}
Dashboard.propTypes = {
  // Injected by the documentation to work in an iframe.
  // You won't need it on your project.
  container: PropTypes.object,
};
export default Dashboard;