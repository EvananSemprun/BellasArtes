import { Card,Title,Table,Button } from '@mantine/core';

function Pendingactivitiesstudent() {
    const elements = [
        { Activity: "Tarea 1"},
        { Activity: "Tarea 2"},
        { Activity: "Tema 1" },
       
      ];
      const rows = elements.map((element) => (
        <tr >
          <td>{element.Activity}</td>
          <td> <Button ml={-110} color="indigo" radius="xl" compact>
      ver actividad
    </Button></td>
        </tr>
      ));
  return (
    <>
      <Card w="100%" h="100%" style={{ borderRadius: '15px 0 0 15px' }}>
      <Title align='center' order={2}>Lista de actividades pendientes</Title>
      <Table w={555} align='center' striped highlightOnHover >
      <thead>
        <tr>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
      
    </Table>
      </Card>
    </>
  );
}

export default Pendingactivitiesstudent;
