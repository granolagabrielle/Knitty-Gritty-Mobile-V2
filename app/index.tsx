import React from 'react';
import Gradient from '@/assets/Icons/Gradient';
import { Box } from '@/components/ui/box';
import { ScrollView } from 'react-native';
import { Text } from '@/components/ui/text';

import { Link } from 'expo-router';

export default function Home() {
  return (
    <Box className='flex-1 bg-black h-[100vh]'>
      <ScrollView style={{ height: '100%' }} contentContainerStyle={{ flexGrow: 1 }}>
        <Box className='absolute h-[500px] w-[500px] lg:w-[700px] lg:h-[700px]'>
          <Gradient />
        </Box>
        <Box className='flex flex-1 items-center my-16 mx-5 lg:my-24 lg:mx-32'>
          <Box className='flex-1 justify-center items-center h-[20px] w-[300px] lg:h-[160px] lg:w-[400px]'>
            <Text className='text-typography-white font-normal'>The Knitty Gritty</Text>
          </Box>
          <Box>
            <Link href='/tabs/(tabs)'>
              <Box className='bg-background-template py-2 px-6 rounded-full items-center flex-column sm:flex-row md:self-start'>
                <Text className='text-typography-white font-normal'>Login</Text>
              </Box>
            </Link>
          </Box>
        </Box>
      </ScrollView>
    </Box>
  );
}
