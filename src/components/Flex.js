import React from 'react';
import {View, StyleSheet,Text, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
export const Flex = () => {
    return (
        <View style={styles.container}>
            <View style={styles.box1}>
                <Text style={styles.Text}>A</Text>
            </View>

            <View style={styles.box2}>
                <View style={styles.boxes}>
                    <View style={styles.Daughter_Boxes}><Text style={styles.Text}>B</Text></View>
                    <View style={styles.Daughter_Boxes}><Text style={styles.Text}>C</Text></View>
                    <View style={styles.Daughter_Boxes}><Text style={styles.Text}>D</Text></View>
                </View>
                <View style={styles.boxes}>
                    <View style={styles.Daughter_Boxes}><Text style={styles.Text}>E</Text></View>
                    <View style={styles.Daughter_Boxes}><Text style={styles.Text}>F</Text></View>
                    <View style={styles.Daughter_Boxes}><Text style={styles.Text}>G</Text></View>
                </View>
            </View>
            <View style={styles.box3}>
                <Text style={styles.Text}>H</Text>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        width: width,
        height: height,
        margin:20,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    Text:{
        fontSize: 32,
        fontWeight: 'bold',
        color:'#757575'
    },

    box1: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: width * 0.9,
        height: height * 0.18,
        backgroundColor: 'rgb(217, 217, 217)',
        borderRadius: 8,

    },
    box2: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: width * 0.9,
        height: height * 0.38,
        borderRadius: 8,
        backgroundColor: '#fff',
        padding: 8,
        },
    box3: {
        width: width * 0.9,
        height: height * 0.35,
        borderRadius: 8,
        backgroundColor: 'rgb(217, 217, 217)',
        justifyContent: 'center',
        alignItems: 'center',
        },
    boxes:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor:'#fff',
        width:'100%',
        height:'45%',

    },
    Daughter_Boxes:{
        width:80,
        height:80,
        backgroundColor:'rgb(217, 217, 217)',
        borderRadius:5,
        justifyContent: 'center',
        alignItems: 'center',

    }



})



