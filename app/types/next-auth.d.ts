//types/next-auth.d.ts
import { UserRole } from '@prisma/client';
import { DefaultUser } from 'next-auth';
declare module 'next-auth' {
    interface Session {
        user?: DefaultUser & { id: string; role: UserRole[] };
    }
    interface User extends User {
        role: UserRole[];
    }
}