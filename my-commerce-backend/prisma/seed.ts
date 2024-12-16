import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create users
  await prisma.user.createMany({
    data: [
      { email: 'jon.snow@example.com', password: 'castle_black' },
      { email: 'harry.potter@example.com', password: 'abrakadabra' },
      { email: 'pep_guardiola@example.com', password: 'tiki_taka45' },
      { email: 'ruben.amorim@example.com', password: 'portugalbest' },
    ],
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
      { name: 'Fitness Band', description: 'Track your workouts and health', price: 100, image: '/fitnessband.jpg' },
      { name: 'Digital Photo Frame', description: 'Display your memories in style', price: 120, image: '/photoframe.jpg' },
      { name: 'E-Reader', description: 'Read books digitally anywhere', price: 200, image: '/ereader.jpg' },
      { name: 'AI Powered Drone', description: 'Drone with advanced AI capabilities', price: 2500, image: '/aidrone.jpg' },
      { name: 'Robot Dog', description: 'Companion robot with playful features', price: 4000, image: '/robotdog.jpg' },
      { name: 'Gaming Console', description: 'Next-gen gaming console', price: 500, image: '/console.jpg' },
      { name: 'Streaming Stick', description: 'Stream your favorite shows easily', price: 50, image: '/streamingstick.jpg' },
      { name: 'Portable Monitor', description: 'Second screen for productivity', price: 300, image: '/portablemonitor.jpg' },
      { name: 'Mechanical Keyboard', description: 'Tactile keyboard for typing', price: 150, image: '/keyboard.jpg' },
    ],
  });

  // Create cart items
  await prisma.cart.createMany({
    data: [
      { userId: 1, productId: 1, quantity: 2 }, // Jon Snowe's cart
      { userId: 1, productId: 4, quantity: 1 },
      { userId: 2, productId: 3, quantity: 3 }, // Harry Potter's cart
      { userId: 2, productId: 5, quantity: 1 },
      { userId: 3, productId: 2, quantity: 1 }, // Pep Guardiola's cart
      { userId: 3, productId: 6, quantity: 2 },
      { userId: 4, productId: 7, quantity: 1 }, // Ruben Amorim's cart
      { userId: 4, productId: 8, quantity: 3 },
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

