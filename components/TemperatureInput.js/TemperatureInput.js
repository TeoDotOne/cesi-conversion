import React from 'react';
import { TextInput } from 'react-native';
import { s } from './TemperatureInput.style';

export default function TemperatureInput({ setTemperature }) {

    function handleSetTemperature(text) {
        if (text === '') {
            text = '0';
        }

        text = text.replace(',', '.');
        const number = parseFloat(text);

        if (isNaN(number)) {
            return;
        }

        setTemperature(number);
    }


    return (
        <TextInput
            style={s.input}
            onChangeText={handleSetTemperature}
            keyboardType='numeric'
        />
    );
}