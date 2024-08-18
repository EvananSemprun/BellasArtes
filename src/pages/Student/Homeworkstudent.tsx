import Homeworkstudentcontent from '../../components/Student/Homeworkstudentcontent'
import { useDisclosure } from '@mantine/hooks';
import { Dropzone, DropzoneProps } from '@mantine/dropzone';
import { IconUpload, IconPhoto, IconX } from '@tabler/icons-react';
import { Card, Title, Divider, createStyles, Group, Text, Button, Modal, useMantineTheme } from '@mantine/core';

function Homeworkstudent(props: Partial<DropzoneProps>) {

    const [openedcoment, { open, close }] = useDisclosure(false);
    const [openedUpload, { open: openu, close: closeu }] = useDisclosure(false);


    const useStyles = createStyles((theme) => ({
        containerCard: {
            borderRadius: '0 5px 5px 5px',
            height: 'calc(100vh - 128px)',
            backgroundColor: theme.colors.gray[0]
        }
    }));

    const { classes } = useStyles();

    const titleStyle = {
        fontFamily: 'Montserrat',
        borderRadius: '15px 0 0 15px'
    };
    const theme = useMantineTheme();

    return (
        <>

            <Modal opened={openedcoment} onClose={close} withCloseButton={false}>
                <Title align="center">
                    Comentarios del profesor
                </Title>

                <Text mt={15} align='justify'>

                    Según tu desempeño en la tarea, te doy una puntuación de 18 sobre 20. ¡Excelente trabajo!

                </Text>
            </Modal>

            <Modal opened={openedUpload} size="xl" radius="md" onClose={closeu} withCloseButton={false}>
                <Title align="center">
                    Subir tarea
                </Title>
                <Dropzone
                    h={250}
                    p={50}
                    onDrop={(files) => console.log('accepted files', files)}
                    onReject={(files) => console.log('rejected files', files)}
                    maxSize={3 * 1024 ** 2}
                    accept={['image/png', 'image/jpeg', 'image/sgv+xml', 'image/gif', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/pdf', 'application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.ms-powerpoint', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.ms-excel']}
                    {...props}
                >
                    <Group position="center" spacing="xl" style={{ pointerEvents: 'none' }}>
                        <Dropzone.Accept>
                            <IconUpload
                                size="3.2rem"
                                stroke={1.5}
                                color={theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 6]}
                            />
                        </Dropzone.Accept>
                        <Dropzone.Reject>
                            <IconX
                                size="3.2rem"

                                stroke={1.5}
                                color={theme.colors.red[theme.colorScheme === 'dark' ? 4 : 6]}
                            />
                        </Dropzone.Reject>
                        <Dropzone.Idle>
                            <IconPhoto size="3.2rem" stroke={1.5} />
                        </Dropzone.Idle>

                        <div>
                            <Text size="xl" inline>
                                Arrastre los archivos aquí o haga clic para seleccionar los archivos
                            </Text>
                            <Text size="sm" color="dimmed" inline mt={7}>
                                Adjunte tantos archivos como desee, cada archivo no debe superar los 10mb
                            </Text>
                        </div>
                    </Group>
                </Dropzone>
                <Group position="center">

                    <Button size="md" mt={25} color="green" radius="md">
                        Subir
                    </Button>
                </Group>
            </Modal>

            <Card style={titleStyle} className={classes.containerCard} w="100%" h="100%">

                <Card radius="xl" withBorder  >

                    <Title align="center">
                        Tarea: Nombre del tarea
                    </Title>

                    <Divider my="sm" variant="dashed" />


                    <Card radius="xl" withBorder  >

                        <Card style={{ backgroundColor: "#F1F3F5" }} radius="xl" withBorder  >
                            <Homeworkstudentcontent />
                        </Card>


                        <Group position="center">

                            <Button onClick={openu} size="md" mt={25} color="indigo" radius="md">
                                Subir tarea
                            </Button>

                            <Button size="md" mt={25} color="indigo" radius="md">
                                Descargar contenido
                            </Button>

                        </Group>

                    </Card>

                    <Group mt={24.5} position="apart">
                        <Title order={1}>Nota 18/20 pts</Title>
                        <Button onClick={open} size="md" color="indigo" radius="md">
                            Comentarios del profesor
                        </Button>
                    </Group>
                </Card>
            </Card>
        </>
    );
}
export default Homeworkstudent;
