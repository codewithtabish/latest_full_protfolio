'use client'
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { PrismaClient } from "@prisma/client"; // Prisma Client
import { APIRESPONSE } from "../../types";
import { User, Project } from "@prisma/client";

// Define the type for the data argument
type CreateProjectData = {
    name: string;
    description: string;
    projectTopImage: string;
    videoUrl: string;
    githubUrl: string;
    demoUrl: string;
    liveWebUrl?: string;
    techStacks: string[];
};

const prisma = new PrismaClient(); // Instantiate Prisma Client

const createProject = async (data: CreateProjectData): Promise<APIRESPONSE<Project>> => {
    try {
        // Get user session from Kinde auth
        const { getUser } = getKindeServerSession();
        const user = await getUser();

        // Check if user is authenticated
        if (!user) {
            return {
                error: "User not authenticated.",
                message: "No user session found.",
            };
        }

        // Destructure the data object to get the required project fields
        const { name, description, projectTopImage, videoUrl, githubUrl, demoUrl, liveWebUrl, techStacks } = data;

        // Create a new project in the database
        const newProject = await prisma.project.create({
            data: {
                name,
                description,
                projectTopImage,
                videoUrl,
                githubUrl,
                demoUrl,
                liveWebUrl,
                techStacks: techStacks ? techStacks : [],  // default to an empty array if techStacks is not provided
                userId: user.id,  // Associate the project with the authenticated user
                likes: 0,  // Default likes to 0
            },
        });

        // Return the response with the newly created project
        return {
            data: newProject,
            message: "Project created successfully.",
        };
    } catch (error) {
        console.error("Error creating project: ", error);
        return {
            error: "Internal server error.",
            message: "An error occurred while creating the project.",
        };
    }
};

export default createProject;
