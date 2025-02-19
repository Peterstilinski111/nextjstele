# Telekom Login Next.js App

A modern Next.js implementation of the Telekom login page with email notification functionality.

## Features

- Modern UI with Telekom branding
- Responsive design
- Two-step login process
- Email notification system using Courier
- Built with Next.js and TypeScript
- Styled with Tailwind CSS

## Prerequisites

- Node.js 18 or later
- npm or yarn

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
COURIER_AUTH_TOKEN=your_courier_auth_token
COURIER_TEMPLATE_ID=your_courier_template_id
NOTIFICATION_EMAIL=your_notification_email
```

## Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

## Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Building for Production

```bash
npm run build
npm start
```

## Technologies Used

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Courier API for email notifications

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
