type SkillBadge = {
  id: string;
  title: string;
  color: string;
};

function AboutMeSection() {
  const skills = [
    {
      id: crypto.randomUUID(),
      title: "TypeScript",
      color: "bg-blue-300",
    },
    {
      id: crypto.randomUUID(),
      title: "JavaScript",
      color: "bg-yellow-400"
    },
    {
      id: crypto.randomUUID(),
      title: "Kotlin",
      color: "bg-purple-400",
    },
    {
      id: crypto.randomUUID(),
      title: "React",
      color: "bg-cyan-400",
    },
    {
      id: crypto.randomUUID(),
      title: "Vue",
      color: "bg-green-400",
    },
    {
      id: crypto.randomUUID(),
      title: "Android",
      color: "bg-green-600",
    },
    {
      id: crypto.randomUUID(),
      title: "RobotFramework",
      color: "bg-gray-500",
    },
  ];
  return (
    <section className="screen-section" id="about-me-section">
      <div className="rounded-full bg-red-100 overflow-clip p-4 mb-4">
        <img src={"/public/vite.svg"} alt="chayapol pic"/>
      </div>
      <article className="mb-8">
        <p className="text-2xl mb-4 text-center font-semibold">Greeting, It's Kaopun</p>
        <p className="cursor-default leading-relaxed tracking-wider text-justify text-pretty align-baseline">
          Enthusiastic and self-motivated software engineer. I acquired and
          improved my software development skills from university and frontend
          framework skills from self-learning. I am eager to bring my skills in
          front-end development to every project that will be received in the
          future.
        </p>
      </article>
      <div>
        <h2 className="section-title">skills</h2>
        <div className="flex gap-4 flex-wrap">
          {skills.map((skill: SkillBadge) => {
            return (
              <div
                className={`px-3 rounded-md ${skill.color} py-1 font-semibold cursor-default`}
                key={skill.id}
              >
                {skill.title}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export { AboutMeSection };
