
const ResultsSummary = ({ term, location, amountResults }) => {
  return (
    <div className="flex flex-wrap items-end justify-end flex-grow mx-24 mb-4 min">
    <p className="text-gray-600 ">
     {amountResults} {amountResults === 1 ? 'result' : 'results'} for "{term}" in "{location}"
    </p>
  </div>

  )
}

export default ResultsSummary
