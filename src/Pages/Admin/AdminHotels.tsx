import Layout from "../../components/Admin/Layout";
import { useGetHotelsQuery } from "../../redux/api/hotelApi";
import Loader from "../../components/UI/Loader";
import usePagination from "../../Hooks/usePagination";
import { useNavigate } from "react-router-dom";

const AdminHotels = () => {
  const navigate = useNavigate()
  const { data: Hotels, isLoading, isError } = useGetHotelsQuery();
  const ITEMS_PER_PAGE = 5;

  const { currentData, totalPages, currentPage, handlePageChange } =
    usePagination(Hotels, ITEMS_PER_PAGE);

  if (isError)
    return (
      <h1 className="mt-10 font-bold text-5xl text-center text-Blueviolet bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        Something went wrong.Try after sometime!
      </h1>
    );
  if (isLoading) return <Loader />;
  return (
    <Layout>
      <div className="">
        <h1 className="font-extrabold text-center text-5xl text-Blueviolet underline">
          Hotels
        </h1>

        <div className="flex justify-end">
          <button onClick={() => navigate("/admin/add-hotel")} className="py-3 px-3 text-md text-Blueviolet font-medium bg-semiblueviolet hover:text-white hover:bg-Blueviolet">
            Add Hotel
          </button>
        </div>

        {Hotels && Hotels?.length === 0 ? (
          <h1 className="mt-10 font-bold text-3xl text-center text-Blueviolet bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            No Hotels Available
          </h1>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border-1 border-lightgray mt-5">
              <thead className="bg-semiblueviolet">
                <tr>
                  <th className="px-6 py-3 border-b-2 border-lightgray text-left text-xs font-semibold text-gray500 uppercase tracking-wider"></th>
                  <th className="px-6 py-3 border-b-2 border-lightgray text-left text-xs font-semibold text-gray500 uppercase tracking-wider">
                    Hotel
                  </th>
                  <th className="px-6 py-3 border-b-2 border-lightgray text-left text-xs font-semibold text-gray500 uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-6 py-3 border-b-2 border-lightgray text-left text-xs font-semibold text-gray500 uppercase tracking-wider">
                    Rating
                  </th>
                  <th className="px-6 py-3 border-b-2 border-lightgray text-left text-xs font-semibold text-gray500 uppercase tracking-wider">
                    Address
                  </th>
                  <th className="px-6 py-3 border-b-2 border-lightgray text-left text-xs font-semibold text-gray500 uppercase tracking-wider"></th>
                  <th className="px-6 py-3 border-b-2 border-lightgray text-left text-xs font-semibold text-gray500 uppercase tracking-wider"></th>
                </tr>
              </thead>
              <tbody>
                {currentData &&
                  currentData.map((hotel: any, index: any) => (
                    <>
                      <tr key={index}>
                        <td className="px-1 py-1 whitespace-nowrap border border-lightgray text-Blueviolet w-fit">
                          {hotel?._id.slice(0, 6)}...
                        </td>
                        <td className="px-1 py-1 whitespace-nowrap border border-lightgray text-Blueviolet w-fit">
                          {hotel?.name.slice(0, 10)}...
                        </td>
                        <td className="px-1 py-1 whitespace-nowrap border border-lightgray text-Blueviolet w-fit">
                          ₹ {hotel?.price}
                        </td>
                        <td className="px-1 py-1 whitespace-nowrap border border-lightgray text-Blueviolet w-fit">
                          {hotel?.rating}
                        </td>
                        <td className="px-1 py-1 whitespace-nowrap border border-lightgray text-Blueviolet w-fit">
                          {hotel?.location?.state},{hotel?.location?.city},
                          {hotel?.location?.country}
                        </td>
                        <td className="px-1 py-1 whitespace-nowrap border border-lightgray text-Blueviolet w-fit">
                          <button className="py-3 px-3 text-md text-Blueviolet font-medium bg-semiblueviolet hover:text-white hover:bg-Blueviolet">
                            Add Room
                          </button>
                        </td>
                        <td className="px-1 py-1 whitespace-nowrap border border-lightgray text-Blueviolet w-fit">
                          <button className="py-3 px-3 text-md text-Blueviolet font-medium bg-semiblueviolet hover:text-white hover:bg-Blueviolet">
                            Update
                          </button>
                        </td>
                      </tr>
                    </>
                  ))}
              </tbody>
            </table>
          </div>
        )}
        {/* PAgination */}
        <div className="flex justify-center mt-4">
          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (page) => (
              <button
                key={page}
                className={`mx-1 px-3 py-1 rounded-md border ${
                  currentPage === page
                    ? "bg-Blueviolet text-white"
                    : "bg-white text-Blueviolet"
                }`}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </button>
            )
          )}
        </div>
      </div>
    </Layout>
  );
};

export default AdminHotels;
