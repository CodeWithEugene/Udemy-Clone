# Udemy Clone

A fully functional replica of the Udemy website homepage and course platform, built with React, TypeScript, and Tailwind CSS. This project demonstrates modern web development practices with a responsive layout, dynamic course displays, shopping cart functionality, and a clean, modern user interface.

## 🚀 Features

### Core Functionality
- **Homepage**: Complete replica of Udemy's homepage with hero section, featured courses, categories, and partner logos
- **Course Catalog**: Browse courses by category with detailed course information
- **Course Details**: Individual course pages with comprehensive information including:
  - Course overview and description
  - Instructor bio
  - What you'll learn section
  - Course requirements
  - Detailed course content with lectures
  - Student reviews and ratings
- **Shopping Cart**: Add/remove courses with persistent local storage
- **Checkout Process**: Complete checkout flow with order confirmation
- **My Learning**: Access purchased courses and learning materials
- **Responsive Design**: Mobile-first approach with Tailwind CSS

### Technical Features
- **TypeScript**: Full type safety throughout the application
- **React Context**: State management for cart and learning progress
- **Custom Router**: Client-side routing without external dependencies
- **Local Storage**: Persistent cart and learning data
- **Mock API**: Simulated API calls with realistic data
- **Component Architecture**: Well-organized, reusable components

## 🛠️ Tech Stack

- **Frontend**: React 19.1.1
- **Language**: TypeScript 5.8.2
- **Styling**: Tailwind CSS
- **Build Tool**: Vite 6.2.0
- **Development**: Hot Module Replacement (HMR)

## 📁 Project Structure

```
udemy-clone/
├── src/
│   ├── api/                 # API layer and mock data
│   │   ├── courses.ts       # Course API functions
│   │   └── mock.ts          # Mock course data
│   ├── components/          # React components
│   │   ├── common/          # Shared components
│   │   ├── course/          # Course-specific components
│   │   ├── home/            # Homepage components
│   │   ├── layout/          # Layout components (Header, Footer)
│   │   ├── learning/        # Learning interface components
│   │   └── shared/          # Reusable components
│   ├── contexts/            # React Context providers
│   │   ├── CartContext.tsx  # Shopping cart state
│   │   └── LearningContext.tsx # Learning progress state
│   ├── hooks/               # Custom React hooks
│   ├── pages/               # Page components
│   ├── router/              # Custom routing implementation
│   ├── styles/              # Global styles
│   ├── types/               # TypeScript type definitions
│   └── utils/               # Utility functions
├── components/              # Legacy components (root level)
├── pages/                   # Legacy pages (root level)
├── App.tsx                  # Main application component
├── index.tsx                # Application entry point
├── index.html               # HTML template
├── package.json             # Dependencies and scripts
├── tsconfig.json            # TypeScript configuration
├── vite.config.ts           # Vite configuration
└── metadata.json            # Project metadata
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd udemy-clone
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the application

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build locally

## 🎯 Usage

### Navigation
- **Homepage**: Browse featured courses, categories, and partner information
- **Course Pages**: Click on any course to view detailed information
- **Shopping Cart**: Add courses to cart and proceed to checkout
- **My Learning**: Access purchased courses and learning materials

### Key Features
1. **Course Browsing**: Navigate through different course categories
2. **Course Details**: View comprehensive course information including:
   - Course description and learning objectives
   - Instructor information and bio
   - Course content structure with lectures
   - Student reviews and ratings
3. **Shopping Cart**: Add multiple courses and manage your cart
4. **Checkout**: Complete the purchase process
5. **Learning Interface**: Access course materials after purchase

## 🎨 Design Features

- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design matching Udemy's aesthetic
- **Interactive Elements**: Hover effects, smooth transitions, and engaging animations
- **Accessibility**: Semantic HTML and keyboard navigation support
- **Performance**: Optimized loading and smooth user experience

## 🔧 Configuration

### Environment Variables
The application supports environment variables for API configuration:
- `GEMINI_API_KEY`: For potential AI integration features

### Customization
- **Styling**: Modify Tailwind CSS classes in components
- **Data**: Update mock data in `src/api/mock.ts`
- **Routing**: Add new routes in `src/router/index.tsx`
- **Components**: Extend or modify components in the `src/components/` directory

## 📱 Responsive Design

The application is fully responsive and optimized for:
- **Desktop**: Full-featured experience with all components visible
- **Tablet**: Adapted layout with optimized spacing
- **Mobile**: Touch-friendly interface with collapsible navigation

## 🧪 Development

### Adding New Features
1. Create components in the appropriate directory under `src/components/`
2. Add new routes in `src/router/index.tsx`
3. Update types in `src/types/index.ts` if needed
4. Add mock data in `src/api/mock.ts` for new features

### Code Organization
- Components are organized by feature and functionality
- Shared components are in `src/components/common/` and `src/components/shared/`
- Page-specific components are in their respective directories
- Context providers manage global state

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by Udemy's design and functionality
- Built with modern web development best practices
- Uses Tailwind CSS for styling
- React and TypeScript for robust development

## 📞 Support

If you have any questions or need help with the project, please open an issue in the repository.

---

**Note**: This is a clone project for educational purposes. All course data is mock data and not affiliated with the actual Udemy platform.
