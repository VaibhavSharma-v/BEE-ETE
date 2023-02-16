import useFetch from "../../hooks/useFetch";
import "./propertyList.css";

const PropertyList = () => {
  const { data, loading, error } = useFetch("/hotels/countByType");

  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfupoRaH4_onYpV2Iwvk3j4JNND4l9bH4KEahtEhb4wyNSHGigXBcIajh2GfmHOzYfpaQ&usqp=CAU",
    "https://www.shutterstock.com/image-vector/blood-type-b-plus-vector-260nw-1404125843.jpg",
    "https://d2gg9evh47fn9z.cloudfront.net/1600px_COLOURBOX39273877.jpg",
    "https://d2gg9evh47fn9z.cloudfront.net/1600px_COLOURBOX39273872.jpg",
    
  ];
  return (
    <div className="pList">
      {loading ? (
        "loading"
      ) : (
        <>
          {data &&
            images.map((img,i) => (
              <div className="pListItem" key={i}>
                <img
                  src={img}
                  alt=""
                  className="pListImg"
                />
                <div className="pListTitles">
                  <h1>{data[i]?.type}</h1>
                  <h2>{data[i]?.count} {data[i]?.type}</h2>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default PropertyList;