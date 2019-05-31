import React from 'react';

import { Alert, StyleSheet, Text, View, Image, AppRegistry} from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import SwitchToggle from 'react-native-switch-toggle';

import RNShake from 'react-native-shake';
import Voice from 'react-native-voice';
import { Dialogflow_V2 } from "react-native-dialogflow-text";

export default class Home extends React.Component {

  
  constructor(props) {
    super(props);
    this.state = {
      recognized: '',
      started: '',
      results: [],
      switchOn1: false,
      isShakable: false,
      shaken: false
    };
    Voice.onSpeechStart = this.onSpeechStart.bind(this);
    Voice.onSpeechRecognized = this.onSpeechRecognized.bind(this);
    Voice.onSpeechResults = this.onSpeechResults.bind(this);
  }

  componentDidMount() {
    Dialogflow_V2.setConfiguration(
      "tuyobot@appspot.gserviceaccount.com",
      "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC7QrS5FqgshK3B\n0Mt/+mmaONulhJnzBG86c5Ip1vDrTRW3wEhovpUv/TIWhQQowuWUUPpoxm7ut6ov\n/7uRv7ab6KDusdN0FWElo2ruTgK7rErwPskkGtPByDnX/LLxvXtomONZyVPWxt/t\nhMCpqmXzx+Cg8Y/HNFuzp9K3/ZwBnJMBb86Q+2GGJd3incn6tTtENrPm5iNzS+1f\nr/1iUK3F7XcRFs5aWWlX/ImZ+I6phr/n+FLgk67gtvH+wguRtp44ZvvxwZQk/5eq\nXX6qBho3EIVQJZid9XiP5SDAoEB8QCDgj94GKDWvpue6LF/JxffBqtx3KPzpQK2Z\nZN4cG12HAgMBAAECggEAGGVWWg6jljkq0ec7u86J13e01dlynQBk5T6NOjowZNdE\nDw5T4KGDmh7oWZq2sgDCHBJ4rRG8/gibeWldrF1HkwQ5gx9TpvnqEBc8JROws3Z8\nxNPJLJT6JXLKZmMbhPbkjvnsFJRwAbkjDzSOTQxP//R4RT9zNcaSc9NXVnUJ0AO2\n6Ndo4WZQLKZaupHlUXTgcBebnNqY0HCTRn6DWLndavskdSKwtbfoS23xcj+brTp4\nfkP4TW/8HrJ+HX7u9CCclhWSuiTXPoYNKAdcvZMEspCjQZKm1rejGcUSAFjsMJuD\nC/UFK0uwVREfqhGIK/urSin+A8B9rxL/+xpF1ilqMQKBgQDhKh1qlWYATS3Df8zn\nNMGxYBpPshR7+8XdY5fqz4IRA1cBYaV8w2mtWN3ZAzgjM/YAahKkAio0oV4EUO6E\nUO4ojeAU7h867bIrCtACLMMI/LFb0DrtYWilY0BJduBGW7GsyzM/AdxhDq+lFRL/\nLZa8gA+pUl7RxtOWqtmXv0G3HQKBgQDU575Hp2nqlBp7oAYUgWcomF72wJiio3Af\ne/NRQxMH1g9uLlva5vljgT3Ys4EYvUgi1drukl1v+PzLYMwE2kCNc8Wp6oVXvGQK\nomph5U/zvJSZJvzyUQtrzwesfSyPwmq5LnxuEvZjcq//U3KpTg1P1HzKgjQWZhvN\naLCL2gYx8wKBgQCXUkJquvTOBxBWbrE6QQ5bMob8QGXb3Rzg6GnUeJik7mWum/0n\nl/yRb0PI8Iztu6H8LU1Rw9KxhDE3HVzut6UWxCJwboe2hsBShPW+QG7iv1BCr/Kq\nTeiSHd26gZXAMyd5RSavlYSSBditTThzHiRLkpTz6lOnD8RrYW7SuMplUQKBgHY/\nK9iCK/pkPX0x+I6E/HV4gy3K9DtISOrDnfUhKr2sby+DwfKHXDWev2nO8MF7x0fJ\nvOnKEukwwb53SXjcewPVLBBeN6bt9CZP5IPwp4I419Nj6xLuXkiHWLy9XPWPRlUJ\nc4RzNbMwLH3DrChKOGyBGLokrKdQGNrx7TQPaGdvAoGARJMFheKLdckl3AIcMDyA\nrjI9dle86KJ7RUSSn1nhYx5e1b9X8tDc8iuE2w4FKVy+7PcV7sfVdH6CQLHbPIlr\nxk6yBDchFGNAPyYNIQ4nKmZ+dsembmiBP/sOJ85zlU4HP8GMlNWkgA9dj2oTgRil\nSPPEHyHylWzdJhjb66eni9Y=\n-----END PRIVATE KEY-----\n",
      Dialogflow_V2.LANG_ENGLISH_US,
      "tuyobot"
    );
  }
  

