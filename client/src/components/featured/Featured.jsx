import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=berlin,madrid,london"
  );

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://static.toiimg.com/photo/msid-89858800,width-96,height-65.cms"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Uttar Pradesh</h1>
              <h2>{data[0]} Donors</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/A_Hindu_temple_Prem_Mandir_Love_temple_sights_culture_India.jpg/500px-A_Hindu_temple_Prem_Mandir_Love_temple_sights_culture_India.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Braj</h1>
              <h2>{data[1]} Donors</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o="
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Rajpura</h1>
              <h2>{data[2]} Donors</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
