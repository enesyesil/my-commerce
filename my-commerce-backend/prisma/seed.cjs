const bcrypt = require('bcrypt');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  // Hash passwords for the users
  const users = [
    { email: 'jon.snow@example.com', password: 'castle_black' },
    { email: 'harry.potter@example.com', password: 'abrakadabra' },
    { email: 'pep_guardiola@example.com', password: 'tiki_taka45' },
    { email: 'ruben.amorim@example.com', password: 'portugalbest' },
  ];

  // Hash each user's password
  for (const user of users) {
    user.password = await bcrypt.hash(user.password, 10);
  }

  // Insert users into the database
  await prisma.user.createMany({
    data: users,
  });

  // Create products
  await prisma.product.createMany({
    data: [
      { name: 'MacBook Pro', description: 'Powerful laptop with M1 chip', price: 2500, image: '/macbook.jpg' },
      { name: 'iPad Air', description: 'Lightweight tablet with great performance', price: 800, image: '/ipadair.jpg' },
      { name: 'Apple Watch', description: 'Smart wearable with fitness tracking', price: 400, image: '/applewatch.jpg' },
      { name: 'AI Robot', description: 'Personal AI assistant robot', price: 1500, image: '/airobot.jpg' },
      { name: 'AirPods Pro', description: 'Noise-cancelling earbuds', price: 250, image: '/airpodspro.jpg' },
      { name: 'Smart Glasses', description: 'Augmented reality wearable glasses', price: 1200, image: '/smartglasses.jpg' },
      { name: 'GoPro Camera', description: 'Action camera for adventures', price: 500, image: '/gopro.jpg' },
      { name: 'Gaming Laptop', description: 'High-performance laptop for gaming', price: 1800, image: '/gaminglaptop.jpg' },
      { name: 'VR Headset', description: 'Virtual reality headset for gaming', price: 700, image: '/vrheadset.jpg' },
      { name: 'Smart Thermostat', description: 'Control your home temperature remotely', price: 250, image: '/thermostat.jpg' },
      { name: 'Drone', description: 'Quadcopter with HD camera', price: 1000, image: '/drone.jpg' },
      { name: 'Robot Vacuum', description: 'Smart vacuum cleaner', price: 400, image: '/robotvacuum.jpg' },
      { name: 'Wireless Charger', description: 'Fast wireless charger', price: 50, image: '/wirelesscharger.jpg' },
      { name: 'Noise-Cancelling Headphones', description: 'Over-ear headphones with ANC', price: 300, image: '/headphones.jpg' },
      { name: 'Smartphone', description: 'Flagship smartphone with latest features', price: 1200, image: '/smartphone.jpg' },
      { name: 'Smart Speaker', description: 'Voice-controlled smart speaker', price: 150, image: '/smartspeaker.jpg' },
      { name: 'Electric Scooter', description: 'Portable electric scooter', price: 900, image: '/scooter.jpg' },
      { name: 'Bluetooth Tracker', description: 'Find your lost items easily', price: 40, image: '/tracker.jpg' },
      { name: 'Portable Projector', description: 'Compact projector for movies', price: 350, image: '/projector.jpg' },
      { name: 'Smart Ring', description: 'Wearable ring with health tracking', price: 300, image: '/smartring.jpg' },
    ],
  });

  console.log('Database seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
