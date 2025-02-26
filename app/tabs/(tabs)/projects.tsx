import { Center } from '@/components/ui/center';
import { Box } from '@/components/ui/box';
import ProjectItem from '@/components/ProjectItem';

export default function Projects() {
  return (
    <Center className='flex-1'>
      <Box className='w-full px-4'>
        <ProjectItem />
      </Box>
    </Center>
  );
}
