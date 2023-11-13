# Postman Collection for SAP Signavio Authentication API

## Description

SAP Signavio APIs require users to authenticate themselves before dispatching requests.

Authentication is performed by sending an authentication request containing your credentials. A successful response returns a JSON Web Token (JWT), which you should include as part of subsequent requests to SAP Signavio APIs.

## Using the Collection

Included in this directory are a Postman collection file and a Postman environment file.

* The collection provides a request called Authenticate that sends your credentials for authentication and, if successful, returns a JWT.
* The environment defines several variables for use in the collection. Select the environment 'SAP Signavio Suite' to enable them.

To use the collection, perform the following steps:

1. Open the 'SAP Signavio Suite' environment and provide suitable values for the variables:
   * `username`: Your SAP Signavio email address.
   * `password`: Your SAP Signavio password.
   * `tenantId`: Unique identifier of the target workspace. Only necessary if you're a member of multiple workspaces.
   * `baseUrl`: The region-specific base URL of the server. To determine the value for your region, refer to section 'Base URL' below.
2. From the workspace sidebar, open **Collections** and select **SAP Signavio Suite** &rarr; **Authentication** &rarr; **Authenticate**.
3. Dispatch the request with **Send**.<br>After a short wait, you should receive a response. Response codes for this request are documented in the [SAP Business Accelerator Hub](https://api.sap.com/api/authentication/path/post_auth_v1_token).
4. If the authentication was successful, the response returns a code of 200 and a body containing the JWT. Copy the token for use in your subsequent API calls.


## Base URL

The base URL of the request is region-specific. Choose the URL corresponding with your region:

| Region        | Base URL                     |
|---------------|------------------------------|
| Australia	    | `api.au.signavio.cloud.sap`  |
| Canada	    | `api.ca.signavio.cloud.sap`  |
| EU	        | `api.eu.signavio.cloud.sap`  |
| Japan	        | `api.jp.signavio.cloud.sap`  |
| Singapore	    | `api.sgp.signavio.cloud.sap` |
| South Korea	| `api.kr.signavio.cloud.sap`  |
| USA	        | `api.us.signavio.cloud.sap`  |


## Further Reading

Detailed documentation on the Authentication API is available on the [SAP Business Accelerator Hub](https://api.sap.com/api/authentication/overview).