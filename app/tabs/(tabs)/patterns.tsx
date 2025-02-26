import { Center } from '@/components/ui/center';
import { Box } from '@/components/ui/box';
import PatternItem from '@/components/PatternItem';

export default function Patterns() {
  return (
    <Center className='flex-1'>
      <Box className='w-full px-4'>
        <PatternItem />
      </Box>
    </Center>
  );
}
