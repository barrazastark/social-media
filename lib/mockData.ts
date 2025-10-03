import { User, Post } from "@/lib/types"


export const posts: Post[] = [
    {
      id: "p1",
      authorId: "u1",
      title: "Hello World 👋",
      content: {
        title: "Title example 1",
        image:
          "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?q=80&w=1200&auto=format&fit=crop",
      },
      createdAt: "1 hour ago",
      likes: 42,

    },
    {
      id: "p2",
      authorId: "u2",
      title: "This social media rules",
      content: {
        title: "Lorem ipsum dolor",
        image: "https://digitalcubik.com/wp-content/uploads/2022/08/post.jpg"
      },
      createdAt: "2 hours ago",
      likes: 13,
    },
  ];

export const users: User[] = [
    {
      id: "u1",
      username: "johndoe",
      name: "John Doe",
      avatarUrl:
        "https://api.dicebear.com/7.x/avataaars/svg?seed=Alice&backgroundColor=b6e3f4",
      bio: "Frontend developer",
      friends: ["username1", "username2"],
      stats: { posts: 3, followers: 320, following: 190 },
      myPosts: [posts[0],posts[1]],
    },
    {
      id: "u2",
      username: "bob",
      name: "Bob Smith",
      avatarUrl:
        "https://api.dicebear.com/7.x/avataaars/svg?seed=Bob&backgroundColor=c0aede",
      bio: "TS enjoyer.",
      friends: ["u1"],
      stats: { posts: 2, followers: 120, following: 88 },
      myPosts: [],
    },
    {
      id: "u3",
      username: "josebarraza",
      name: "Jose Barraza",
      avatarUrl:
        "https://api.dicebear.com/7.x/avataaars/svg?seed=Charlie&backgroundColor=ffd5dc",
      bio: "Loves Tech.",
      friends: ["u1"],
      stats: { posts: 1, followers: 55, following: 40 },
      myPosts: [],
    },
  ];


