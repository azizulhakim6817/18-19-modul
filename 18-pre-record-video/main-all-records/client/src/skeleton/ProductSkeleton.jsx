import Skeleton from "react-loading-skeleton";
import Lottie from "lottie-react";
import ImagePlaceholder from "../assets/images/image.json";

const ProductsSkeleton = () => {
  return (
    <div className="container">
      <div className="row">
        <h1 className="headline-4 text-center my-2 p-0">Products Collection</h1>
        <span className="bodySmal mb-5 text-center">
          Explore a World of Choices Across Our Most Popular <br />
          Shopping Categories{" "}
        </span>
        {Array.from({ length: 4 }).map((_, i) => {
          return (
            <div key={i} className="col-md-2 p-2 col-lg-3 col-sm-6 col-12">
              <div className="card shadow-sm h-100 rounded-3 bg-white">
                <Lottie
                  className="w-100"
                  animationData={ImagePlaceholder}
                  loop={true}
                />
                <div className="card-body">
                  <Skeleton count={3} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductsSkeleton;
