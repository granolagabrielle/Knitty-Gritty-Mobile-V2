import { Center } from '@/components/ui/center';
import { Heading } from '@/components/ui/heading';
import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';
import { Card } from '@/components/ui/card';

export default function Home() {
  return (
    <Center className='flex-1'>
      <Box className='w-full px-4'>
        <Card variant='elevated' size='md' className='flex-row items-start mb-6'>
          <Box className='flex-1 ml-4'>
            <Heading className='text-lg font-bold'>Yarn Data</Heading>
            <Text>Text here</Text>
          </Box>
        </Card>
        <Card variant='elevated' size='md' className='flex-row items-start mb-6'>
          <Box className='flex-1 ml-4'>
            <Heading className='text-lg font-bold'>Wishlist</Heading>
            <Text>Text here</Text>
          </Box>
        </Card>
      </Box>
    </Center>
  );
}
