import React, { useEffect, useState } from 'react'
import { FlatList, View, StyleSheet } from 'react-native';
import ItemCell from './item';

const AnimatedList = (props) => {

  const [data,setData] = useState([])

  const renderItem = ({ item }) => {
    return (
        <ItemCell item={item} design={props.design} isVisible={props.isVisible} anim={animation ? true : false} speed={animSpeed ? animSpeed : 0.5}/>
    )
  }

  useEffect(()=>{
    setData(props.data)
  },[props.data])

    return (
        <View style={{height: '100%', width: '100%'}}>
          <FlatList 
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
    )
}

export { AnimatedList }

const Styles = StyleSheet.create({
  tile: {
    height: '15.6%',
    width: '100%',
  }
});