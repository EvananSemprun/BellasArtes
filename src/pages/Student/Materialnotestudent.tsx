import { Card, Select, Group, Badge, SegmentedControl, Table, createStyles } from '@mantine/core';

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
    const elements = [
        { titulo: "Examen 1", note: 20, porcentaje: 20 },
        { titulo: "Tarea 1", note: 19, porcentaje: 20 },
        { titulo: "Examen 2", note: 17, porcentaje: 20 },
        { titulo: "Examen 3", note: 10, porcentaje: 20 },
        { titulo: "Tarea 2", note: 9, porcentaje: 20 },
    ];
    const rows = elements.map((element) => (
        <tr >

            <td>{element.titulo}</td>
            <td>
                <Badge color={element.note < 10 ? "red" : (element.note >= 10 && element.note <= 17) ? "yellow" : "green"} radius="sm">
                    {element.note} pts
                </Badge>
            </td>


            <td>{element.porcentaje} %</td>
        </tr>
    ));
    return (
        <>


            <Card style={titleStyle} className={classes.containerCard} w="100%" h="100%">

                <Group position="center">

                    <SegmentedControl
                        color="indigo"
                        data={[
                            { label: 'Lapso 1', value: 'Lapso 1' },
                            { label: 'Lapso 2', value: 'Lapso 2' },
                            { label: 'Lapso 3', value: 'Lapso 3' },

                        ]}
                    />

                </Group>
                <Select
                    label="Selecciona una materia"
                    placeholder="Selecciona una"
                    radius={"lg"}
                    variant="default"
                    data={[
                        { value: 'Matematica', label: 'Matematica' },
                        { value: 'Fisica', label: 'Fisica' },
                        { value: 'Quimica', label: 'Quimica' },
                        { value: 'Historia', label: 'Historia' },
                    ]}
                />


                <Table mt={65} striped highlightOnHover withBorder>
                    <thead>
                        <tr>
                            <th>Titulo de la actividad</th>
                            <th>Nota</th>
                            <th>Porcentaje</th>

                        </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                </Table>
            </Card>

        </>
    );
}

export default Examenstudent;
