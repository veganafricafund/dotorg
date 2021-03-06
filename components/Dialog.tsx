import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Box, IconButton, Avatar, List, ListItem, ListItemAvatar, ListItemText, DialogTitle, Dialog} from '@material-ui/core'
import TelegramIcon from '@material-ui/icons/Telegram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import { blue } from '@material-ui/core/colors';


const emails = ['username@gmail.com', 'user02@gmail.com'];
const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },

  spacing: {
      padding: "1.5rem"
  },

  chatIcon: {
    color: "#f5f5f5",
    width: "40px",
    height: "40px"
  }
});

export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

export function SimpleDialog(props: SimpleDialogProps) {
  const classes = useStyles();
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };


  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
        <Box p="1.5rem">
            <DialogTitle id="simple-dialog-title">Let's chat</DialogTitle>
            <List>
                <ListItem button onClick={handleClose} component="a" href="https://api.whatsapp.com/send/?phone=+254796649562&text&app_absent=0&lang=en" target="_blank">
                        <ListItemAvatar>
                        <Avatar className={classes.avatar}>
                            <WhatsAppIcon />
                        </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Whatsapp" />
                </ListItem>
                <ListItem autoFocus button onClick={handleClose}  component="a" href="https://t.me/vaf_token" target="_blank">
                    <ListItemAvatar>
                        <Avatar className={classes.avatar}>
                        <TelegramIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Telegram" />
                </ListItem>
            </List>
        </Box>
    </Dialog>
  );
}

export default function SimpleDialogDemo() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);
  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      <IconButton onClick={handleClickOpen}>
       <ChatBubbleIcon className={classes.chatIcon} />
      </IconButton>
      <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
    </div>
  );
}
