import { PrismaClient} from "../lib/generated/prisma/client";
import products from "./products.json" with {type : "json"}
import pg from "pg"
import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv/config"

//check
console.log("Check URL : ",process.env.DATABASE_URL ? "OK" : "MISSING")

 const connectionString =process.env.DATABASE_URL
const pool = new pg.Pool({connectionString})

const adapter = new PrismaPg(pool)

const prisma = new PrismaClient({adapter});

async function main() {
  for (const product of products) {
    await prisma.product.create({
      data: product,
    });
  } 
  console.log(`✅ Seed success: ${products.length} products inserted`);
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });