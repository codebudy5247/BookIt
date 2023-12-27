import { useNavigate } from "react-router-dom";
import LogoImg from "../assets/images/logo.jpg"
const Logo = () => {
  const navigate = useNavigate()
  return (
    <div className="flex flex-shrink-0 items-center cursor-pointer" onClick={() => navigate('/hotels')}>
      <img src={LogoImg} height={70} width={70}  />
    </div>
  );
};

export default Logo;
