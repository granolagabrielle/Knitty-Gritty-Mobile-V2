import { Center } from '@/components/ui/center';
import { Box } from '@/components/ui/box';
import YarnItem from '@/components/YarnItem';

export default function Yarn() {
  return (
    <Center className='flex-1'>
      <Box className='w-full px-4'>
        <YarnItem />
      </Box>
    </Center>
  );
}
