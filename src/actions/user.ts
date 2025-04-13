'use server';

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { db } from "@/lib/db";
import { User } from "@prisma/client";
import { APIRESPONSE } from "../../types";

export const saveAndGetUser = async (): Promise<APIRESPONSE<User>> => {
    try {
        const { getUser } = getKindeServerSession();
        const user = await getUser();

        if (!user) {
            return {
                error: "User not authenticated.",
                message: "No user session found.",
            };
        }

        // Check DB connection before calling
        let existingUser: User | null = null;

        try {
            existingUser = await db.user.findUnique({
                where: { id: user.id },
            });
        } catch (err: any) {
            console.error("Failed to reach DB:", err?.message || err);
            return {
                error: "Database connection error.",
                message: "Could not retrieve user from database.",
            };
        }

        if (!existingUser) {
            try {
                const newUser = await db.user.create({
                    data: {
                        id: user.id,
                        email: user.email ?? "",
                        name: user.given_name ?? "",
                        isAdmin: false,
                        profilePicture: user.picture ?? "https://avatar.iran.liara.run/public",
                    },
                });

                return {
                    data: newUser,
                    message: "User created successfully.",
                };
            } catch (err: any) {
                console.error("Failed to create user:", err?.message || err);
                return {
                    error: "Failed to create user.",
                    message: "Database write error.",
                };
            }
        }

        return {
            data: existingUser,
            message: "User retrieved successfully.",
        };

    } catch (error: any) {
        console.error("Unexpected error in saveAndGetUser:", error);
        return {
            error: error.message || "An unexpected error occurred.",
            message: "Failed to save or retrieve user.",
        };
    }
};
