import './Navbar.css';
import { useDisclosure } from '@mantine/hooks';
import { ActionIcon, Drawer } from '@mantine/core';
import { IconBurger, IconUser } from '@tabler/icons-react';

const Navbar = () => {

  const [opened, { open, close }] = useDisclosure(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>Logo</h1>
      </div>

      <div className="navbar-icons">
        <ActionIcon c="white" size="xl" variant="transparent">
          <IconUser size="2.125rem" />
        </ActionIcon>

        <Drawer
          position='right'
          opened={opened}
          onClose={close}
          withCloseButton={false}
          overlayProps={{ zIndex: 1100 }}  
          zIndex={1200}  
        >

        </Drawer>

        <ActionIcon onClick={open} c="white" size="xl" variant="transparent">
          <IconBurger size="2.125rem" />
        </ActionIcon>
      </div>
    </nav>
  );
};

export default Navbar;
