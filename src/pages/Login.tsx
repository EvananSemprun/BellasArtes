import { useWindowSize } from "@uidotdev/usehooks";
import {
  Paper,
  createStyles,
  TextInput,
  PasswordInput,
  Checkbox,
  Button,
  Title,
  rem,
  Image
} from '@mantine/core';

function Login() {
  const size = useWindowSize();

  const useStyles = createStyles((theme) => ({
    login: {
      overflowY: 'hidden',
      maxHeight: `calc(${size.height}px)`
    },

    wrapper: {
      minHeight: `calc(${size.height}px)`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundImage:
        'url(https://cba.edu.ve/images/bellasartes.jpg)',
      backgroundPosition: "left"
    },

    form: {
      borderRight: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[3]
        }`,
      minHeight: `calc(${size.height}px)`,
      maxWidth: rem(450),
      paddingTop: rem(80),

      [theme.fn.smallerThan('sm')]: {
        maxWidth: '100%',
      },
    },

    title: {
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    },
  }));

  const { classes } = useStyles();

  return (
    <section className={classes.login}>
      <div className={classes.wrapper}>
        <Paper className={classes.form} radius={0} p={30}>
          <Image
            maw={240}
            mx="auto"

            radius="md"
            src="https://cba.edu.ve/images/cba.png"
            alt="Logo"
          />

          <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
            Colegio Bellas Artes
          </Title>

          <TextInput label="Correo" placeholder="estudiante@bellasartes.com" size="md" />
          <PasswordInput label="Contraseña" placeholder="********" mt="md" size="md" />
          <Checkbox label="Mantener sesión" mt="xl" size="md" />
          <a href="/HomeStudent">
            <Button fullWidth mt="xl" size="md">
              Entrar
            </Button>
          </a>


          {/* <Text ta="center" mt="md">
            ¿Olvidaste tu contraseña?{' '}
            <Anchor<'a'> href="#" weight={700} onClick={(event) => event.preventDefault()}>
              Presiona aquí
            </Anchor>
          </Text> */}
        </Paper>
      </div>
    </section>
  );
}
export default Login;
