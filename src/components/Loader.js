import React from 'react'
import { Grid } from 'react-loader-spinner'

const Loader = ({ width = 80, height = 80}) => {
  return (
    <Grid
      height={height}
      width={width}
      color="rgb(100, 25, 230)"
      ariaLabel="grid-loading"
      radius="12.5"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  )
}

export default Loader