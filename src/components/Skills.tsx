export default function Skills() {
  const skills = [
    { name: 'JAVA', level: 90 },
    { name: 'C++', level: 90 },
    { name: 'C', level: 90 },
    { name: 'DSA', level: 90 },
    { name: 'DBMS', level: 90 },
    { name: 'OOPS', level: 90 },
    { name: 'Operating System', level: 90 },
    { name: 'Computer Networks', level: 90 },
    { name: 'CSS3', level: 85 },
    { name: 'JavaScript', level: 80 },
    { name: 'MongoDb', level: 75 },
    { name: 'Express JS', level: 75 },
    { name: 'React JS', level: 75 },
    { name: 'Node Js', level: 75 },
    { name: 'TypeScript', level: 75 },
    { name: 'Python', level: 70 },
    { name: 'Machine Learning', level: 65 },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 underline underline-offset-8 decoration-blue-500">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skills.map((skill) => (
            <div key={skill.name} className="bg-white rounded-lg shadow p-4 flex flex-col items-center border border-blue-100 hover:shadow-lg hover:scale-105 transition-transform duration-200 text-center">
              <span className="font-bold text-blue-800 text-base mb-1">{skill.name}</span>
              <div className="w-full h-2 bg-gray-200 rounded-full mb-1">
                <div
                  className="h-full bg-blue-600 rounded-full transition-all duration-500"
                  style={{ width: `${skill.level}%` }}
                  role="progressbar"
                  aria-label={`${skill.name} proficiency`}
                  aria-valuenow={skill.level}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
              <span className="text-gray-600 text-xs">{skill.level}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}