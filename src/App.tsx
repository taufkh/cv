import { HeroSection } from './sections/HeroSection';
import { CredibilityStripSection } from './sections/CredibilityStripSection';
import { ProfileSection } from './sections/ProfileSection';
import { SkillsSection } from './sections/SkillsSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { EducationSection } from './sections/EducationSection';
import { PrinciplesSection } from './sections/PrinciplesSection';
import { ContactSection } from './sections/ContactSection';
import { Navigation } from './sections/Navigation';
import { ScrollToTop } from './sections/ScrollToTop';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Navigation />
      <main id="main-content">
        <HeroSection />
        <CredibilityStripSection />
        <ProfileSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <PrinciplesSection />
        <EducationSection />
        <ContactSection />
      </main>
      <ScrollToTop />
    </div>
  );
}

export default App;
