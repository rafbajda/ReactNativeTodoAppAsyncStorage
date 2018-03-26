import React, { Component } from 'react';
import {
    AsyncStorage,
    View,
    Text,
    StyleSheet,
    TextInput,
    ScrollView,
    TouchableOpacity
} from 'react-native';

import styles from '../styles/MainStyle'
import Note from './Note';
import Icon from 'react-native-vector-icons/MaterialIcons';
const addIcon = (<Icon name="add" size={35} color="white" />)

export default class Main extends Component {

    constructor(props){
        super(props);
        this.state = {
            noteArray: [],
            noteText: '',
        };
    }    
  
    componentDidMount () { 
        this.updateData(); 
      }    

    render() {
        let notes = this.state.noteArray.map((val, key)=>{
            return <Note key={key} keyval={key} val={val}
                    deleteMethod={()=>this.deleteNote(key)}/>
        });
        return (
            <View style={styles.container}>

                <View style={styles.header}>
                    <Text style={styles.headerText}>NOTER</Text>
                </View>

                <ScrollView style={styles.scrollContainer}>
                    {notes}
                </ScrollView>

                <View style={styles.footer}>

                    <TextInput 
                        style={styles.textInput}
                        placeholder='Type a note...'
                        onChangeText={(noteText)=> this.setState({noteText})}
                        value={this.state.noteText}
                        placeholderTextColor='white'
                        underlineColorAndroid='transparent'>
                    </TextInput>

                </View>
                
                <TouchableOpacity onPress={ this.addNote.bind(this) } style={styles.addButton}>
                    <Text style={styles.addButtonText}>{addIcon}</Text>
                </TouchableOpacity>
               
              
            </View>
        );
    }
    
    addNote(){
        if(this.state.noteText){
            var d = new Date();
            this.state.noteArray.push({
                'date':d.getFullYear()+
                "/"+(d.getMonth()+1) +
                "/"+ d.getDate(),
                'note': this.state.noteText
            });
            this.setState({ noteArray: this.state.noteArray });
            this.setState({noteText:''});
            this.saveData();
          
        }
    }
    deleteNote(key){
        this.state.noteArray.splice(key, 1);
        this.setState({noteArray: this.state.noteArray});
        this.saveData();
    }

    saveData(){
        let ListOfTasks = this.state.noteArray;
        AsyncStorage.setItem('ListOfTasks', JSON.stringify(ListOfTasks));
    }

    updateData = async () => {
        try {
            let ListOfTasks = await AsyncStorage.getItem('ListOfTasks');
          if(ListOfTasks)  this.setState({ noteArray: JSON.parse(ListOfTasks) });
        } catch(error){
            alert(error);
        }
    }  
          
}
