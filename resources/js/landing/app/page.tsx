import HeroSection from '@/components/home/HeroSection';
import WhyZimbabweSection from '@/components/home/WhyZimbabweSection';
import FeaturedDestinations from '@/components/home/FeaturedDestinations';
import ExperienceSection from '@/components/home/ExperienceSection';
import TravelPlanningSection from '@/components/home/TravelPlanningSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <WhyZimbabweSection />
      <FeaturedDestinations />
      <ExperienceSection />
      <TravelPlanningSection />
    </div>
  );
}