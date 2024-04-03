import { prisma } from '../src/lib/prisma'

async function seed() {
  await prisma.event.create({
    data: {
      id: '7ee86dae-a0b9-40a7-8a2c-3260cbceabc0',
      title: 'Seed Event',
      slug: 'seed-event',
      details: 'This is an seed event.',
      maximumAttendees: 100,
    },
  })
}

seed().then(() => {
  console.log('Database seeded!')
  prisma.$disconnect()
})
