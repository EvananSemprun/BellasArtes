import { motion } from 'framer-motion';
import { Card, Title, Progress, Text, Group, Button } from '@mantine/core';
import { IconBook, IconHexagonalPyramidPlus, IconMath, IconPlant } from '@tabler/icons-react';

const jsonData = [
	{
		"nombre": "Matematica",
		"ruta": "#",
		"Profesor": "Jose Gonzalez",
		"Progresoactividades": 50,
		"icon": {
			"printIcon": <IconMath color='white' style={{ width: '50px', height: '50px', padding: 12.5, borderRadius: '100%' }} />
		}
	},
	{
		"nombre": "Fisica",
		"ruta": "#",
		"Profesor": "Jose Gonzalez",
		"Progresoactividades": 70,
		"icon": {
			"bg": "#D1D2F1",
			"printIcon": <IconHexagonalPyramidPlus color='white' style={{ width: '50px', height: '50px', padding: 12.5, borderRadius: '100%' }} />
		}
	},
	{
		"nombre": "Quimica",
		"ruta": "#",
		"Profesor": "Jose Gonzalez",
		"Progresoactividades": 20,
		"icon": {
			"bg": "#D1D2F1",
			"printIcon": <IconPlant color='white' style={{ width: '50px', height: '50px', padding: 12.5, borderRadius: '100%' }} />
		}
	},
	{
		"nombre": "Historia",
		"ruta": "#",
		"Profesor": "Jose Gonzalez",
		"Progresoactividades": 10,
		"icon": {
			"bg": "#D1D2F1",
			"printIcon": <IconBook color='white' style={{ width: '50px', height: '50px', padding: 12.5, borderRadius: '100%' }} />
		}
	}
];

function CardMaterial() {
	return (
		<>
			<Group>
				{jsonData.map((item, index) => (
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						whileHover={{ scale: 1.05 }}
					>
						<a href="/MateriaStudent" style={{ textDecoration: "none" }}>
							<Card
								w={295}
								radius="lg"
								style={{
									backgroundColor: '#E1E0E8',

								}}
							>

								<Card
									key={index}
									w={300}
									h={170}
									mt={-25}
									ml={-19}
									radius="lg"
									style={{
										backgroundColor: '#343263',
										boxShadow: '0px 6px 6px rgba(0, 0, 0, 0.1)',
									}}
								>
									<Group mt={-10} ml={-15}>
										{item.icon.printIcon}
										<Title color='white' fw={700} ml={-20} mb={5} order={3} >
											{item.nombre}
										</Title>
									</Group>

									<Text mt={-5} color='white' fz="xl" > Profesor: {item.Profesor}</Text>
									<Title mt={10} fz="sm" mb={5} color='white' order={5} fw={450}>
										Progreso
									</Title>
									<Progress
										size="xl"
										color='white'
										radius="xl"
										mb={5}
										bg='#E1E0E8'
										value={item.Progresoactividades}
									/>
									<Text fz="sm" color='white' fw={600}>
										{item.Progresoactividades}%
									</Text>
								</Card>
								<Group mt={22.5}>

									<Button radius="md" fz='sm' size="md" variant="white" style={{ color: 'white', background: '#343263' }}>
										Ver detalles
									</Button>
									<Button radius="md" w={120} fz='sm' size="md" variant="white" style={{ color: 'white', background: '#343263' }}>
										Profesor
									</Button>
								</Group>
							</Card>
						</a>

					</motion.div>
				))}
			</Group>
		</>
	);
}

export default CardMaterial;
