import { ScrollArea, Text, Title } from '@mantine/core';

function Examenstudentcontent() {
    
    return (
        <>

            <ScrollArea h={550} offsetScrollbars scrollbarSize={8}>

                <Text align='justify'>


                    <Title >
                        Instrucciones:
                    </Title>
                    *Lee cuidadosamente cada pregunta antes de responder.<br />
                    *Realiza los cálculos necesarios para cada pregunta.<br />
                    *Proporciona tus respuestas de forma clara y ordenada.<br />
                    <br /><br />

                    <Title >
                        Problema de Palabras (20 puntos)
                    </Title>
                    Un agricultor tiene un campo rectangular de

                    30 metros de largo y

                    20 metros de ancho. Quiere cercar el campo con alambre de púas. Si cada rollo de alambre de púas mide

                    25 metros y cuesta

                    15 dólares, ¿cuántos rollos de alambre de púas necesita comprar y cuánto dinero gastará en total?

                </Text>


            </ScrollArea>

        </>
    );
}
export default Examenstudentcontent;
