import BannerContent from "./BannerContent/BannerContent"
import BannerImage from "./BannerImage/BannerImage"

const HomeBanner = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row align-items-center">
          <BannerImage />
          <BannerContent />
        </div>
      </div>
    </section>
  )
}

export default HomeBanner