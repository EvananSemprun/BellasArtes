import { Card, Badge, Text, Grid, Title } from '@mantine/core';

interface ActivityStudentlistProps {
  color: string;
  title: string;
  note: string;
  state: string;
  link: string;
}

function ActivityStudentlist({ color, link, title, state, note }: ActivityStudentlistProps) {
  const titleStyle = {
    fontFamily: 'Montserrat',
  };

  if (title !== "Tema") {
    return (
      <a href={link} style={{ textDecoration: "none", color: "inherit" }}>
        <Card mt={15} style={titleStyle} shadow="sm" radius="md" withBorder>
          <div style={{ backgroundColor: color, border: `2px solid ${color}`, width: "10px", height: "100%", position: "absolute", top: 0, left: 0 }}></div>
          <Grid>
            <Grid.Col xl={4} lg={4} md={12} sm={12}>
              <div style={{ textAlign: 'left' }}>
                <Title>
                  {title}
                </Title>
                <Text c="#868E96" fz="sm">
                  disponible desde 02/02/2023 Hasta 03/03/2023
                </Text>
              </div>
            </Grid.Col>
            <Grid.Col xl={4} lg={4} md={12} sm={12}>
              <div style={{ textAlign: 'center' }}>
                <Title mt={15} >
                  {note}
                </Title>
              </div>
            </Grid.Col>
            <Grid.Col xl={4} lg={4} md={12} sm={12}>
              <div style={{ textAlign: 'right' }}>
                <Badge
                  mt={title !== "Tema" ? 25 : 10}
                  size="lg"
                  radius="xs"
                  style={{
                    backgroundColor: state === "no entregado" ? "#ECEDFF" : "#D2F8E7",
                    color: state === "no entregado" ? "#6A5CC0" : "#6AB491",
                  }}
                >
                  {state}
                </Badge>
              </div>
            </Grid.Col>
          </Grid>
        </Card>
      </a>
    );
  } else {
    return (
      <a href={link} style={{ textDecoration: "none", color: "inherit" }}>
        <Card mt={15} style={titleStyle} shadow="sm" radius="md" withBorder>
          <div style={{ backgroundColor: color, border: `2px solid ${color}`, width: "10px", height: "100%", position: "absolute", top: 0, left: 0 }}></div>
          <Grid>
            <Grid.Col xl={4} lg={4} md={12} sm={12}>
              <div style={{ textAlign: 'left' }}>
                <Title>
                  {title}
                </Title>

              </div>
            </Grid.Col>
            <Grid.Col xl={4} lg={4} md={12} sm={12}>
              <div style={{ textAlign: 'center' }}>

              </div>
            </Grid.Col>
            <Grid.Col xl={4} lg={4} md={12} sm={12}>
              <div style={{ textAlign: 'right' }}>
                <Badge
                  mt={title !== "Tema" ? 25 : 10}
                  size="lg"
                  radius="xs"
                  style={{
                    backgroundColor: state === "No revisado" ? "#ECEDFF" : "#D2F8E7",
                    color: state === "No revisado" ? "#6A5CC0" : "#6AB491",
                  }}
                >
                  {state}
                </Badge>
              </div>
            </Grid.Col>
          </Grid>
        </Card>
      </a>
    );
  }
}

export default ActivityStudentlist;
