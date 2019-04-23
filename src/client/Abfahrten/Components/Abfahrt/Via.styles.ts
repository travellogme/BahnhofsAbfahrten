import { createStyles } from '@material-ui/styles';
export default createStyles(theme => ({
  main: {
    fontSize: '2.1em',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  detail: {
    whiteSpace: 'inherit',
  },
  info: {
    color: theme.colors.red,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  additional: theme.mixins.changed,
  hbf: {
    fontWeight: 'bold',
  },
  cancelled: theme.mixins.cancelled,
}));
