import Themecontentstudent from '../../components/Student/Themecontentstudent'
import { Card, Title,Divider, createStyles,Group, Button } from '@mantine/core';

function ThemeStudent() {

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

        <Card  radius="xl" withBorder  >
          <Title align="center">
            Tema: Nombre del tema
          </Title>
          <Divider my="sm" variant="dashed" />
          <Themecontentstudent />

          <Group position="center">

          <Button size="md" mt={25} color="indigo"  radius="xl">
            Descargar contenido
          </Button>
          </Group>

        </Card>
      </Card>
    </>
  );
}
export default ThemeStudent;
