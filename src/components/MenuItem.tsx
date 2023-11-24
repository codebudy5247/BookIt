interface MenuItemProps {
  onClick?: () => void;
  label: string;
}

const MenuItem: React.FC<MenuItemProps> = ({
  onClick,
  label
}) => {
  return ( 
    <div 
      onClick={onClick} 
      className="
        px-4 
        py-3 
        text-Blueviolet
        bg-semiblueviolet
        hover:bg-Blueviolet
        hover:text-white 
        transition
        font-semibold
      "
    >
      {label}
    </div>
   );
}
 
export default MenuItem;