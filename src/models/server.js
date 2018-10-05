const getAllServerInfo = () => {
  return ({
    server: {
      name: 'API Penguin Info Server',
      apiVersion: '0.2'
    },
    availableDataSeries: {
      AllData: {
        name: 'Increasing dates',
        description: 'Dates are formatted in [YYYY]M[MM]',
        route: "/api/"
      },
      flatPopData: {
        name: 'pull date by value',
        description: 'pulls the date by the value listed',
        route: "/api/pop/:number"
      },
      flatDateData: {
        name: 'pull population by date',
        description: 'pulls the date by the value listed',
        route1: "/api/date/:number",
        route2: "/api/date/greater/:number",
        route3: "/api/date/less/:number"
      }
    }
  })
}

module.exports = { getAllServerInfo }
