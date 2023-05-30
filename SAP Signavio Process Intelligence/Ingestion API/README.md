# Ingestion API Postman Collection

## Description

With the Ingestion API you can upload data to SAP Signavio Process Intelligence from any connection and then get the status of the data upload request.

Fore more information, see [Ingestion API](https://documentation.signavio.com/suite/en-us/Content/process-intelligence/ingestion-api.htm)


## Requirements

If you wish to send requests to the Ingestion API, you must ensure the following:

* You have created a source data with the Ingestion API source system or a process data pipeline. For more information, see [Set Up Source Data](https://documentation.signavio.com/suite/en-us/Content/process-intelligence/etl-set-up-data-ingestion.htm).
* You have obtained a valid access token which is used to authenticate calls to the Ingestion API. To obtain such a token, see [Ingestion API Authentication](https://documentation.signavio.com/suite/en-us/Content/process-intelligence/etl-ingestion-api-auth.htm).


## Using the Collection

This collection provides two requests.

* Upload Data: Sends a POST request which uploads a dataset.
* Get Upload Status: Send a GET request which returns the current status of an upload request.

For more information on the details of these requests, see [Ingestion API](https://documentation.signavio.com/suite/en-us/Content/process-intelligence/ingestion-api.htm).

The associated environment defines several variables. Select the environment 'SAP Signavio Process Intelligence' to enable it.

To use the collection, perform the following steps:

1. Enter suitable values for all variables. Open the 'SAP Signavio Process Intelligence' environment and provide values for:
   * `schema`: The JSON (Avro) schema for which this data is pushed.
   * `primaryKeys`: The comma separated list of primary keys, for example '`key1,key2,key3`'.
   * `authenticationToken`: The authentication token associated with your connection.
   * `delimiter`: The delimiter character separating the fields in your data files.
   * `baseUrl`: The region-specific base URL of the server. To determine the value for your region, see [Ingestion API](https://documentation.signavio.com/suite/en-us/Content/process-intelligence/ingestion-api.htm#AccesstheingestionAPI). 
2. Select the files containing the data to be uploaded. In the Collections sidebar, select **SAP Signavio Process Intelligence** &rarr; **Ingestion API** &rarr; **Upload Data**.<br>This opens the Upload Data details view.
3. Select **Body**.<br>This opens a table of request body parameters. Some parameters are already present.
4. In the table, add a new row for each data file to be uploaded. Ensure each entry is of type 'File' and choose the file using the **Select Files** button.
5. Dispatch the Upload Data request with **Send**.<br>After a short wait, you should receive a response containing `status` and `payload` properties.
6. Open the Get Upload Status request. In the Collections sidebar, select **SAP Signavio Process Intelligence** &rarr; **Ingestion API** &rarr; **Get Upload Status**.<br>This opens the Get Upload Status details view. The address of this request contains the `{{executionId}}` variable. It is assigned a value automatically after a successful Upload Data request. You don't need to enter a value for this variable.
7. Dispatch the Get Upload Status request with **Send**.<br>After a short wait, you should receive a response containing `status` and `payload` properties.


## Known Issues

If you encounter errors, the documentation provides a [troubleshooting guide](https://documentation.signavio.com/suite/en-us/Content/process-intelligence/pdm-troubleshooting-ingestion-api.htm).
