import { Heading } from '@/components/ui/heading';
import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';
import { Card } from '@/components/ui/card';
import { Image } from '@/components/ui/image';

export default function YarnItem() {
  return (
    <Card variant='elevated' size='md' className='flex-row items-start mb-6'>
      <Image className='w-20 h-20 rounded-lg' source={require('assets/images/yarn.jpg')} />
      <Box className='flex-1 ml-4'>
        <Heading className='text-lg font-bold'>Yarn Brand</Heading>
        <Text className='text-base'>Yarn Name</Text>
        <Text className='text-sm'>50 grams on shelf</Text>
      </Box>
    </Card>
  );
}
