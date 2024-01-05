import Layout from "../../components/Admin/Layout";
import { useGetHotelsQuery } from "../../redux/api/hotelApi";
import Loader from "../../components/UI/Loader";
import usePagination from "../../Hooks/usePagination";

const AdminHotels = () => {
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

        {Hotels && Hotels?.length === 0 ? (
          <h1 className="mt-10 font-bold text-3xl text-center text-Blueviolet bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            No Hotels Available
          </h1>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border-1 border-lightgray mt-10">
              <thead className="bg-semiblueviolet">
                <tr>
                  <th className="px-6 py-3 border-b-2 border-lightgray text-left text-xs font-semibold text-gray500 uppercase tracking-wider"></th>
                  <th className="px-6 py-3 border-b-2 border-lightgray text-left text-xs font-semibold text-gray500 uppercase tracking-wider">
                    Hotel
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentData &&
                  currentData.map((hotel: any, index: any) => (
                    <>
                      <tr key={index}>
                        <td className="px-1 py-1 whitespace-nowrap border border-lightgray text-Blueviolet">
                          <img src={hotel?.images[0]} height={70} width={70} />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap border border-lightgray text-Blueviolet">
                          {hotel?.name}
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
