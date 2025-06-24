import { Link } from "react-router-dom";
const features = [
  // { label: 'Free Journal', icon: '📝', path: '/journal' },
  // { label: 'Free Education', icon: '🎓', path: '/freeUniversity' },
  { label: 'Emotional Evaluation', icon: '🧠', path: '/emotionalEvaluation' },
  { label: 'Free Forex Calculator', icon: '📊', path: '/forexCalculator' },
];

const Features = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 px-4 py-1 pt-1 ">
      {features.map(({ label, icon,path }) => (
        <Link key={label} to={path} className="flex items-center gap-2 px-5 py-4 text-lg text-white  border border-[#f7a5006e] rounded-full  hover:text-[#F7A600] bg-[#19191f]">
          <span>{icon}</span>{label}
        </Link>
      ))}
    </div>
  );
};

export default Features;
