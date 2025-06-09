# Landing Page Generator Chatbot

A Next.js application that uses AI to generate beautiful landing pages through a chat interface. The application provides real-time preview of the generated HTML and CSS code.

## Features

- 🔐 Authentication using NextAuth.js
- 💬 Real-time chat interface with AI
- 🎨 Live preview of generated landing pages
- 📱 Responsive design
- 🎯 Optimized for landing page generation
- 🔒 Secure authentication
- 🚀 Built with modern web technologies

## Tech Stack

- Framework: Next.js 14
- Language: TypeScript
- UI Components: Tailwind CSS, ShadcnUI
- Authentication: NextAuth.js
- Database: PostgreSQL with Prisma
- AI: OpenAI GPT-4 with Vercel AI SDK
- Hosting: Vercel

## Prerequisites

- Node.js 18+ and npm
- PostgreSQL database
- OpenAI API key

## Getting Started

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-name>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory with the following variables:
   ```
   DATABASE_URL="postgresql://user:password@localhost:5432/your_database"
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="your-secret-key"
   OPENAI_API_KEY="your-openai-api-key"
   ```

4. Set up the database:
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. Run the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   ├── auth/
│   │   └── chat/
│   ├── chat/
│   ├── login/
│   └── register/
├── components/
│   ├── auth/
│   ├── chat/
│   └── ui/
├── lib/
│   ├── prisma.ts
│   └── utils.ts
└── types/
```

## Features

### Authentication
- Email/password authentication
- Secure session management
- Protected routes

### Chat Interface
- Real-time chat with AI
- Message history
- Loading states
- Error handling

### Code Generation
- HTML and CSS code generation
- Live preview
- Responsive design
- Modern UI components

### Database
- User management
- Chat history
- Message storage

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
