import React from 'react';
import {
    StyleSheet,
} from 'react-native';

var styles = StyleSheet.create({
    note: {
        position: 'relative',
        padding: 20,
        paddingRight: 100,
        borderBottomWidth:2,
        borderBottomColor: '#ededed'
    },
    noteText: {
        paddingLeft: 20,
        borderLeftWidth: 10,
        borderLeftColor: '#0af'
    },
    noteDelete: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0af',
        padding: 10,
        top: 10,
        bottom: 10,
        right: 10
    },   
});
module.exports = styles;