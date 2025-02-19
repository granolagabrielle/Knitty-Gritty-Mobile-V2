import { Center } from '@/components/ui/center';
import { Card } from '@/components/ui/card';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { Image } from '@/components/ui/image';
import { Box } from '@/components/ui/box';

export default function Tab2() {
  return (
    <Center className='flex-1'>
      <Box className='items-center mx-4'>
        <Card>
          <Image size='md' source={require('assets/images/yarn.jpg')} />
          <Text>Project Name</Text>
        </Card>
      </Box>
    </Center>
  );
}
