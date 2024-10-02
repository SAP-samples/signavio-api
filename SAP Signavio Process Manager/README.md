# SAP Signavio Process Manager API Postman Collection

With the SAP Signavio Process Manager APIs, you can integrate the application with third-party applications, allowing you to manage all diagram, folder and dictionary data. You can do things such as create, update or retrieve your data in addition to other operations. 

For more information, see the [SAP Signavio Process Manager API Guide](https://help.sap.com/docs/signavio-process-manager/sap-signavio-process-manager-api-guide/sap-signavio-process-manager-api-guide).

## Using the Collection

Included in this folder is the file `SAP Signavio Process Manager.postman_collection.json`. This contains a collection of endpoint definitions that you can reuse in the Postman application. To use the collection, follow these steps:

1. Send an authentication request to obtain an authentication token. To do this, follow the instructions in [Authentication](https://help.sap.com/docs/signavio-process-manager/sap-signavio-process-manager-api-guide/authentication).
2. Copy the authentication token into a Postman environment variable called `local.token`. This ensures it will be included in all requests you make using this collection.
3. From the workspace sidebar, open **Collections** and select **SAP Signavio Process Manager**. The available endpoints are organized into categories. Open a category, select an endpoint and click Send to dispatch a request.<br/></br>**TIP:** Some requests rely on IDs that have been retrieved by previous requests. To ensure the required data is available, execute the requests in the provided order. After each `DELETE` request, execute the request that creates the corresponding resource again.
