import { AvatarImg } from "../assets/images";
interface AvatarProps {
    src?: string | null | undefined;
  }
  
  const Avatar: React.FC<AvatarProps> = ({ src }) => {
    return ( 
      <img
        className="rounded-full" 
        height="40" 
        width="40" 
        alt="Avatar" 
        src={src || AvatarImg}
      />
     );
  }
   
  export default Avatar;