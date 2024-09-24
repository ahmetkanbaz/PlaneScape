import Communication from "./Communication/Communication"
import Company from "./Company/Company"
import FooterImage from "./FooterImage/FooterImage"

const Footer = () => {
  return (
    <footer className="py-5">
      <div className="container">
        <div className="row gap-3 gap-md-0">
          <FooterImage />
          <Company />
          <Communication />
        </div>
      </div>
    </footer>
  )
}

export default Footer