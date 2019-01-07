import React, { Component, lazy, Suspense } from 'react'
const LazyContent = lazy(() => import('./LazyContent'))

export default class Lazy extends Component {
  render() {
    return (
      <Suspense fallback={'Loading'}>
        <LazyContent/>
      </Suspense>
    )
  }
}
