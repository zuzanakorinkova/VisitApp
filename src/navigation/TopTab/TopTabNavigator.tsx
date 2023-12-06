import { View, Text, DimensionValue } from 'react-native'
import React, { PropsWithChildren } from 'react'
import fonts from '../../theme/fonts';
import colors from '../../theme/colors';
import { createMaterialTopTabNavigator, MaterialTopTabNavigationEventMap, MaterialTopTabNavigationOptions } from '@react-navigation/material-top-tabs';

import { IPlace } from '../../types/models';


const Tab = createMaterialTopTabNavigator();

// RECIEVE parameters from SinglePlace
// THIS should be REUSABLE component
export type ParamListBase = {
  TabScreenOne: undefined; // Add your props here
  TabScreenTwo: undefined;
  TabScreenThree?: undefined;

};
export interface ChildProps{
  places?: IPlace[],
  category?: string | undefined
}

export interface ITopTabNav {
  screenParamsOne?: [] | {};
  screenParamsTwo?: [] | {};
  screenParamsThree?: [] | {};
  TabScreenOne: React.FC<ChildProps>;
  TabScreenTwo:  React.FC;
  TabScreenTitleOne: string;
  TabScreenTitleTwo: string;
  left?: DimensionValue;
}



const TopTabNavigator = ({left,screenParamsOne, screenParamsTwo, TabScreenOne, TabScreenTwo,  TabScreenTitleOne,  TabScreenTitleTwo,}: ITopTabNav) => {
  return (
    <Tab.Navigator initialRouteName="Place Description" screenOptions={{
        tabBarActiveTintColor: colors.colors.primary,
        tabBarInactiveTintColor: colors.colors.inactive,
        tabBarStyle : {backgroundColor: colors.colors.background},
        tabBarLabelStyle: {textTransform: 'none', fontSize: fonts.size.lg},
        tabBarIndicatorStyle: {width: 7, height: 7, borderRadius: 25, backgroundColor: colors.colors.primary,  flex:1,
            left: left}
    }}>
        <Tab.Screen name={TabScreenTitleOne} component={TabScreenOne} initialParams={screenParamsOne}/>
        <Tab.Screen name={TabScreenTitleTwo} component={TabScreenTwo} initialParams={screenParamsTwo} />
       
    </Tab.Navigator>
  )
}

export default TopTabNavigator