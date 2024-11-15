import { Oval } from 'react-loader-spinner'

function LoaderBlank() {
  return (
    <div className=" flex items-center mt-60 justify-center">
      <Oval
        visible={true}
        height="100"
        width="1000"
        color="#fff"
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass=""
        strokeWidth="4"
      />
    </div>
  )
}

export default LoaderBlank
