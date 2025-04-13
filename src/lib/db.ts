// lib/db.ts

import { PrismaClient } from '@prisma/client'

declare global {
    // For hot-reload safety in development
    var db: PrismaClient | undefined
}

export const db = global.db || new PrismaClient()

if (process.env.NODE_ENV !== 'production') {
    global.db = db
}
