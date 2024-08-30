'use client'
import { LandingCTA } from '@/designSystem/landing/LandingCTA'
import { LandingContainer } from '@/designSystem/landing/LandingContainer'
import LandingFAQ from '@/designSystem/landing/LandingFAQ'
import { LandingFeatures } from '@/designSystem/landing/LandingFeatures'
import { LandingHero } from '@/designSystem/landing/LandingHero'
import { LandingHowItWorks } from '@/designSystem/landing/LandingHowItWorks'
import { LandingPainPoints } from '@/designSystem/landing/LandingPainPoints'
import { LandingPricing } from '@/designSystem/landing/LandingPricing'
import { LandingSocialProof } from '@/designSystem/landing/LandingSocialProof'
import { LandingSocialRating } from '@/designSystem/landing/LandingSocialRating'
import { LandingTestimonials } from '@/designSystem/landing/LandingTestimonials'
import {
  EditOutlined,
  SolutionOutlined,
  RocketOutlined,
  SmileOutlined,
  DollarOutlined,
  SafetyOutlined,
} from '@ant-design/icons'

export default function LandingPage() {
  const features = [
    {
      heading: 'Customizable Templates',
      description:
        'Choose from a variety of professionally designed templates to create a website that truly represents your brand.',
      icon: <EditOutlined />,
    },
    {
      heading: 'Drag-and-Drop Functionality',
      description:
        'Easily add and arrange elements on your site with our intuitive drag-and-drop interface.',
      icon: <SolutionOutlined />,
    },
    {
      heading: 'Integrated Features',
      description:
        'Include blogs, portfolios, and contact forms to engage your audience and showcase your work.',
      icon: <RocketOutlined />,
    },
    {
      heading: 'Hosting and Domain Registration',
      description:
        'We handle the technical details, so you can focus on what matters most: your content.',
      icon: <SafetyOutlined />,
    },
    {
      heading: 'Ongoing Support',
      description:
        'Our team is here to help you every step of the way, ensuring your website is always up-to-date and running smoothly.',
      icon: <SmileOutlined />,
    },
    {
      heading: 'Affordable Pricing',
      description:
        'Get a professional website without breaking the bank. Our plans are designed to fit any budget.',
      icon: <DollarOutlined />,
    },
  ]

  const testimonials = [
    {
      name: 'John Doe',
      designation: 'Freelance Designer',
      content:
        'This platform made it so easy for me to create a stunning portfolio. I’ve received numerous compliments from clients!',
      avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
      name: 'Jane Smith',
      designation: 'Small Business Owner',
      content:
        'I was able to set up my business website in no time, and it looks fantastic. Highly recommend!',
      avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
    },
    {
      name: 'Michael Brown',
      designation: 'Photographer',
      content:
        'The customizable templates and drag-and-drop features are a game-changer. My website looks professional and unique.',
      avatar: 'https://randomuser.me/api/portraits/men/7.jpg',
    },
    {
      name: 'Emily Johnson',
      designation: 'Blogger',
      content:
        'I love how easy it is to update my blog and add new content. The support team is also incredibly helpful.',
      avatar: 'https://randomuser.me/api/portraits/women/27.jpg',
    },
  ]

  const navItems = [
    {
      title: 'Features',
      link: '#features',
    },
    {
      title: 'Pricing',
      link: '#pricing',
    },
    {
      title: 'Testimonials',
      link: '#testimonials',
    },
  ]

  const packages = [
    {
      title: 'Basic',
      description:
        'Perfect for individuals looking to create a simple personal website.',
      monthly: 9,
      yearly: 69,
      features: ['Customizable Templates', 'Drag-and-Drop Functionality'],
    },
    {
      title: 'Pro',
      description:
        'Ideal for freelancers and small business owners who need more features.',
      monthly: 19,
      yearly: 149,
      features: [
        'Customizable Templates',
        'Drag-and-Drop Functionality',
        'Integrated Features',
      ],
      highlight: true,
    },
    {
      title: 'Enterprise',
      description:
        'Best for larger businesses requiring advanced features and support.',
      monthly: 29,
      yearly: 229,
      features: [
        'Customizable Templates',
        'Drag-and-Drop Functionality',
        'Integrated Features',
        'Ongoing Support',
      ],
    },
  ]

  const questionAnswers = [
    {
      question: 'Do I need any technical skills to use this platform?',
      answer:
        'No, our platform is designed to be user-friendly and requires no technical skills or coding knowledge.',
    },
    {
      question: 'Can I use my own domain?',
      answer:
        'Yes, you can register a new domain through our platform or use an existing one.',
    },
    {
      question: 'Is there a free trial available?',
      answer:
        'Yes, we offer a 14-day free trial so you can explore all the features before committing.',
    },
    {
      question: 'What kind of support do you offer?',
      answer:
        'We offer 24/7 customer support to help you with any issues or questions you may have.',
    },
  ]

  const logos = [
    { url: 'https://i.imgur.com/afwBIFK.png' },
    { url: 'https://i.imgur.com/LlloOPa.png' },
    { url: 'https://i.imgur.com/j8jPb4H.png' },
    { url: 'https://i.imgur.com/mJ1sZFv.png' },
  ]

  const steps = [
    {
      heading: 'Sign Up',
      description: 'Create an account to get started with your website.',
    },
    {
      heading: 'Choose a Template',
      description: 'Select a template that fits your style and needs.',
    },
    {
      heading: 'Customize Your Site',
      description: 'Use our drag-and-drop tools to personalize your website.',
    },
    {
      heading: 'Publish and Share',
      description: 'Launch your website and share it with the world!',
    },
  ]

  const painPoints = [
    {
      emoji: '😫',
      title: 'Technical Complexity',
    },
    {
      emoji: '💸',
      title: 'High Costs',
    },
    {
      emoji: '⌛',
      title: 'Time-Consuming',
    },
  ]

  const avatarItems = [
    {
      src: 'https://randomuser.me/api/portraits/men/51.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/women/9.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/women/52.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/men/4.jpg',
    },
  ]

  return (
    <LandingContainer navItems={navItems}>
      <LandingHero
        title="Create Your Dream Website Effortlessly"
        subtitle="No coding skills required. Build a professional website in minutes."
        buttonText="Get Started"
        buttonLink="/register"
        pictureUrl="https://marblism-dashboard-api--production-public.s3.us-west-1.amazonaws.com/yiyEjs-suonpisey-3som"
        socialProof={
          <LandingSocialRating
            avatarItems={avatarItems}
            numberOfUsers={1000}
            suffixText="from happy users"
          />
        }
      />
      <LandingSocialProof logos={logos} title="Featured on" />
      <LandingPainPoints title="The Struggle is Real" painPoints={painPoints} />
      <LandingHowItWorks title="How It Works" steps={steps} />
      <LandingFeatures
        id="features"
        title="Achieve Your Online Presence Goals"
        subtitle="Our platform provides everything you need to create a stunning website."
        features={features}
      />
      <LandingTestimonials
        title="Success Stories"
        subtitle="See how our platform has helped others achieve their dreams."
        testimonials={testimonials}
      />
      <LandingPricing
        id="pricing"
        title="Affordable Plans for Everyone"
        subtitle="Choose a plan that fits your needs and budget."
        packages={packages}
      />
      <LandingFAQ
        id="faq"
        title="Frequently Asked Questions"
        subtitle="Got questions? We've got answers."
        questionAnswers={questionAnswers}
      />
      <LandingCTA
        title="Ready to Create Your Website?"
        subtitle="Join thousands of satisfied users and get started today."
        buttonText="Get Started"
        buttonLink="/register"
      />
    </LandingContainer>
  )
}
