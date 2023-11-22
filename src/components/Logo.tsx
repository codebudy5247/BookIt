import { useNavigate } from "react-router-dom";
const Logo = () => {
  const navigate = useNavigate()
  return (
    <div className="flex flex-shrink-0 items-center cursor-pointer" onClick={() => navigate('/')}>
      <h1 className="font-extrabold underline text-5xl text-Blueviolet bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        BookIt
      </h1>
    </div>
  );
};

export default Logo;
