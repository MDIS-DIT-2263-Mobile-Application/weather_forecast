import React from 'react';
import { Text, View } from 'react-native';

interface RainAlertBannerProps {
  message: string;
}

export const RainAlertBanner = ({ message }: RainAlertBannerProps) => (
  <View>
    <Text>RainAlertBanner Component</Text>
    <Text>{message}</Text>
  </View>
);
