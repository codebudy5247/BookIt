import Layout from "../../components/Admin/Layout";
import { useGetHotelsQuery } from "../../redux/api/hotelApi";
import Loader from "../../components/UI/Loader";
import { useState } from "react";

const PAGE_SIZE = 5; // Number of items per page

const AdminHotels = () => {
  const { data: Hotels, isLoading, isError } = useGetHotelsQuery();
  const [currentPage, setCurrentPage] = useState<any>(1);

  if (isError)
    return (
      <h1 className="mt-10 font-bold text-5xl text-center text-Blueviolet bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        Something went wrong.Try after sometime!
      </h1>
    );
  if (isLoading) return <Loader />;

  // Pagination logic
  const lastIndex = currentPage * PAGE_SIZE;
  const firstIndex = lastIndex - PAGE_SIZE;
  const currentHotels = Hotels?.slice(firstIndex, lastIndex);

  const totalPages = Math.ceil(Hotels?.length! / PAGE_SIZE);

  const handlePageChange = (pageNumber: any) => {
    setCurrentPage(pageNumber);
  };
  return (
    <Layout>
      <div className="w-full" style={{ height: "90vh" }}>
        <h1 className="font-extrabold text-center text-5xl text-Blueviolet underline">
          Hotels
        </h1>

        {Hotels && Hotels?.length === 0 ? (
          <h1 className="mt-10 font-bold text-3xl text-center text-Blueviolet bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            No Hotels Available
          </h1>
        ) : (
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
              {currentHotels &&
                currentHotels.map((hotel: any, index: any) => (
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
        )}

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
