import { useMemo } from 'react';
import useStyles from './index.style';
import type { Message } from 'types/iris';

interface Props {
  messages: Message[];
}
const NormalMessages = ({ messages }: Props) => {
  const classes = useStyles();
  const messagesDisplay = useMemo(
    () => messages.map((m) => ('head' in m ? m.head : m.text)).join(' +++ '),
    [messages]
  );

  return <div className={classes.messages}>{messagesDisplay}</div>;
};

export default NormalMessages;