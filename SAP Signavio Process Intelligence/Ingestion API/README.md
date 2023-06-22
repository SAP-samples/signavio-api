# Ingestion API Postman Collection

## Description

With the Ingestion API you can upload data to SAP Signavio Process Intelligence from any connection and then get the status of the data upload request.

Fore more information, see [Ingestion API](https://help.sap.com/docs/signavio-process-intelligence/api-guide/ingestion-api)


## Requirements

If you wish to send requests to the Ingestion API, you must ensure the following:

* You have created a source data with the Ingestion API source system or a process data pipeline. For more information, see [Set Up Source Data](https://help.sap.com/docs/signavio-process-intelligence/user-guide/source-data-setup).
* You have obtained a valid access token which is used to authenticate calls to the Ingestion API. To obtain such a token, see [Ingestion API Authentication](https://help.sap.com/docs/signavio-process-intelligence/api-guide/ingestion-api-authentication).


## Using the Collection

This collection provides two requests.

* Upload Data: Sends a POST request which uploads a dataset.
* Get Upload Status: Send a GET request which returns the current status of an upload request.

For more information on the details of these requests, see [Ingestion API](https://help.sap.com/docs/signavio-process-intelligence/api-guide/ingestion-api).

The associated environment defines several variables. Select the environment 'SAP Signavio Process Intelligence' to enable it.

To use the collection, perform the following steps:

1. Enter suitable values for all variables. Open the 'SAP Signavio Process Intelligence' environment and provide values for:
   * `schema`: The schema for which this data is pushed. Written in JSON using the Apache Avro format.
   * `primaryKeys`: The comma separated list of primary keys, for example '`key1,key2,key3`'.
   * `authenticationToken`: The authentication token associated with your connection.
   * `delimiter`: The delimiter character separating the fields in your data files.
   * `baseUrl`: The region-specific base URL of the server. To determine the value for your region, see [Ingestion API](https://help.sap.com/docs/signavio-process-intelligence/api-guide/ingestion-api#ingestion-api-base-url). 
   <br>**Note:** The environment file comes with example values for `schema`, `primaryKeys` and `delimiter` already entered. These values are compatible with the test data in `example-data.csv` should you wish to test using that file. Otherwise, replace them with values suitable for your own data.
2. Select the files containing the data to be uploaded. In the Collections sidebar, select **SAP Signavio Process Intelligence** &rarr; **Ingestion API** &rarr; **Upload Data**.<br>This opens the Upload Data details view.
3. Select **Body**.<br>This opens a table of request body parameters. Some parameters are already present.
4. In the table, add a new row for each data file to be uploaded. Ensure each entry is of type 'File' and choose the file using the **Select Files** button.
5. Dispatch the Upload Data request with **Send**.<br>After a short wait, you should receive a response containing `status` and `payload` properties.
6. Open the Get Upload Status request. In the Collections sidebar, select **SAP Signavio Process Intelligence** &rarr; **Ingestion API** &rarr; **Get Upload Status**.<br>This opens the Get Upload Status details view. The address of this request contains the `{{executionId}}` variable. It is assigned a value automatically after a successful Upload Data request. You don't need to enter a value for this variable.
7. Dispatch the Get Upload Status request with **Send**.<br>After a short wait, you should receive a response containing `status` and `payload` properties.

## Further Reading

* Learn more about the [Apache Avro format](https://avro.apache.org/docs/1.11.1/specification/).

## Known Issues

If you encounter errors, the documentation provides a [troubleshooting guide](https://help.sap.com/docs/signavio-process-intelligence/api-guide/ingestion-api-troubleshooting).
