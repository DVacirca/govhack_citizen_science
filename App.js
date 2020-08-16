import React, { useEffect, useState } from 'react';
import {
  Dimensions,
  StyleSheet,
  Button,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const width = Dimensions.get('window').width; //full width
const height = Dimensions.get('window').height; //full height

const IntroScreen = ({ navigation }) => {
  return (
    <>
      <View style={styles.container}>
        <View style={{ flex: 2, justifyContent: 'flex-end' }}>
          <Text style={styles.header}>Welcome to</Text>
          <Text style={styles.header}>MaskCount</Text>
        </View>
        <View style={{ flex: 1, paddingVertical: 40 }}>
          <Text style={{ fontSize: 18, textAlign: 'center' }}>
            A citizen science app to help capture
          </Text>
          <Text style={{ fontSize: 18, textAlign: 'center' }}>
            data around mask-wearing
          </Text>
        </View>
        <View style={{ flex: 3, justifyContent: 'flex-end' }}>
          <View
            style={{
              width: width,
              height: 35,
              backgroundColor: '#A7C0F1',
            }}
          />

          <View
            style={{
              width: width,
              height: 220,
              backgroundColor: '#9BA6BC',
              justifyContent: 'center',
            }}
          >
            <View style={{ width: 200, height: 100, alignSelf: 'center' }}>
              <Button
                title="CONTINUE"
                onPress={() => navigation.navigate('Main')}
                color="#424B5A"
              />
            </View>
          </View>
        </View>
      </View>
    </>
  );
};
const ConfirmationScreen = ({ navigation }) => {
  return (
    <>
      <View style={styles.container}>
        <View style={{ flex: 1, marginTop: 100 }}>
          <Text style={styles.header}>Thank you for contributing to our </Text>
          <Text style={styles.header}>citizen science project!</Text>
        </View>

        <View
          style={{
            width: width,
            height: 220,
            backgroundColor: '#9BA6BC',
            justifyContent: 'center',
          }}
        >
          <View style={{ width: 200, height: 100, alignSelf: 'center' }}>
            <Button
              title="DONE"
              onPress={() => navigation.navigate('Main')}
              color="#424B5A"
            />
          </View>
        </View>
      </View>
    </>
  );
};

const MainScreen = ({ navigation }) => {
  const [maskCount, setMaskCount] = useState(0);
  const [noMaskCount, setNoMaskCount] = useState(0);
  const increaseMaskCount = () => setMaskCount((prevCount) => prevCount + 1);
  const decreaseMaskCount = () => setMaskCount((prevCount) => prevCount - 1);
  const increaseNoMaskCount = () =>
    setNoMaskCount((prevCount) => prevCount + 1);
  const decreaseNoMaskCount = () =>
    setNoMaskCount((prevCount) => prevCount - 1);

  const [mins, setMins] = useState(10);
  const [secs, setSecs] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      if (secs <= 0) {
        if (mins <= 0) alert('end');
        else {
          setMins((m) => m - 1);
          setSecs(59);
        }
      } else setSecs((s) => s - 1);
    }, 1000);
    return () => clearInterval(timerId);
  }, [secs, mins]);

  return (
    <View style={styles.container}>
      <View style={{ flex: 1, marginTop: 20 }}>
        <View style={{ textAlign: 'center' }}>
          <Text style={{ marginBottom: 10 }}>
            {' '}
            Recommended time to observe: 10 mins
          </Text>
          {/* <Text style={styles.header}> 10:00</Text> */}
          <Text style={styles.header}>
            {' '}
            {mins}:{secs < 10 && 0}
            {secs}
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
        }}
      >
        <View style={{}}>
          <Text style={{ fontSize: 25, paddingRight: 70 }}> No Mask</Text>
        </View>
        <View style={{}}>
          <Text style={{ fontSize: 25 }}> Mask</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
        }}
      >
        <View style={{}}>
          <Text style={{ fontSize: 90, fontWeight: 'bold', paddingRight: 70 }}>
            {' '}
            {noMaskCount}
          </Text>
        </View>
        <View style={{}}>
          <Text style={{ fontSize: 90, fontWeight: 'bold' }}> {maskCount}</Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
        }}
      >
        <View style={{ marginRight: 70 }}>
          <TouchableOpacity onPress={decreaseNoMaskCount}>
            <Image
              source={require('./src/assets/minus-square.svg')}
              style={{ width: 75, height: 75 }}
            />
          </TouchableOpacity>
        </View>
        <View style={{}}>
          <TouchableOpacity onPress={decreaseMaskCount}>
            <Image
              source={require('./src/assets/minus-square.svg')}
              style={{ width: 75, height: 75 }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          marginVertical: 10,
        }}
      >
        <View style={{ marginRight: 50 }}>
          <Image
            source={require('./src/assets/mask.svg')}
            style={{ width: 90, height: 90, paddingRight: 20 }}
          />
        </View>
        <View style={{}}>
          <Image
            source={require('./src/assets/nomask.svg')}
            style={{ width: 90, height: 90 }}
          />
        </View>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
        }}
      >
        <View style={{ marginRight: 50 }}>
          <TouchableOpacity onPress={increaseNoMaskCount}>
            <Image
              source={require('./src/assets/plus-square.svg')}
              style={{ width: 90, height: 90, paddingRight: 20 }}
            />
          </TouchableOpacity>
        </View>
        <View style={{}}>
          <TouchableOpacity onPress={increaseMaskCount}>
            <Image
              source={require('./src/assets/plus-square.svg')}
              style={{ width: 90, height: 90 }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ justifyContent: 'flex-end', marginTop: 10 }}>
        <View
          style={{
            width: width,
            height: 120,
            backgroundColor: '#9BA6BC',
            justifyContent: 'center',
          }}
        >
          <View style={{ width: 200, height: 60, alignSelf: 'center' }}>
            <Button
              title="FINISH"
              onPress={() => navigation.navigate('Confirmation')}
              color="#424B5A"
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {/* <Stack.Screen name="Intro" component={IntroScreen} /> */}
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Confirmation" component={ConfirmationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F0DE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontWeight: 'bold',
    fontSize: 40,
    textAlign: 'center',
  },
});
