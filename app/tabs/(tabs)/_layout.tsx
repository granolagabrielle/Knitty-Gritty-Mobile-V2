import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';

function TabBarIcon(props: { name: React.ComponentProps<typeof FontAwesome>['name']; color: string }) {
  return <FontAwesome size={18} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <TabBarIcon name='home' color={color} />,
        }}
      />

      <Tabs.Screen
        name='yarn'
        options={{
          title: 'Yarns',
          tabBarIcon: ({ color }) => <TabBarIcon name='star-o' color={color} />,
        }}
      />

      <Tabs.Screen
        name='patterns'
        options={{
          title: 'Patterns',
          tabBarIcon: ({ color }) => <TabBarIcon name='star-o' color={color} />,
        }}
      />
      <Tabs.Screen
        name='projects'
        options={{
          title: 'Projects',
          tabBarIcon: ({ color }) => <TabBarIcon name='star-o' color={color} />,
        }}
      />
    </Tabs>
  );
}
