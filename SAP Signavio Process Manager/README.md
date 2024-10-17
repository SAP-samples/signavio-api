# SAP Signavio Process Manager API Postman Collection

With the SAP Signavio Process Manager APIs, you can integrate the application with third-party applications, allowing you to manage all diagram, folder and dictionary data. You can do things such as create, update or retrieve your data in addition to other operations. 

For more information, see the [SAP Signavio Process Manager API Guide](https://help.sap.com/docs/signavio-process-manager/sap-signavio-process-manager-api-guide/sap-signavio-process-manager-api-guide).

## Directory Contents

Included in this directory are a Postman collection file and a Postman environment file.

* The collection `SAP Signavio Process Manager.postman_collection.json` contains a set of endpoint definitions that you can reuse in the Postman application.
* The environment `SAP Signavio Process Manager.postman_environment.json` defines several variables for use in the collection.

## Using the Environment

When using the Postman collection, start by running the collection's Authentication request. The request retrieves an authentication token and a session ID the other requests depend on. If you specified the `tenantId` in your environment, activate the corresponding body parameter (`tenant`) of the Authenticate request.

To set up the environment variables:

1. In Postman, select the environment 'SAP Signavio Process Manager'.
2. Enter values for the variables:
	* `username`: The username of your Process Manager API user
	* `password`: The password of your API user
	* `host`: The region-specific base URL of SAP Signavio, for example `api.eu.signavio.cloud.sap`
	* `tenantId`: The ID of your workspace; only necessary if the API user is member of multiple tenants
	
## Using the Collection

To use the collection, follow these steps:

1. From the workspace sidebar, open **Collections** and select **SAP Signavio Process Manager**.
2. Open the **Authentication** folder, select Login and click **Send**. This dispatches a request to obtain an authentication token and set up necessary environment variables.
3. The available endpoints are organized into categories - **Folders**, **Diagrams** and so on. Open a category, select an endpoint and click **Send** to dispatch a request.<br/></br>**TIP:** Some requests rely on IDs that have been retrieved by previous requests. To ensure the required data is available, execute the requests in the provided order. After each `DELETE` request, execute the request that creates the corresponding resource again.
