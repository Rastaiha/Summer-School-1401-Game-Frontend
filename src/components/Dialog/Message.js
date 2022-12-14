import {
  Button,
  ButtonGroup,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Fade,
  Grid,
  Hidden,
  Paper,
  Slide,
  Typography,
  Zoom,
} from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import React from 'react';
import { useParams } from 'react-router'

import {
  getProblemFromGroupAction,
} from '../../redux/slices/problem'

const useStyles = makeStyles((theme) => ({
  description: {
    padding: '10px',
    align: 'left',
    textAlign: 'justify',
  },
  paper: {
    padding: theme.spacing(2),
    width: '100%',
  },
  image: {
    width: '100%',
    maxWidth: '400px',
    maxHeight: '400px',
    objectFit: 'contain',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '250px',
      maxHeight: '250px',
      width: '100%',
    }
  }
}));

function Index({
  open,
  handleClose,
  callbackFunction,

  text: inputText,
  image: inputImage,
}) {
  const classes = useStyles();
  const { problemGroupId, problemId, submitId } = useParams();
  const [image, setImage] = React.useState(inputImage || '/logo.png');
  const [text, setText] = React.useState(inputText || 'آیا مطمئن هستید؟');

  return (
    <Dialog maxWidth="xs" TransitionComponent={Slide} open={open} onClose={handleClose} PaperComponent='false'>
      <DialogTitle>
        <Grid container spacing={2} justifyContent='center'>
          <img className={classes.image} alt='' src={process.env.PUBLIC_URL + image} />
        </Grid>
      </DialogTitle>
      <DialogActions>
        <Grid container component={Paper} direction='column' spacing={2} justifyContent='center'>
          <Grid item>
            <Typography>
              {text}
            </Typography>
          </Grid>
          <Grid item container justifyContent='center' alignItems='center'>
            <ButtonGroup fullWidth variant='contained' color='primary'>
              <Button
                onClick={() => { callbackFunction(); handleClose(); }}>
                {'تایید'}
              </Button>
              <Button onClick={() => handleClose()}>
                {'لغو'}
              </Button>
            </ButtonGroup>
          </Grid>
        </Grid>
      </DialogActions>
    </Dialog >
  );
}


export default Index;