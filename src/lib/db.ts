import { PrismaClient } from "@prisma/client";

declare global {
	var prisma: PrismaClient | undefined
}

export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') { globalThis.prisma = db }

/* 
	The above code lets Hot Reload from next.js not initialize too many new PrismaClients in development.
	If we do this: export const db = new PrismaClient(); - every time we change a line of code new prisma clients will be initialized, which is not what we want.
*/