  startmission() {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages)
    }));
    let message = "start mission";

    Dialogflow_V2.requestQuery(
      message,
      result => console.log(result.queryResult.fulfillmentMessages[0].text.text[0]),
      error => console.log(error)
    );
  }


  componentWillMount() {
    RNShake.addEventListener('ShakeEvent', () => {

      if(this.state.isShakable){
        
        if(!this.state.shaken){
          
          this.startmission();
          this.state.shaken= true;
          console.log("Is shaken");
        }else{
          
          console.log("Is already shaken");
        }
    
      }else{
        
        console.log("Is shakable true and already shaken shaken");
      }
  


     
    });
  }
 
  componentWillUnmount() {
    RNShake.removeEventListener('ShakeEvent');
  }


  componentWillUnmount() {
      Voice.destroy().then(Voice.removeAllListeners);
    }

  onSpeechStart(e) {
      this.setState({
        started: '√',
      });
    };

  onSpeechRecognized(e) {
      this.setState({
        recognized: '√',
      });
    };
  onSpeechResults(e) {
      this.setState({
        results: e.value,
      });
    }
  async _startRecognition(e) {
      this.setState({
        recognized: '',
        started: '',
        results: [],
      });
      try {
        await Voice.start('en-US');
      } catch (e) {
        console.error(e);
      }
    }

    onPress1 = () => {
      this.setState({ switchOn1: !this.state.switchOn1 });
      if(!this.state.isShakable){
        
        this.state.isShakable= true;
        this.state.shaken= false;
        console.log("Is shakable", this.state.isShakable);
      }else{
        
        this.state.isShakable= false;
        console.log("Is shakable", this.state.isShakable);
      }
  
    }



  render() {

    return (
      <View style={styles.container}>

          <View style={{flex: 3, flexDirection: 'column'}}>
            
            <View style={{flex: 1, flexDirection: 'column'}}>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <Text style={styles.hey_text}>Hey!</Text>
              </View>
            </View>
            <View style={{flex: 1, flexDirection: 'column'}}>
              <Text style={styles.hey_info}>Connect drone to dialogflow.</Text>
            </View>
          </View>

          <View style={{flex: 6, flexDirection: 'column'}}>
            <Image source={require('./../assets/home.png')} style={{flex:8, height: undefined, width: undefined}} resizeMode="contain"/>
           
          </View>


          <View style={{flex: 2, flexDirection: 'row'}}>
            <View style={{flex: 1, flexDirection: 'column'}}></View>
            <View style={{flex: 7, flexDirection: 'column'}}>
              <View style={{flex: 1}}>
                <Button style={styles.voice_btn} onPress={() =>
                  this.props.navigation.navigate('Chat')
                }
                title="Chat Room"></Button>
              </View>
              <View style={{flex: 1}}>
                <Button style={styles.map_btn}
                onPress={() => this.props.navigation.navigate('Map')}
                title="Map"></Button>
              </View>
            </View>
            <View style={{flex: 1, flexDirection: 'column'}}></View>
            <View style={{flex: 4, flexDirection: 'column'}}>
              <View style={{flex: 1}}>
              <SwitchToggle
                  switchOn={this.state.switchOn1}
                  onPress={this.onPress1}
                />      
              </View>
              <View style={{flex: 1}}>
                <Button
                  type="clear"
                  buttonStyle={styles.button_style_mic}
                  titleStyle= {styles.button_textstyle_me}
                  icon={
                    <Icon
                      name="microphone"
                      size={26}
                      type='material'
                      color="#0e662d"
                      iconStyle= {styles.icon_style}
                    />
                  }
                  iconRight
                  onPress={() => this.props.navigation.navigate('Stream')}
                  />
              </View>
            </View>
            <View style={{flex: 1, flexDirection: 'column'}}></View>
          </View>

          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{flex: 1, flexDirection: 'row'}}>
              {/* <Text style={styles.hey_text}>Hey!</Text> */}
              {/* <Text style={styles.transcript}>
                        Transcript
                </Text>
                {this.state.results.map((result, index) => <Text style={styles.transcript}> {result}</Text>
                )} */}
            </View>
          </View>

      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff'
  },
  hey_text: {
    flex:1,
    marginLeft: 40,
    marginTop: 3,
    fontSize: 50,
    fontWeight: 'bold',
    color: '#0e662d',
  },
  hey_info: {
    flex:1,
    marginTop: 6,
    marginLeft: 40,
    fontSize: 15,
    color: '#d6d6d6',
  },
  icon_style: {
    marginLeft: 8,
  },
  button_style_start : {
    marginRight: 30,
    marginBottom: 20,
  },
  button_style_mic : {
    marginRight: 30,
    marginBottom: 20,
    
  },
  button_textstyle_me: {
    flex:1,
    fontSize: 10,
    textAlign: 'right',
    marginRight: 10,
    color: '#0e662d',
  },
  transcript: {
    textAlign: 'center',
    color: '#B0171F',
    marginBottom: 1,
    top: '400%',
  },
  voice_btn : {
    marginLeft: 6,
    backgroundColor: '#d38f62',    
  },
  map_btn : {
    margin: 6
  }

});


AppRegistry.registerComponent('VoiceNative', () => VoiceNative);