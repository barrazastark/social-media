This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## My Thoughts - Fulltrace of changes

- First I Will create a /lib folder where I am going to include a types.ts where I am going to define the 
types and data structures needed for the Social APP.

- Now I will create the Profile page, where I am going to include:
    - Avatar
    - Name
    - Nickname
    - Bio
    - Stats
    - Tabs for Posts and Friends List

- I will split Profile page into two components , the first one is the page (server component) that has the responsability to fetch the data and the other (client) that will accepts the response as props and display the information. With this approach I am not only splitting responsabilities but this is more SEO friendly and loads faster.

- For the profile page I will create a /api/me route that will serve all the information for the profile page.

- I will create a Nav.tsx where I include
    - Title of WebPage
    - Feed link
    - Profile link

- I will modify the main layout.tsx to include the Navbar globally, and the main content should stay in the middle like social media style

- I will create a Post component that should display a Post Card

- I will create a API route for fetching /posts , I will create a mockData.ts where I will include an array of harcoded posts this mockData Will be used for the API handler

- I will create the Feed Page (Home), that will render a list of Post, the Feed page will be a server component that will fetch the /posts internal api

- Now I will create the /posts/id page.tsx where I am goind to fetch for an individual post, so first I will create the /posts/id API route, then I will counsume in the post detail page.

- Now I will polish the Look & Feel


## What can be improved ?

- If i had more time I would improve the UI/UX by adding more astetic loaders (skeletons), optimistic responses and streaming data correctly.

- I would create a more sofisticated Post detail view with all the comments of the posts

- I would add a infinity scroll behavior on the Feed page to load more random posts

- I would create a more interesting feature regarding friends.


## [Live Demo](https://social-media-kappa.vercel.app/)


