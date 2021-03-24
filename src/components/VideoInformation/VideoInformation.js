import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 800,
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    marginRight: theme.spacing(5),
  },
  text: {
    textAlign: "justify",
  },
}));

export default function VideoInformation({ selectedVideo }) {
  const { description, thumb, title } = selectedVideo;
  const classes = useStyles();

  return (
    <>
      <Paper elevation={3} maxWidth="md" className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <Avatar alt={title} src={thumb} className={classes.large} />
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="h4">
                  {title}
                </Typography>
                <Typography
                  variant="body2"
                  className={classes.text}
                  gutterBottom>
                  {description}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}
