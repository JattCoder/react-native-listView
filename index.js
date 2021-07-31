import React, { useEffect, useState } from 'react'
import { FlatList, View } from 'react-native';
import ItemCell from './item';

const AnimatedList = (props) => {

  const { animation, animSpeed, shadow, shadowColor, shadowOpacity } = props;
  const [data,setData] = useState([]);

  const renderItem = ({ item }) => {
    return (
      <ItemCell 
        item={item}
        design={props.design}
        isVisible={props.isVisible}
        anim={animation ? true : false}
        speed={animSpeed ? animSpeed : 0.5}
        shadow={shadow ? true : false}
        shadowColor={shadowColor ? shadowColor : ''}
        shadowOpacity={shadowOpacity ? shadowOpacity : 0.5}
      />
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