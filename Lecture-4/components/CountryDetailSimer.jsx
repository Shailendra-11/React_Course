
export default function CountryDetailSimer() {
  return (
    <div className="country-details-container">

      {
        Array.from({ length: 1 }).map((el, i) => {
          return <div key={i} className="coutries-card-simer">
            <div className="flag-container"></div>
            <div className="card-text">
              <h3 className="card-title"></h3>
              <p></p>
              <p></p>
              <p></p>
            </div>
          </div>

        })
      }
    </div>
  )
}
