import Avatar from "../Avatar";

const Header = () => {
  return (
    <div className="flex mb-6 items-center">
      <div className="w-1/2 grow">
        <h1 className="text-cornflowerblue text-xl">
          Welcome, <b>Admin</b>
        </h1>
      </div>
      <Avatar src="https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_9.jpg" />
    </div>
  );
};

export default Header;
