import footerlogo from '../../../assets/footerlogo.png'
const FooterImage = () => {
  return (
    <div className="col-md-4">
      <img src={footerlogo} alt="Footer Image" className='img-fluid' />
      <p className="mb-0 fst-italic">This project aims to provide a modern solution for flight reservation systems.</p>
    </div>
  )
}

export default FooterImage