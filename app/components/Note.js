import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

import styles from '../styles/NoteStyle';
import Icon from 'react-native-vector-icons/MaterialIcons';
const deleteIcon = (<Icon name="delete" size={35} color="white" />)


export default class Note extends Component {
    render() {
        return (
            <View key={this.props.keyval} style={styles.note}>
                <Text style={styles.noteText}>{this.props.val.date}</Text>
                <Text style={styles.noteText}>{this.props.val.note}</Text>

                <TouchableOpacity onPress={this.props.deleteMethod} style={styles.noteDelete}>
                    {deleteIcon}
                </TouchableOpacity>
            </View>
        );
    }
}

