import Examenstudentcontent from '../../components/Student/Examenstudentcontent'
import { Card, Group, Title, Button, createStyles, Divider } from '@mantine/core';

function Examenstudent() {

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
    return (
        <>



            <Card style={titleStyle} className={classes.containerCard} w="100%" h="100%">

                <Card radius="xl" withBorder  >

                    <Title align="center">
                        Examen: Nombre del Examen
                    </Title>

                    <Divider my="sm" variant="dashed" />


                    <Card radius="xl" withBorder  >

                        <Card style={{ backgroundColor: "#F1F3F5" }} radius="xl" withBorder  >
                            <Examenstudentcontent />
                        </Card>


                        <Group position="center">

                            <Button size="md" mt={25} color="indigo" radius="md">
                                Subir Examen
                            </Button>

                            <Button size="md" mt={25} color="indigo" radius="md">
                                Entrar en el examen
                            </Button>

                        </Group>

                    </Card>

                    <Group mt={24.5} position="apart">
                        <Title order={1}>Nota 16/20 pts</Title>
                        <Button size="md" color="indigo" radius="md">
                            Comentarios del profesor
                        </Button>
                    </Group>
                </Card>

            </Card>

        </>
    );
}

export default Examenstudent;