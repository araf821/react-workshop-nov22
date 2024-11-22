import EducationSection from "./EducationSection";
import Header from "./Header";
import ProjectsSection from "./ProjectsSection";

function HomePage() {
  return (
    <div className="home-page">
      <Header />
      <EducationSection />
      <ProjectsSection />
    </div>
  );
}

export default HomePage;
