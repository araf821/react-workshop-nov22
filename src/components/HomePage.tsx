import EducationSection from "./EducationSection";
import Header from "./Header";
import ProjectsSection from "./ProjectsSection";
import SkillsSection from "./SkillsSection";

function HomePage() {
  return (
    <div className="home-page">
      <Header />
      <EducationSection />
      <ProjectsSection />
      <SkillsSection />
    </div>
  );
}

export default HomePage;
