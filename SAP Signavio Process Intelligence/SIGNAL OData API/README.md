# SIGNAL OData API Postman Collection

## Description

With the SIGNAL OData API you can access your analytical results via third-party systems in a secure and easy-to-use way using the Open Data (OData) Protocol.

For more information, see [SIGNAL OData API](https://help.sap.com/docs/signavio-process-intelligence/api-guide/signal-odata-api).

## Requirements

If you wish to send requests to the SIGNAL OData API, you must ensure the following:

* You've created an OData view. Read [Creating OData Views](https://help.sap.com/docs/signavio-process-intelligence/api-guide/creating-odata-views) to learn more.
* Access to the feature should be configured. To find out how to do this, check out [User Access](https://help.sap.com/docs/signavio-process-intelligence/api-guide/configuring-user-access). This includes:
  * Activating the SIGNAL OData API feature set. 
  * Configuring the appropriate access rights to both the feature set and the OData view you wish to request.
* You've generated an authentication token, which can learn about in [Generating API Access Tokens](https://help.sap.com/docs/signavio-process-intelligence/api-guide/generating-api-access-tokens).

## Using the Collection

This collection provides three requests:

* Root Service
* Metadata Service
* Entity Set Name Service

For more details on these requests, refer to [Requests and Responses](https://help.sap.com/docs/signavio-process-intelligence/api-guide/requests-and-responses).

The associated environment defines several variables. Select the environment 'SAP Signavio Process Intelligence' to enable it. All requests require you to first provide suitable values for the following variables:

* `baseUrl`: The region-specific base URL of the server. To determine the value for your region, refer to [Base URL](https://help.sap.com/docs/signavio-process-intelligence/api-guide/requests-and-responses#base-url).
* `token`: Your authentication token.

If you wish to dispatch a request to the Entity Set Name Service, you must supply a value for an additional variable:

* `entitySetName`: The name of the specific view you wish to request.

Once these variables are defined, you can send a request. In the Collections sidebar, expand **SAP Signavio Process Intelligence** &rarr; **SIGNAL OData API**, open your chosen request and click **Send**. After a short while, you should receive a response.

## Known Issues

If you encounter errors, the documentation provides a [list of response codes](https://help.sap.com/docs/signavio-process-intelligence/api-guide/requests-and-responses#response-codes) and a [troubleshooting page](https://help.sap.com/docs/signavio-process-intelligence/api-guide/troubleshooting).