import React from 'react';
import { Text } from 'react-native';
import { s } from './TemperatureDisplay.style';

export default function TemperatureDisplay({ temperature }) {
    return (
        <Text style={s.text}>{temperature ?? ""} °F</Text>
    );
}