import React, {useCallback, useEffect} from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

const {height: SCREEN_HIGHT} = Dimensions.get('window');
const MAX_TRANSLATE_Y = -SCREEN_HIGHT + 66;

interface Props {
  children: JSX.Element;
}

export function BottomSheet({children}: Props) {
  const translateY = useSharedValue(0);

  const context = useSharedValue({y: 0});

  const scrollTo = useCallback((destination: number) => {
    'worklet';
    translateY.value = withSpring(destination, {damping: 50});
  }, []);

  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = {y: translateY.value};
    })
    .onUpdate(event => {
      translateY.value = event.translationY + context.value.y;
      translateY.value = Math.max(translateY.value, MAX_TRANSLATE_Y);
    })
    .onEnd(() => {
      if (translateY.value > -SCREEN_HIGHT / 3) {
        scrollTo(0);
      } else if (translateY.value < -SCREEN_HIGHT / 1.5) {
        scrollTo(MAX_TRANSLATE_Y);
      }
    });

  const rBottomSheetStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: translateY.value}],
    };
  });

  useEffect(() => {
    scrollTo(-SCREEN_HIGHT / 3);
  }, []);

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[styles.container, rBottomSheetStyle]}>
        {children}
      </Animated.View>
    </GestureDetector>
  );
}

const styles = StyleSheet.create({
  container: {
    height: SCREEN_HIGHT,
    width: '100%',
    backgroundColor: '#fff',
    position: 'absolute',
    top: SCREEN_HIGHT,
    borderRadius: 24,
    padding: 18,
  },
});
