import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';

import giveClassesBackgroundImage from '../../assets/images/give-classes-background.png';

function GiveClasses() {
    const navigation  = useNavigation();

    function handleNavigateBack() {
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <ImageBackground 
             resizeMode="contain" 
             source={giveClassesBackgroundImage} 
             style={styles.content}
            >
                <Text style={styles.title}>Quer ser um Proffy?</Text>
                <Text style={styles.description}>
                    Para começar você precisa se cadastrar como Proffy na nossa plataforma web.
                </Text>
            </ImageBackground>

            <RectButton onPress={handleNavigateBack} style={styles.okButton}>
                <Text style={styles.okButtonText}>Tudo bem</Text>
            </RectButton>
        </View>    
    );
}

export default GiveClasses;