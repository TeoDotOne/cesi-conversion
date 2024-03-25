import { StatusBar } from 'expo-status-bar';
import TemperatureInput from './components/TemperatureInput.js/TemperatureInput';
import { useState } from 'react';
import { ImageBackground, Text, View } from 'react-native';
import { s } from './App.style';
import TemperatureDisplay from './components/TemperatureDisplay/TemperatureDisplay';


export default function App() {

  const [temperature, setTemperature] = useState(null);

  const image = temperature > 25
    ? require('./assets/backgrounds/hot.png')
    : require('./assets/backgrounds/cold.png');

  function celsiusToFahrenheit(celsius) {
    if (celsius === null) {
      return null;
    }
    return Number((celsius * 9 / 5 + 32).toFixed(1));
  }

  return (
    <View style={s.container}>
      <ImageBackground
        source={image}
        resizeMode='cover'
        style={s.image}
      >
        <TemperatureDisplay temperature={celsiusToFahrenheit(temperature)} />

        <TemperatureInput
          temperature={temperature}
          setTemperature={setTemperature}
        />
      </ImageBackground>
    </View >
  );
}


