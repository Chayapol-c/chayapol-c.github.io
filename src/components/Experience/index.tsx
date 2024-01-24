type ExperienceProps = {
  title: string;
  experienceType: string;
  place: string,
  placeColor: string,
  duration: string;
  expDescList: string[];
};
function Experience({
  title,
  experienceType,
  place,
  placeColor,
  duration,
  expDescList,
}: ExperienceProps) {
  return (
    <div className="my-6">
      <div className="flex justify-between mb-2 items-center">
        <h3 className="text-xl">
          {title} <span>{experienceType}</span>
        </h3>
        <p>{duration}</p>
      </div>
      <p className={`mb-4 ${placeColor}`}>{place}</p>
      <ul className="list-disc pl-4">
        {expDescList.length > 0
          ? expDescList.map((exp, i) => <li key={i}>{exp}</li>)
          : null}
      </ul>
    </div>
  );
}

function ExperienceSection() {
  const exp1 = {
    title: "Front-end Engineer",
    place: "Arise by Infinitas",
    placeColor: "text-blue-500",
    experienceType: "Full-Time",
    duration: "Sep 2023 - Current",
    expDescList: [
      "Gold Wallet",
    ],
  };
  const exp2 = {
    title: "Front-end developer",
    place: "Innovative Extremist",
    placeColor: "text-orange-500",
    experienceType: "Intern",
    duration: "Jun 2022 - Dec 2022",
    expDescList: [
      "Working in an agile team and participating in agile activities such as daily meetings and retrospectives.",
      "Created a web client for config of a video player library using Vue",
      "Implement a new design system for the company project using Vue 3 and SCSS",
      "Established a CMS web client for Text-to-speech content using React and Mantine(React component library)",
    ],
  };
  return (
    <section className="screen-section" id="experience-section">
      <h2 className="section-title">Experience</h2>
      <Experience {...exp1} />
      <div className="place-items-center flex flex-col gap-1">
        <div className="bg-white rounded-full w-1 h-1"></div>
        <div className="bg-white rounded-full w-1 h-1"></div>
        <div className="bg-white rounded-full w-1 h-1"></div>
      </div>
      <Experience {...exp2} />
    </section>
  );
}

export { ExperienceSection };
