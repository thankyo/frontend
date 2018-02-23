import React from 'react';
import Loading from "components/Loading";

export function componentFactory(Component, LoadingState = Loading, ErrorState = Error) {
  return function({ isFetching = true, isError, error, data, ...otherProps } ) {
    if (isFetching) {
      return <LoadingState/>;
    } else if (isError) {
      return <ErrorState error={error}/>
    } else {
      return <Component {... data} {... otherProps} />
    }
  }
}