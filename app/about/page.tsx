import { prisma } from "@/lib/prisma";

async function AboutPage() {
  const profile = await prisma.testProfile.create({
    data: {
      name: "random name",
    },
  });

  const users = await prisma.testProfile.findMany();

  return (
    <div>
      {users.map((user) => {
        return (
          <h2 key={user.id} className="text-2xl font-bold">
            {user.name}
          </h2>
        );
      })}
    </div>
  );
}
export default AboutPage;
