import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";

const Data = () => {
  const navigate = useNavigate();
  const [cookies] = useCookies(["logged_in"]);
  const logged_in = cookies.logged_in;
  return (
    <div className="rounded-md max-w-sm w-full mx-auto">
      <div className="flex-1 space-y-4 py-1">
        <div className="sm:block">
          <div className="space-y-1 px-5 pt-2 pb-3">
            <div className="mt-4"></div>
            {!logged_in && (
              <>
                <button
                  onClick={() => navigate("/login")}
                  className="bg-white w-full text-Blueviolet border border-semiblueviolet font-medium py-2 px-4 rounded"
                >
                  Log In
                </button>
                <button
                  onClick={() => navigate("/register")}
                  className="bg-semiblueviolet w-full hover:bg-Blueviolet hover:text-white text-Blueviolet font-medium my-2 py-2 px-4 rounded"
                >
                  Sign up
                </button>
              </>
            )}

            {logged_in && (
                
                <button
                  className="bg-semiblueviolet w-full hover:bg-Blueviolet hover:text-white text-Blueviolet font-medium my-2 py-2 px-4 rounded"
                >
                  Logout
                </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Data;
