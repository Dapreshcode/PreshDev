    import { PrismaClient, FeatureCategory } from "../src/generated/prisma/client";
    import { PrismaPg } from "@prisma/adapter-pg";


    const adapter = new PrismaPg({ 
      connectionString: process.env.DATABASE_URL,
    });  //In Prisma 7, the generated Prisma Client requires a driver adapter when connecting to the database. In Prisma 7, the generated Prisma Client requires a driver adapter when connecting to the database.
    //Since we're using PostgreSQL, we'll use Prisma's PostgreSQL adapter.


    const prisma = new PrismaClient({
      adapter,
    });



    const industryFeatures = [
      //restaurant
      {
    name: "Menu Display",
    slug: "menu-display",
    description: "Display food and beverage menus.",
    category: "INDUSTRY" as const,
    isDefault: false,
  },
  {
    name: "Reservation System",
    slug: "reservation-system",
    description: "Allow customers to reserve tables online.",
    category: "INDUSTRY" as const,
    isDefault: false,
  },
  {
    name: "Opening Hours",
    slug: "opening-hours",
    description: "Display business opening and closing hours.",
    category: "INDUSTRY" as const,
    isDefault: false,
  },
  {
    name: "Food Gallery",
    slug: "food-gallery",
    description: "Showcase meals and drinks.",
    category: "INDUSTRY" as const,
    isDefault: false,
  },

  //health
  {
    name: "Appointment Booking",
    slug: "appointment-booking",
    description: "Allow patients to schedule appointments.",
    category: "INDUSTRY" as const,
    isDefault: false,
  },
  {
    name: "Doctor Directory",
    slug: "doctor-directory",
    description: "Display doctors and specialists.",
    category: "INDUSTRY" as const,
    isDefault: false,
  },
  {
    name: "Department Directory",
    slug: "department-directory",
    description: "List hospital departments and services.",
    category: "INDUSTRY" as const,
    isDefault: false,
  },
  {
    name: "Emergency Contact",
    slug: "emergency-contact",
    description: "Display emergency contact information.",
    category: "INDUSTRY" as const,
    isDefault: false,
  },
  {
    name: "Health Services",
    slug: "health-services",
    description: "Display healthcare services offered.",
    category: "INDUSTRY" as const,
    isDefault: false,
  },
  //education
  {
    name: "Admissions Information",
    slug: "admissions-information",
    description: "Provide admission requirements and procedures.",
    category: "INDUSTRY" as const,
    isDefault: false,
  },
  {
    name: "Academic Calendar",
    slug: "academic-calendar",
    description: "Display school calendar and events.",
    category: "INDUSTRY" as const,
    isDefault: false,
  },
  {
    name: "Faculty Directory",
    slug: "faculty-directory",
    description: "Display academic staff.",
    category: "INDUSTRY" as const,
    isDefault: false,
  },
  {
    name: "Course Programs",
    slug: "course-programs",
    description: "Display available courses and programs.",
    category: "INDUSTRY" as const,
    isDefault: false,
  },
  {
    name: "Student Portal",
    slug: "student-portal",
    description: "Provide access to the student portal.",
    category: "INDUSTRY" as const,
    isDefault: false,
  },
  //law firm
  {
    name: "Practice Areas",
    slug: "practice-areas",
    description: "Display legal practice areas.",
    category: "INDUSTRY" as const,
    isDefault: false,
  },
  {
    name: "Attorney Profiles",
    slug: "attorney-profiles",
    description: "Showcase lawyers and legal professionals.",
    category: "INDUSTRY" as const,
    isDefault: false,
  },
  {
    name: "Consultation Booking",
    slug: "consultation-booking",
    description: "Allow visitors to book consultations.",
    category: "INDUSTRY" as const,
    isDefault: false,
  },
  {
    name: "Legal Resources",
    slug: "legal-resources",
    description: "Publish legal articles and guides.",
    category: "INDUSTRY" as const,
    isDefault: false,
  },

  //lawfirm
  {
    name: "Sermons Library",
    slug: "sermons-library",
    description: "Publish sermons and teachings.",
    category: "INDUSTRY" as const,
    isDefault: false,
  },
  {
    name: "Prayer Request",
    slug: "prayer-request",
    description: "Allow visitors to submit prayer requests.",
    category: "INDUSTRY" as const,
    isDefault: false,
  },
  {
    name: "Online Giving",
    slug: "online-giving",
    description: "Accept online donations and offerings.",
    category: "INDUSTRY" as const,
    isDefault: false,
  },
  {
    name: "Service Times",
    slug: "service-times",
    description: "Display worship schedules.",
    category: "INDUSTRY" as const,
    isDefault: false,
  },
  {
    name: "Ministries",
    slug: "ministries",
    description: "Display church ministries and departments.",
    category: "INDUSTRY" as const,
    isDefault: false,
  },
  //hotel
  {
    name: "Room Booking",
    slug: "room-booking",
    description: "Allow visitors to reserve hotel rooms.",
    category: "INDUSTRY" as const,
    isDefault: false,
  },
  {
    name: "Amenities",
    slug: "amenities",
    description: "Display hotel amenities.",
    category: "INDUSTRY" as const,
    isDefault: false,
  },
  {
    name: "Check Availability",
    slug: "check-availability",
    description: "Allow customers to check room availability.",
    category: "INDUSTRY" as const,
    isDefault: false,
  },
  {
    name: "Nearby Attractions",
    slug: "nearby-attractions",
    description: "Display nearby tourist attractions.",
    category: "INDUSTRY" as const,
    isDefault: false,
  },
  //NGO
  {
    name: "Donation System",
    slug: "donation-system",
    description: "Accept online donations.",
    category: "INDUSTRY" as const,
    isDefault: false,
  },
  {
    name: "Volunteer Registration",
    slug: "volunteer-registration",
    description: "Allow volunteers to register.",
    category: "INDUSTRY" as const,
    isDefault: false,
  },
  {
    name: "Campaigns",
    slug: "campaigns",
    description: "Display fundraising and awareness campaigns.",
    category: "INDUSTRY" as const,
    isDefault: false,
  },
  {
    name: "Impact Stories",
    slug: "impact-stories",
    description: "Showcase organizational impact.",
    category: "INDUSTRY" as const,
    isDefault: false,
  },
  //construction
  {
    name: "Projects Gallery",
    slug: "projects-gallery",
    description: "Display completed construction projects.",
    category: "INDUSTRY" as const,
    isDefault: false,
  },
  {
    name: "Equipment Gallery",
    slug: "equipment-gallery",
    description: "Showcase construction equipment.",
    category: "INDUSTRY" as const,
    isDefault: false,
  },
  {
    name: "Service Areas",
    slug: "service-areas",
    description: "Display areas served.",
    category: "INDUSTRY" as const,
    isDefault: false,
  },
  {
    name: "Quality Certifications",
    slug: "quality-certifications",
    description: "Display certifications and compliance documents.",
    category: "INDUSTRY" as const,
    isDefault: false,
  },
    ] 


      const websiteTypes = [
        {
          name: "Business Website",
          slug: "business-website",
          description:
            "Professional websites designed to establish credibility, showcase services, and generate leads for businesses.",
        },
        {
          name: "E-commerce Website",
          slug: "e-commerce",
          description:
            "Online stores and ordering platforms designed to help businesses sell products and accept online orders.",
        },
        {
          name: "Blog / Content Platform",
          slug: "blog-content-platform",
          description:
            "Modern content platforms designed for publishing, audience growth, SEO, and lead generation.",
        },
        {
          name: "Portfolio Website",
          slug: "portfolio-website",
          description:
            "Professional portfolio websites designed to showcase skills, projects, services, and personal brands.",
        },
      
        {
          name: "Landing Page",
          slug: "landing-page",
          description:
            "Focused landing pages designed around a specific campaign, product, service, or conversion goal.",
        },
        {
          name: "Custom Web Application",
          slug: "custom-web-application",
          description:
            "Custom digital platforms and web applications built around unique business processes, workflows, and requirements.",
        },
       {
        name: "Other",
        slug: "other",
        description: "A different type of website not listed above.",
        isActive: true,
      },
      ];




    const industries = [
      {
        name: "General Business",
        slug: "general-business",
        description:
          "Websites for businesses that need to establish credibility, showcase their services, and generate enquiries or leads.",
      },
      {
        name: "Real Estate",
        slug: "real-estate",
        description:
          "Websites for real estate businesses, property agencies, and property professionals.",
      },
      {
        name: "Hotel & Hospitality",
        slug: "hotel-hospitality",
        description:
          "Websites for hotels, resorts, guest houses, and hospitality businesses.",
      },
      {
        name: "Restaurant & Food",
        slug: "restaurant-food",
        description:
          "Websites for restaurants, food businesses, catering companies, and food brands.",
      },
      {
        name: "Construction",
        slug: "construction",
        description:
          "Websites for construction companies, contractors, and building professionals.",
      },
      {
        name: "Engineering",
        slug: "engineering",
        description:
          "Websites for engineering companies, technical service providers, and engineering professionals.",
      },
      {
        name: "Education",
        slug: "education",
        description:
          "Websites for schools, training organizations, educational institutions, and learning platforms.",
      },
      {
        name: "Healthcare",
        slug: "healthcare",
        description:
          "Websites for hospitals, clinics, healthcare professionals, and health-related organizations.",
      },
      {
        name: "Legal",
        slug: "legal",
        description:
          "Websites for law firms, legal professionals, and legal service providers.",
      },
      {
        name: "Finance",
        slug: "finance",
        description:
          "Websites for financial businesses, accounting firms, consultants, and financial service providers.",
      },
      {
        name: "Agency",
        slug: "agency",
        description:
          "Websites for creative agencies, marketing agencies, technology companies, and professional service agencies.",
      },
      {
        name: "Non-Profit",
        slug: "non-profit",
        description:
          "Websites for non-profit organizations, charities, foundations, and community organizations.",
      },
      {
        name: "Other",
        slug: "other",
        description:
          "Other industries or business categories not specifically listed.",
      },
    ];




      //features that applies to every website
        
      const defaultFeatures = [
      {
        name: "Homepage",
        slug: "homepage",
        description:
          "A professionally designed homepage that introduces the business, product, or service.",
        category: "DEFAULT" as const,
        isDefault: true,
      },
      {
        name: "About Section",
        slug: "about-section",
        description:
          "A section that communicates the business story, background, mission, or brand.",
        category: "DEFAULT" as const,
        isDefault: true,
      },
      {
        name: "Services Section",
        slug: "services-section",
        description:
          "A section for presenting services, offerings, or solutions.",
        category: "DEFAULT" as const,
        isDefault: true,
      },
      {
        name: "Contact Section",
        slug: "contact-section",
        description:
          "A contact area that allows visitors to find contact information and reach the business.",
        category: "DEFAULT" as const,
        isDefault: true,
      },
      {
        name: "Responsive Design",
        slug: "responsive-design",
        description:
          "A responsive experience optimized for mobile, tablet, and desktop devices.",
        category: "DEFAULT" as const,
        isDefault: true,
      },
      {
        name: "FAQ Section",
        slug: "faq-section",
        description:
          "A frequently asked questions section designed to address common customer concerns.",
        category: "DEFAULT" as const,
        isDefault: true,
      },
      {
        name: "SEO Setup",
        slug: "seo-setup",
        description:
          "Basic technical SEO setup to help search engines understand and index the website.",
        category: "DEFAULT" as const,
        isDefault: false,
      },
      {
        name: "Contact Form",
        slug: "contact-form",
        description:
          "A functional form that allows visitors to submit enquiries or contact requests.",
        category: "DEFAULT" as const,
        isDefault: false,
      },
    ];

      



    const websiteFeatures = [
      {
        name: "Testimonials",
        slug: "testimonials",
        description:
          "A section for displaying customer reviews, testimonials, or social proof.",
        category: "WEBSITE" as const,
        isDefault: false,
      },
      {
        name: "Team Section",
        slug: "team-section",
        description:
          "A section for showcasing team members, staff, or company leadership.",
        category: "WEBSITE" as const,
        isDefault: false,
      },
      {
        name: "Google Maps Integration",
        slug: "google-maps-integration",
        description:
          "Interactive map integration to help visitors locate a business or physical address.",
        category: "WEBSITE" as const,
        isDefault: false,
      },
      {
        name: "WhatsApp Integration",
        slug: "whatsapp-integration",
        description:
          "WhatsApp integration that allows visitors to contact the business directly.",
        category: "WEBSITE" as const,
        isDefault: false,
      },
      {
        name: "Newsletter Signup",
        slug: "newsletter-signup",
        description:
          "A newsletter subscription feature for collecting email subscribers and growing an audience.",
        category: "WEBSITE" as const,
        isDefault: false,
      },
      {
        name: "Image Gallery",
        slug: "image-gallery",
        description:
          "A visual gallery for showcasing products, services, projects, or business activities.",
        category: "WEBSITE" as const,
        isDefault: false,
      },
      {
        name: "Booking System",
        slug: "booking-system",
        description:
          "A booking feature that allows customers to request or schedule appointments online.",
        category: "WEBSITE" as const,
        isDefault: false,
      },
      {
        name: "Social Media Integration",
        slug: "social-media-integration",
        description:
          "Integration with social media platforms to connect the website with the business social presence.",
        category: "WEBSITE" as const,
        isDefault: false,
      },
    ];





    //custom website starts here
    const ecommerceFeatures = [
      {
        name: "Product Catalog",
        slug: "product-catalog",
        description:
          "A structured catalog for displaying products with images, descriptions, prices, and other information.",
        category: "ECOMMERCE" as const,
        isDefault: false,
      },
      {
        name: "Product Search",
        slug: "product-search",
        description:
          "Search functionality that helps customers quickly find products.",
        category: "ECOMMERCE" as const,
        isDefault: false,
      },
      {
        name: "Product Filtering",
        slug: "product-filtering",
        description:
          "Filtering tools that help customers narrow products by categories, price, or other attributes.",
        category: "ECOMMERCE" as const,
        isDefault: false,
      },
      {
        name: "Shopping Cart",
        slug: "shopping-cart",
        description:
          "A shopping cart that allows customers to review and manage selected products before checkout.",
        category: "ECOMMERCE" as const,
        isDefault: false,
      },
      {
        name: "Checkout",
        slug: "checkout",
        description:
          "A structured checkout experience for collecting customer and order information.",
        category: "ECOMMERCE" as const,
        isDefault: false,
      },
      {
        name: "Online Payment",
        slug: "online-payment",
        description:
          "Online payment integration that allows customers to pay for products or services electronically.",
        category: "ECOMMERCE" as const,
        isDefault: false,
      },
      {
        name: "Bank Transfer Payment",
        slug: "bank-transfer-payment",
        description:
          "A payment option that allows customers to complete orders through bank transfer.",
        category: "ECOMMERCE" as const,
        isDefault: false,
      },
      {
        name: "WhatsApp Ordering",
        slug: "whatsapp-ordering",
        description:
          "Allows customers to submit or discuss orders directly through WhatsApp.",
        category: "ECOMMERCE" as const,
        isDefault: false,
      },
      {
        name: "Order Management",
        slug: "order-management",
        description:
          "Tools for managing customer orders, order statuses, and fulfillment workflows.",
        category: "ECOMMERCE" as const,
        isDefault: false,
      },
      {
        name: "Customer Accounts",
        slug: "customer-accounts",
        description:
          "Customer account functionality that allows users to manage their profile, orders, and account information.",
        category: "ECOMMERCE" as const,
        isDefault: false,
      },
      {
        name: "Wishlist",
        slug: "wishlist",
        description:
          "Allows customers to save products they are interested in for later.",
        category: "ECOMMERCE" as const,
        isDefault: false,
      },
      {
        name: "Product Reviews",
        slug: "product-reviews",
        description:
          "Allows customers to leave reviews and ratings for products.",
        category: "ECOMMERCE" as const,
        isDefault: false,
      },
      {
        name: "Inventory Management",
        slug: "inventory-management",
        description:
          "Tools for tracking product availability and inventory levels.",
        category: "ECOMMERCE" as const,
        isDefault: false,
      },
      {
        name: "Admin Dashboard",
        slug: "admin-dashboard",
        description:
          "A secure administrative interface for managing website content, products, customers, or operations.",
        category: "ECOMMERCE" as const,
        isDefault: false,
      },
      {
        name: "Discount and Coupon System",
        slug: "discount-coupon-system",
        description:
          "A system for creating and applying promotional discounts and coupon codes.",
        category: "ECOMMERCE" as const,
        isDefault: false,
      },
      {
        name: "Delivery and Shipping Integration",
        slug: "delivery-shipping-integration",
        description:
          "Integration for managing delivery options, shipping costs, and order fulfillment.",
        category: "ECOMMERCE" as const,
        isDefault: false,
      },
    ];


    //blog
    const blogFeatures = [
      {
        name: "Blog Posts",
        slug: "blog-posts",
        description:
          "A structured publishing system for creating and displaying articles, stories, news, or educational content.",
        category: "BLOG" as const,
        isDefault: false,
      },
      {
        name: "Blog Categories",
        slug: "blog-categories",
        description:
          "Organize published content into categories to make the blog easier to navigate.",
        category: "BLOG" as const,
        isDefault: false,
      },
      {
        name: "Blog Tags",
        slug: "blog-tags",
        description:
          "Tag-based content organization that helps users discover related articles and topics.",
        category: "BLOG" as const,
        isDefault: false,
      },
      {
        name: "Blog Search",
        slug: "blog-search",
        description:
          "Search functionality that allows visitors to quickly find specific articles or topics.",
        category: "BLOG" as const,
        isDefault: false,
      },
      {
        name: "Newsletter Signup",
        slug: "blog-newsletter-signup",
        description:
          "A newsletter subscription feature for building an audience and sending content updates.",
        category: "BLOG" as const,
        isDefault: false,
      },
      {
        name: "Author Profiles",
        slug: "author-profiles",
        description:
          "Author profile pages that showcase information about content creators and their published work.",
        category: "BLOG" as const,
        isDefault: false,
      },
      {
        name: "Comments",
        slug: "comments",
        description:
          "A commenting system that allows readers to engage with published content.",
        category: "BLOG" as const,
        isDefault: false,
      },
      {
        name: "Social Sharing",
        slug: "social-sharing",
        description:
          "Social sharing functionality that allows visitors to share articles across social platforms.",
        category: "BLOG" as const,
        isDefault: false,
      },
      {
        name: "Related Posts",
        slug: "related-posts",
        description:
          "Automatically or manually selected related content displayed alongside articles.",
        category: "BLOG" as const,
        isDefault: false,
      },
      {
        name: "Content Management System",
        slug: "content-management-system",
        description:
          "A content management interface for creating, editing, organizing, and publishing website content.",
        category: "BLOG" as const,
        isDefault: false,
      },
    ];

    const portfolioFeatures = [
      {
        name: "Project Showcase",
        slug: "project-showcase",
        description:
          "A dedicated section for presenting completed projects, work samples, or professional achievements.",
        category: "PORTFOLIO" as const,
        isDefault: false,
      },
      {
        name: "Project Categories",
        slug: "project-categories",
        description:
          "Organize portfolio projects into categories to make it easier for visitors to explore specific types of work.",
        category: "PORTFOLIO" as const,
        isDefault: false,
      },
      {
        name: "Project Case Studies",
        slug: "project-case-studies",
        description:
          "Detailed case study pages that explain the challenge, process, solution, and outcome of completed projects.",
        category: "PORTFOLIO" as const,
        isDefault: false,
      },
      {
        name: "Resume / CV Section",
        slug: "resume-cv-section",
        description:
          "A dedicated section for presenting professional experience, education, qualifications, and skills.",
        category: "PORTFOLIO" as const,
        isDefault: false,
      },
      {
        name: "Testimonials",
        slug: "portfolio-testimonials",
        description:
          "A section for displaying client or professional recommendations and feedback.",
        category: "PORTFOLIO" as const,
        isDefault: false,
      },
      {
        name: "Social Links",
        slug: "social-links",
        description:
          "Links to professional and social media profiles to help visitors connect with the portfolio owner.",
        category: "PORTFOLIO" as const,
        isDefault: false,
      },
      {
        name: "Portfolio Contact Form",
        slug: "portfolio-contact-form",
        description:
          "A contact form that allows potential clients, employers, or collaborators to submit enquiries.",
        category: "PORTFOLIO" as const,
        isDefault: false,
      },
      {
        name: "Downloadable CV",
        slug: "downloadable-cv",
        description:
          "Allows visitors to download a professional CV or resume document.",
        category: "PORTFOLIO" as const,
        isDefault: false,
      },
    ];



    //software
    const softwareFeatures = [
      {
        name: "User Authentication",
        slug: "user-authentication",
        description:
          "Secure user registration, login, logout, password management, and account authentication.",
        category: "SOFTWARE" as const,
        isDefault: false,
      },
      {
        name: "User Roles and Permissions",
        slug: "user-roles-and-permissions",
        description:
          "Role-based access control that allows different users to access different parts of the application.",
        category: "SOFTWARE" as const,
        isDefault: false,
      },
      {
        name: "User Dashboard",
        slug: "user-dashboard",
        description:
          "A personalized dashboard where users can view information, manage activities, and access relevant features.",
        category: "SOFTWARE" as const,
        isDefault: false,
      },
    {
      name: "Admin Dashboard",
      slug: "software-admin-dashboard",
      description:
        "An administrative interface for managing users, content, data, settings, and application operations.",
      category: "SOFTWARE" as const,
      isDefault: false,
    },
      {
        name: "Database Integration",
        slug: "database-integration",
        description:
          "Structured database integration for securely storing, managing, and retrieving application data.",
        category: "SOFTWARE" as const,
        isDefault: false,
      },
      {
        name: "API Integration",
        slug: "api-integration",
        description:
          "Integration with external or internal APIs to connect the application with other services and systems.",
        category: "SOFTWARE" as const,
        isDefault: false,
      },
      {
        name: "Payment Integration",
        slug: "software-payment-integration",
        description:
          "Integration with online payment providers to process secure transactions within the application.",
        category: "SOFTWARE" as const,
        isDefault: false,
      },
      {
        name: "Notifications",
        slug: "notifications",
        description:
          "System notifications that keep users informed about important events, updates, actions, or activities.",
        category: "SOFTWARE" as const,
        isDefault: false,
      },
      {
        name: "Email Notifications",
        slug: "email-notifications",
        description:
          "Automated email notifications triggered by specific events or actions within the application.",
        category: "SOFTWARE" as const,
        isDefault: false,
      },
      {
        name: "File Uploads",
        slug: "file-uploads",
        description:
          "Secure file upload functionality for documents, images, and other supported file types.",
        category: "SOFTWARE" as const,
        isDefault: false,
      },
      {
        name: "Search Functionality",
        slug: "software-search-functionality",
        description:
          "Search functionality that allows users to quickly find relevant records, content, or data.",
        category: "SOFTWARE" as const,
        isDefault: false,
      },
      {
        name: "Advanced Filtering",
        slug: "advanced-filtering",
        description:
          "Advanced filtering and sorting tools for efficiently navigating large amounts of application data.",
        category: "SOFTWARE" as const,
        isDefault: false,
      },
      {
        name: "Real-Time Updates",
        slug: "real-time-updates",
        description:
          "Real-time data updates that allow users to see changes and activity without manually refreshing the application.",
        category: "SOFTWARE" as const,
        isDefault: false,
      },
      {
        name: "Internal Messaging",
        slug: "internal-messaging",
        description:
          "A private messaging system that allows authenticated users to communicate within the platform.",
        category: "SOFTWARE" as const,
        isDefault: false,
      },
      {
        name: "Activity Tracking",
        slug: "activity-tracking",
        description:
          "Track important user or system activities to provide visibility into actions performed within the application.",
        category: "SOFTWARE" as const,
        isDefault: false,
      },
      {
        name: "Reports and Analytics",
        slug: "reports-and-analytics",
        description:
          "Reporting and analytics tools for understanding application data, performance, and business activity.",
        category: "SOFTWARE" as const,
        isDefault: false,
      },
      {
        name: "Export Data",
        slug: "export-data",
        description:
          "Allows authorized users to export application data into supported formats for external use or reporting.",
        category: "SOFTWARE" as const,
        isDefault: false,
      },
      {
        name: "File and Document Management",
        slug: "file-and-document-management",
        description:
          "Organized storage and management of documents and files within the application.",
        category: "SOFTWARE" as const,
        isDefault: false,
      },
      {
        name: "Multi-Step Workflow",
        slug: "multi-step-workflow",
        description:
          "Structured workflows that move records or tasks through multiple stages, statuses, or approval processes.",
        category: "SOFTWARE" as const,
        isDefault: false,
      },
      {
        name: "Custom Business Logic",
        slug: "custom-business-logic",
        description:
          "Custom application rules and workflows designed around the client's specific business processes.",
        category: "SOFTWARE" as const,
        isDefault: false,
      },
    ];

    //default
    const defaultWebsiteFeatures = [
      {
        slug: "homepage",
        isDefault: true,
      },
      {
        slug: "about-section",
        isDefault: true,
      },
      {
        slug: "services-section",
        isDefault: true,
      },
      {
        slug: "contact-section",
        isDefault: true,
      },
      {
        slug: "responsive-design",
        isDefault: true,
      },
      {
        slug: "faq-section",
        isDefault: false,
      },
      {
        slug: "seo-setup",
        isDefault: false,
      },
      {
        slug: "contact-form",
        isDefault: false,
      },
    ];

    const businessWebsiteFeatures = [
      {
        slug: "testimonials",
        isDefault: false,
      },
      {
        slug: "team-section",
        isDefault: false,
      },
      {
        slug: "google-maps-integration",
        isDefault: false,
      },
      {
        slug: "whatsapp-integration",
        isDefault: false,
      },
      {
        slug: "newsletter-signup",
        isDefault: false,
      },
      {
        slug: "image-gallery",
        isDefault: false,
      },
      {
        slug: "booking-system",
        isDefault: false,
      },
      {
        slug: "social-media-integration",
        isDefault: false,
      },
    ];



    const ecommerceWebsiteFeatures = [
      {
        slug: "product-catalog",
        isDefault: true,
      },
      {
        slug: "product-search",
        isDefault: false,
      },
      {
        slug: "product-filtering",
        isDefault: false,
      },
      {
        slug: "shopping-cart",
        isDefault: true,
      },
      {
        slug: "checkout",
        isDefault: true,
      },
      {
        slug: "online-payment",
        isDefault: false,
      },
      {
        slug: "bank-transfer-payment",
        isDefault: false,
      },
      {
        slug: "whatsapp-ordering",
        isDefault: false,
      },
      {
        slug: "order-management",
        isDefault: false,
      },
      {
        slug: "customer-accounts",
        isDefault: false,
      },
      {
        slug: "wishlist",
        isDefault: false,
      },
      {
        slug: "product-reviews",
        isDefault: false,
      },
      {
        slug: "inventory-management",
        isDefault: false,
      },
      {
        slug: "admin-dashboard",
        isDefault: false,
      },
      {
        slug: "discount-coupon-system",
        isDefault: false,
      },
      {
        slug: "delivery-shipping-integration",
        isDefault: false,
      },
    ];

    const blogWebsiteFeatures = [
      {
        slug: "blog-posts",
        isDefault: true,
      },
      {
        slug: "blog-categories",
        isDefault: false,
      },
      {
        slug: "blog-tags",
        isDefault: false,
      },
      {
        slug: "blog-search",
        isDefault: false,
      },
      {
        slug: "blog-newsletter-signup",
        isDefault: false,
      },
      {
        slug: "author-profiles",
        isDefault: false,
      },
      {
        slug: "comments",
        isDefault: false,
      },
      {
        slug: "social-sharing",
        isDefault: false,
      },
      {
        slug: "related-posts",
        isDefault: false,
      },
      {
        slug: "content-management-system",
        isDefault: true,
      },
    ];

    const portfolioWebsiteFeatures = [
      {
        slug: "project-showcase",
        isDefault: true,
      },
      {
        slug: "project-categories",
        isDefault: false,
      },
      {
        slug: "project-case-studies",
        isDefault: false,
      },
      {
        slug: "resume-cv-section",
        isDefault: false,
      },
      {
        slug: "portfolio-testimonials",
        isDefault: false,
      },
      {
        slug: "social-links",
        isDefault: false,
      },
      {
        slug: "portfolio-contact-form",
        isDefault: false,
      },
      {
        slug: "downloadable-cv",
        isDefault: false,
      },
    ];

    const customWebApplicationFeatures = [
      {
        slug: "user-authentication",
        isDefault: true,
      },
      {
        slug: "user-roles-and-permissions",
        isDefault: false,
      },
      {
        slug: "user-dashboard",
        isDefault: true,
      },
      {
        slug: "software-admin-dashboard",
        isDefault: false,
      },
      {
        slug: "database-integration",
        isDefault: true,
      },
      {
        slug: "api-integration",
        isDefault: false,
      },
      {
        slug: "software-payment-integration",
        isDefault: false,
      },
      {
        slug: "notifications",
        isDefault: false,
      },
      {
        slug: "email-notifications",
        isDefault: false,
      },
      {
        slug: "file-uploads",
        isDefault: false,
      },
      {
        slug: "software-search-functionality",
        isDefault: false,
      },
      {
        slug: "advanced-filtering",
        isDefault: false,
      },
      {
        slug: "real-time-updates",
        isDefault: false,
      },
      {
        slug: "internal-messaging",
        isDefault: false,
      },
      {
        slug: "activity-tracking",
        isDefault: false,
      },
      {
        slug: "reports-and-analytics",
        isDefault: false,
      },
      {
        slug: "export-data",
        isDefault: false,
      },
      {
        slug: "file-and-document-management",
        isDefault: false,
      },
      {
        slug: "multi-step-workflow",
        isDefault: false,
      },
      {
        slug: "custom-business-logic",
        isDefault: true,
      },
    ];


  //websitetypefeature map, assigns features to industries.
    const websiteTypeFeatureMap = {
      "business-website": [
        ...defaultWebsiteFeatures,
        ...businessWebsiteFeatures,
      ],

      "e-commerce": [
        ...defaultWebsiteFeatures,
        ...ecommerceWebsiteFeatures,
      ],

      "blog-content-platform": [
        ...defaultWebsiteFeatures,
        ...blogWebsiteFeatures,
      ],

      "portfolio-website": [
        ...defaultWebsiteFeatures,
        ...portfolioWebsiteFeatures,
      ],

      "custom-web-application": [
        ...customWebApplicationFeatures,
      ],
    };
    
    //IndustryFeatureMap, assigns features to industries.
    const  industryFeatureMap = {
    "restaurant-food": [
      "menu-display",
      "reservation-system",
      "opening-hours",
      "food-gallery",
    ],

    healthcare: [
      "appointment-booking",
      "doctor-directory",
      "department-directory",
      "emergency-contact",
      "health-services",
    ],

    education: [
      "admissions-information",
      "academic-calendar",
      "faculty-directory",
      "course-programs",
      "student-portal",
    ],

    legal: [
      "practice-areas",
      "attorney-profiles",
      "consultation-booking",
      "legal-resources",
    ],

    "hotel-hospitality": [
      "room-booking",
      "amenities",
      "check-availability",
      "nearby-attractions",
    ],

    construction: [
      "projects-gallery",
      "equipment-gallery",
      "service-areas",
      "quality-certifications",
    ],
  };
      




    async function seedFeatures(
      features: Array<{
        name: string;
        slug: string;
        description: string;
        category: FeatureCategory; //type error fixed my importing featureCategory from schema for typescript to identify featureCategoty type
        isDefault: boolean;
      }>)
    {
      for (const feature of features) {
        await prisma.feature.upsert({
          where: {
            slug: feature.slug,
          },
          update: {
            name: feature.name,
            description: feature.description,
            category: feature.category,
            isDefault: feature.isDefault,
          },
          create: feature,
        });
      }
    }

    //helper function for seed website typeFeatures
    async function seedWebsiteTypeFeatures(
      websiteTypeSlug: string,
      features: Array<{
        slug: string;
        isDefault: boolean;
      }>
    ) {
      const websiteType = await prisma.websiteType.findUnique({
        where: {
          slug: websiteTypeSlug,
        },
      });

      if (!websiteType) {
        throw new Error(
          `Website type with slug "${websiteTypeSlug}" was not found.`
        );
      }
      
      for (const feature of features) {
        const featureRecord = await prisma.feature.findUnique({
          where: {
            slug: feature.slug,
          },
        });

        if (!featureRecord) {
          throw new Error(
            `Feature with slug "${feature.slug}" was not found.`
          );
        }

        await prisma.websiteTypeFeature.upsert({
          where: {
            websiteTypeId_featureId: {
              websiteTypeId: websiteType.id,
              featureId: featureRecord.id,
            },
          },
          update: {
            isDefault: feature.isDefault,
          },
          create: {
            websiteTypeId: websiteType.id,
            featureId: featureRecord.id,
            isDefault: feature.isDefault,
          },
        });
      }
    }

    //helper function for seedindustryfeature

    async function seedIndustryFeatures(
    industrySlug: string,
    featureSlugs: string[]
  ) {
    const industry = await prisma.industry.findUnique({
      where: { slug: industrySlug },
    });

    if (!industry) {
      throw new Error(`Industry "${industrySlug}" not found.`);
    }

    const features = await prisma.feature.findMany({
      where: {
        slug: {
          in: featureSlugs,
        },
      },
    });

    await prisma.industryFeature.createMany({
      data: features.map((feature) => ({
        industryId: industry.id,
        featureId: feature.id,
      })),
      skipDuplicates: true,
    });
  }


    async function main() {

    //Seed Website Types

      for (const websiteType of websiteTypes) {
        await prisma.websiteType.upsert({
          where: {
            slug: websiteType.slug,
          },
          update: {
            name: websiteType.name,
            description: websiteType.description,
          },
          create: websiteType,
        });
      }
      console.log("✅ Website types seeded successfully.")

    //Seed Industries
      for (const industry of industries) {
      await prisma.industry.upsert({
        where: {
          slug: industry.slug,
        },
        update: {
          name: industry.name,
          description: industry.description,
        },
        create: industry,
      });
    }
    console.log("✅ Industries seeded successfully.");


    //Seed Features
    await seedFeatures(defaultFeatures);
    await seedFeatures(websiteFeatures);
    await seedFeatures(ecommerceFeatures);
    await seedFeatures(blogFeatures);
    await seedFeatures(portfolioFeatures);
    //await seedFeatures(realEstateFeatures); 
    await seedFeatures(softwareFeatures);
    await seedFeatures(industryFeatures);   // ← Missing
    console.log("✅ All features seeded successfully.");
    console.log("🌱 Starting Presh Dev database seed...");

  //mapping for seedwebsitetypefeatures
    for (const [websiteTypeSlug, features] of Object.entries(
      websiteTypeFeatureMap
    )) {
      await seedWebsiteTypeFeatures(websiteTypeSlug, features);
    }
    console.log("✅ Website type feature relationships seeded successfully.");


  //mapping for seedindusryfeatures
  for (const [industrySlug, featureSlugs] of Object.entries(industryFeatureMap)) {
    await seedIndustryFeatures(industrySlug, featureSlugs);
  }
  console.log("✅ Industry features connected successfully.");
    

    }
    main()
      .catch((error) => {
        console.error("❌ Seed failed:", error);
        process.exit(1);
      })
      .finally(async () => {
        await prisma.$disconnect();
      });