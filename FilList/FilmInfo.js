import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import ImageCard from './ImageCard'
//(凸ಠ益ಠ)凸
///┐(￣ヘ￣)┌
////ヽ(￣～￣　)ノ
//╮(￣_￣)╭ // (－‸ლ) 


export default class FilmInfo extends Component {
    render() {
        return (
            <View>
                <View style ={styles.imgContainer}>
                </View>
                <View >
                </View>
            </View>
        )

    }
}

const styles = StyleSheet.create({
    imgContainer: {
        //стили изображению фильма (╮°-°)╮┳━━┳ 
    },
    dataContainer:{
        //Стили текста и всех остальных плюшек ( ╯°□°)╯ ┻━━┻
    },
})
