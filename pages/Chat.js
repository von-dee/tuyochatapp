import React from "react";
import { View } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";
import { Dialogflow_V2 } from "react-native-dialogflow-text";

const BOT_USER = {
  _id: 2,
  name: "SmartBot",
  // avatar: "./../assets/logo.png"
  avatar: require('./../assets/drone.png')
};

export default class Chat extends React.Component {
  constructor(props) {
    super(props);
    let firstMsg = {
      _id: 1,
      text: "Hello I am tuyoChat!",
      createdAt: new Date(),
      user: BOT_USER
    };

    this.state = {
      messages: [firstMsg]
    };
  }

  componentDidMount() {
    Dialogflow_V2.setConfiguration(
      "tuyobot@appspot.gserviceaccount.com",
      "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC7QrS5FqgshK3B\n0Mt/+mmaONulhJnzBG86c5Ip1vDrTRW3wEhovpUv/TIWhQQowuWUUPpoxm7ut6ov\n/7uRv7ab6KDusdN0FWElo2ruTgK7rErwPskkGtPByDnX/LLxvXtomONZyVPWxt/t\nhMCpqmXzx+Cg8Y/HNFuzp9K3/ZwBnJMBb86Q+2GGJd3incn6tTtENrPm5iNzS+1f\nr/1iUK3F7XcRFs5aWWlX/ImZ+I6phr/n+FLgk67gtvH+wguRtp44ZvvxwZQk/5eq\nXX6qBho3EIVQJZid9XiP5SDAoEB8QCDgj94GKDWvpue6LF/JxffBqtx3KPzpQK2Z\nZN4cG12HAgMBAAECggEAGGVWWg6jljkq0ec7u86J13e01dlynQBk5T6NOjowZNdE\nDw5T4KGDmh7oWZq2sgDCHBJ4rRG8/gibeWldrF1HkwQ5gx9TpvnqEBc8JROws3Z8\nxNPJLJT6JXLKZmMbhPbkjvnsFJRwAbkjDzSOTQxP//R4RT9zNcaSc9NXVnUJ0AO2\n6Ndo4WZQLKZaupHlUXTgcBebnNqY0HCTRn6DWLndavskdSKwtbfoS23xcj+brTp4\nfkP4TW/8HrJ+HX7u9CCclhWSuiTXPoYNKAdcvZMEspCjQZKm1rejGcUSAFjsMJuD\nC/UFK0uwVREfqhGIK/urSin+A8B9rxL/+xpF1ilqMQKBgQDhKh1qlWYATS3Df8zn\nNMGxYBpPshR7+8XdY5fqz4IRA1cBYaV8w2mtWN3ZAzgjM/YAahKkAio0oV4EUO6E\nUO4ojeAU7h867bIrCtACLMMI/LFb0DrtYWilY0BJduBGW7GsyzM/AdxhDq+lFRL/\nLZa8gA+pUl7RxtOWqtmXv0G3HQKBgQDU575Hp2nqlBp7oAYUgWcomF72wJiio3Af\ne/NRQxMH1g9uLlva5vljgT3Ys4EYvUgi1drukl1v+PzLYMwE2kCNc8Wp6oVXvGQK\nomph5U/zvJSZJvzyUQtrzwesfSyPwmq5LnxuEvZjcq//U3KpTg1P1HzKgjQWZhvN\naLCL2gYx8wKBgQCXUkJquvTOBxBWbrE6QQ5bMob8QGXb3Rzg6GnUeJik7mWum/0n\nl/yRb0PI8Iztu6H8LU1Rw9KxhDE3HVzut6UWxCJwboe2hsBShPW+QG7iv1BCr/Kq\nTeiSHd26gZXAMyd5RSavlYSSBditTThzHiRLkpTz6lOnD8RrYW7SuMplUQKBgHY/\nK9iCK/pkPX0x+I6E/HV4gy3K9DtISOrDnfUhKr2sby+DwfKHXDWev2nO8MF7x0fJ\nvOnKEukwwb53SXjcewPVLBBeN6bt9CZP5IPwp4I419Nj6xLuXkiHWLy9XPWPRlUJ\nc4RzNbMwLH3DrChKOGyBGLokrKdQGNrx7TQPaGdvAoGARJMFheKLdckl3AIcMDyA\nrjI9dle86KJ7RUSSn1nhYx5e1b9X8tDc8iuE2w4FKVy+7PcV7sfVdH6CQLHbPIlr\nxk6yBDchFGNAPyYNIQ4nKmZ+dsembmiBP/sOJ85zlU4HP8GMlNWkgA9dj2oTgRil\nSPPEHyHylWzdJhjb66eni9Y=\n-----END PRIVATE KEY-----\n",
      Dialogflow_V2.LANG_ENGLISH_US,
      "tuyobot"
    );
  }

  sendBotResponse(text) {
    let msg = {
      _id: this.state.messages.length + 1,
      text,
      createdAt: new Date(),
      user: BOT_USER
    };
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, [msg])
    }));
  }

  handleGoogleResponse(result) {
    console.log(result);
    let text = result.queryResult.fulfillmentMessages[0].text.text[0];
    this.sendBotResponse(text);
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages)
    }));
    let message = messages[0].text;

    Dialogflow_V2.requestQuery(
      message,
      result => this.handleGoogleResponse(result),
      error => console.log(error)
    );
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <GiftedChat
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          user={{
            _id: 1
          }}
        />
      </View>
    );
  }
}