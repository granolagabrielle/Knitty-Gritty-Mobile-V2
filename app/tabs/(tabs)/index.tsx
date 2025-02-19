import { Center } from '@/components/ui/center';
import { Heading } from '@/components/ui/heading';
import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';
import { Card } from '@/components/ui/card';
import { Image } from '@/components/ui/image';

export default function Home() {
  return (
    <Center className='flex-1'>
      <Box className='items-center mx-4'>
        <Card>
          <Image size='md' source={require('assets/images/yarn.jpg')} />
          <Box>
            <Heading>Yarn Name</Heading>
            <Text>50 grams on shelf</Text>
          </Box>
        </Card>
      </Box>
    </Center>
  );
}
