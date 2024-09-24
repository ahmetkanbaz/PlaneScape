const Company = () => {
  let content = [
    { index: 1, title: 'About Us' },
  { index: 2, title: 'Careers' },
  { index: 3, title: 'Press' },
  { index: 4, title: 'Blog' },
  { index: 5, title: 'Investor Relations' },
  { index: 6, title: 'Terms of Service' },
  { index: 7, title: 'Privacy Policy' }
  ]
  return (
    <div className="col-md-4">
      <p className="mb-0 fs-4 fw-medium border-bottom pb-2">Company</p>
      <ul className="mt-3">
        {content.map((singleContent) => (
          <li key={singleContent.index}>{singleContent.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default Company