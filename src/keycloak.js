import Keycloak from 'keycloak-js'

const keycloakConfig = {
  url: 'url',
  realm: 'realm',
  clientId: 'id'
}
const keycloak = new Keycloak(keycloakConfig);
export default keycloak