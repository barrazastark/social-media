export interface User {
id: string;
username: string;
name: string;
avatarUrl: string;
bio: string;
friends: string[];
stats: {
    posts: number;
    followers: number;
    following: number;
};
myPosts: Post[]
}

export interface Post {
id: string;
authorId: string;
title: string;
content: {
    title: string;
    image: string;
}
createdAt: string;
likes: number;
}

