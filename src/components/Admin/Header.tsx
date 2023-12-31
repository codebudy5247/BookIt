const Header = () => {
  return (
    <div className="flex mb-6 items-center">
      <div className="w-1/2 grow">
        <h1 className="text-cornflowerblue text-xl">
          Welcome, <b>Admin</b>
        </h1>
      </div>
      <div className="">
        <div className="bg-grey500 flex items-center rounded-md overflow-hidden">
          <img
            className="h-8"
            src="https://mui.com/static/images/avatar/1.jpg"
            alt=""
          />
          <span className="text-cornflowerblue px-3">Admin</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
