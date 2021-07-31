import React,{ useState, useEffect } from 'react';
import {
    Animated
} from 'react-native';
import {
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';

const ItemCell = (props) => {

    const [cellOpacity] = useState(new Animated.Value(0));
    const [cellMargin] = useState(new Animated.Value(1))

    const animateCell = (visible) => {
        Animated.parallel([
            Animated.timing(cellOpacity,{
                toValue: visible ? 1 : 0,
                duration: anim ? speed ? speed*1000 : 500 : 0,
                useNativeDriver: false
            }),
            Animated.timing(cellMargin,{
                toValue: visible ? 0 : 1,
                duration: anim ? speed ? speed*1000 : 500 : 0,
                useNativeDriver: false
            })
        ]).start()
    }

    useEffect(()=>{
        animateCell(props.isVisible);
    },[props.item, props.isVisible])

    const cellMarginInterpolate = cellMargin.interpolate({
        inputRange: [0, 1],
        outputRange: [hp('0%'), hp('3.5%')],
    })

    return (
        <Animated.View style={{opacity: cellOpacity, marginTop: cellMarginInterpolate}}>
            {props.design(props.item)}
        </Animated.View>
    )
}

export default ItemCell;