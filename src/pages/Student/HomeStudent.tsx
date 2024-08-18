import { Card, Group, Title } from '@mantine/core';
import Cardm from '../../components/Student/CardMaterial'

function HomeStudent() {
  return (
    <>
      <Card w="100%" h="100%" style={{ borderRadius: '15px 0 0 15px' }}>
        <Group >
          <Title mb={15} order={2} ml={5} fw={700} style={{ color: "#343263" }}>
            Materias cursadas
          </Title>
        
        </Group>
        <Cardm />
      </Card>
    </>
  );
}

export default HomeStudent;
