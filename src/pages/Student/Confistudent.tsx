import { IconBrandSamsungpass, IconAperture } from '@tabler/icons-react';
import { Card, Title, Image, Text, Group, Flex } from '@mantine/core';

function Confistudent() {

    return (
        <>
            <Card w="100%" h="100%" style={{ borderRadius: '15px 0 0 15px' }}>
                <Title align='center' order={2}>Informacion personal</Title>

                <Group mt={75} ml={300}>

                    <Flex
                        mih={50}
                        gap="xs"
                        justify="flex-start"
                        align="flex-start"
                        direction="column"
                        wrap="nowrap"
                    >
                        <Image maw={240} radius="md" src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png" alt="Random image" />
                        <Title ml={35} order={3}>Evanan Semprun</Title>
                        <Text ml={25} c="grey">evanansemprun@gmail.com</Text>
                    </Flex>

                    <Flex
                        ml={150}
                        mih={50}
                        gap="xs"
                        justify="flex-start"
                        align="flex-start"
                        direction="column"
                        wrap="nowrap"
                    >

                        <Card w={655} h={85} shadow="sm" padding="lg" radius="md" withBorder>
                            <Group position="apart">

                                <Text c="grey">Actualizar Fotografia</Text>
                                <IconBrandSamsungpass />
                            </Group>

                        </Card>

                        <Card mt={15} w={655} h={85} shadow="sm" padding="lg" radius="lg" withBorder>

                            <Group position="apart">

                                <Text c="grey">Actualizar Contraseña</Text>
                                <IconAperture />
                            </Group>
                        </Card>

                    </Flex>
                </Group>

            </Card>
        </>
    );
}

export default Confistudent;
