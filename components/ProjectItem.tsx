import { Card } from '@/components/ui/card';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { Image } from '@/components/ui/image';
import { Box } from '@/components/ui/box';
import { Progress } from '@/components/ui/progress';

export default function ProjectItem() {
  return (
    <Card variant='elevated' size='md' className='flex-row items-start mb-6'>
      <Image className='w-20 h-20 rounded-lg' source={require('assets/images/yarn.jpg')} />
      <Box className='flex-1 ml-4'>
        <Heading className='text-lg font-bold'>Project Name</Heading>
        <Text className='text-base'>Date Started</Text>
        <Progress />
      </Box>
    </Card>
  );
}
