

import { Oval } from 'react-loader-spinner'

function Loader() {
  return (
    <div className="flex items-center justify-center">
      <Oval
        visible={true}
        height="25"
        width="25"
        color="#fff"
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass=""
        strokeWidth="8"
      />
    </div>
  )
}

export default Loader
