export function getStepsRoutes(steps) {
  const allStepsRoutes = []
  Object.keys(steps).map((version) => {
    steps[version].map((route) => {
      allStepsRoutes.push({
        name: version + route.name,
        path: version + '/' + route.path,
        component: route.component,
      })
    })
  })
  return allStepsRoutes
}
