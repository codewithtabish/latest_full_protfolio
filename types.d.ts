// types.d.ts

import { BlogStatus, NotificationType } from '@prisma/client';

declare global {
    // Prisma-generated types are automatically imported when you use @prisma/client
    type Comment = {
        id: string;
        content: string;
        userId: string;
        blogId?: string;
        projectId?: string;
        user: User;
        blog?: Blog;
        project?: Project;
        createdAt: Date;
    };

    type Blog = {
        id: string;
        title: string;
        content: any; // Adjust as needed, since it's a JSON field in Prisma
        blogTopImage: string;
        userId: string;
        user: User;
        views: number;
        likes: number;
        status: BlogStatus;
        published: boolean;
        createdAt: Date;
        updatedAt: Date;
        comments: Comment[];
        likesList: BlogLike[];
        viewsArray: BlogViews[];
        recommendations: BlogRecommendation[];
    };

    type Project = {
        id: string;
        name: string;
        description: string;
        userId: string;
        likes: number;
        projectTopImage: string;
        user: User;
        createdAt: Date;
        updatedAt: Date;
        likesList: ProjectLike[];
        comments: Comment[];
        videoUrl: string;
        githubUrl: string;
        demoUrl: string;
        liveWebUrl?: string;
        techStacks: any; // Adjust this type for your specific structure
        ProjectRecommendation: ProjectRecommendation[];
    };

    type User = {
        id: string;
        name: string;
        email: string;
        password: string;
        isAdmin: boolean;
        createdAt: Date;
        updatedAt: Date;
        blogs: Blog[];
        courses: Course[];
        notifications: Notification[];
        projects: Project[];
        blogRecommendations: BlogRecommendation[];
        projectRecommendations: ProjectRecommendation[];
        comments: Comment[];
        BlogViews: BlogViews[];
        BlogLike: BlogLike[];
        ProjectLike: ProjectLike[];
    };

    type BlogLike = {
        id: string;
        userId: string;
        blogId: string;
        user: User;
        blog: Blog;
        createdAt: Date;
    };

    type ProjectLike = {
        id: string;
        userId: string;
        projectId: string;
        user: User;
        project: Project;
        createdAt: Date;
    };

    type Notification = {
        id: string;
        userId: string;
        content: string;
        type: NotificationType;
        isRead: boolean;
        user: User;
        createdAt: Date;
    };

    type Course = {
        id: string;
        title: string;
        description: string;
        userId: string;
        user: User;
        createdAt: Date;
        updatedAt: Date;
    };

    type BlogViews = {
        id: string;
        userId: string;
        blogId: string;
        views: number;
        user: User;
        blog: Blog;
        createdAt: Date;
    };

    type BlogRecommendation = {
        id: string;
        userId: string;
        blogId: string;
        user: User;
        blog: Blog;
        createdAt: Date;
    };

    type ProjectRecommendation = {
        id: string;
        userId: string;
        projectId: string;
        user: User;
        project: Project;
        createdAt: Date;
    };
}

export { }; // Ensures the file is treated as a module
