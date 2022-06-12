import * as React from 'react';
import { View } from 'react-native';
import { Button, Paragraph, Dialog, Portal, Provider } from 'react-native-paper';

type Props = {
    status: boolean,
    message: string,
    title: string,
    setState: Function,
  }

const DialogMessage = ( {status, title, message, setState}: Props) => {
  const hideDialog = () => { setState(false) };

  return (
      <Provider>
        <View>
            <Portal>
              <Dialog visible={status} onDismiss={hideDialog}>
                  <Dialog.Title>{title}</Dialog.Title>
                  <Dialog.Content>
                    <Paragraph>{message}</Paragraph>
                  </Dialog.Content>
                  <Dialog.Actions>
                    <Button onPress={hideDialog}>Ok</Button>
                  </Dialog.Actions>
              </Dialog>
            </Portal>
        </View>
      </Provider>
  );
};

export default DialogMessage;