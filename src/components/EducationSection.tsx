import SectionHeader from "./SectionHeader";

function EducationSection() {
  return (
    <div className="section">
      <SectionHeader heading="Education" />

      <div className="space-y-1 w-full">
        <div className="flex justify-between items-start">
          <h3 className="md:text-lg font-bold">Computer Science</h3>
          <p className="text-nowrap">Sep 2012 - Apr 2077</p>
        </div>
        <h4 className="max-md:text-sm font-medium">York University</h4>
        <p className="max-md:text-sm font-light">
          <span className="font-semibold">Relevant Courses:</span> React
          Workshop, Advanced OOP, Computer Organization, Discrete Mathematics
        </p>
      </div>
    </div>
  );
}

export default EducationSection;
