import { ScrollArea, Text ,Title} from '@mantine/core';

function Homeworkstudentcontent() {

  return (
    <>
      <ScrollArea h={550} offsetScrollbars scrollbarSize={8}>

        <Text align='justify'>

        <Title >
        Instrucciones:
                    </Title>
       Simplifica las siguientes fracciones a su forma más reducida:<br /><br />

          1. 12/18<br /><br />
          2. 24/36<br /><br />
          3. 8/20<br /><br />
          4. 15/45<br /><br />
          5. 7/14<br /><br />

          Después de simplificar estas fracciones, verifica si alguna de ellas es equivalente entre sí y muéstralo en una tabla.
          <br /><br />
          **Pista:** Para simplificar fracciones, divide el numerador y el denominador por su máximo común divisor (MCD). Puedes usar una calculadora para encontrar el MCD si es necesario.
        </Text>

      </ScrollArea>

    </>
  );
}

export default Homeworkstudentcontent;