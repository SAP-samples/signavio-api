# SAP Signavio API

<!--- Register repository https://api.reuse.software/register, then add REUSE badge:
[![REUSE status](https://api.reuse.software/badge/github.com/SAP-samples/REPO-NAME)](https://api.reuse.software/info/github.com/SAP-samples/REPO-NAME)
-->

## Description

This repository provides Postman collections and environments as well as other guidance to jumpstart your development with SAP Signavio.

### Postman Collections

Postman is an application which enables developers to design, build and test APIs. A Postman collection is a group of saved API requests for use in the application.

For your convenience, this repository provides Postman collections which you can reuse to access SAP Signavio APIs.

### Postman Environments

Postman allows the use of variables so you can store and reuse values in different places. A Postman environment is a set of related variables grouped together to make using collections more convenient.

## Requirements

### Postman

You should have already downloaded and installed Postman. If not, it is available via the [Postman Downloads page](https://www.postman.com/downloads/).

### Process Intelligence Ingestion API

If you wish to send requests to the Ingestion API, you must ensure the following:

* You have created a source data with the Ingestion API source system or a process data pipeline. For more information, see [Set Up Source Data](https://documentation.signavio.com/suite/en-us/Content/process-intelligence/etl-set-up-data-ingestion.htm).
* You have obtained a valid access token which is used to authenticate calls to the Ingestion API. To obtain such a token, see [Ingestion API Authentication](https://documentation.signavio.com/suite/en-us/Content/process-intelligence/etl-ingestion-api-auth.htm).


## Download and Installation

To begin using a Postman collection, follow these steps.

1. Download a collection JSON file from this repository and save it to your local file system.
2. If there is an associated environment file, download and save this file also. For example, the file `SAP Signavio Process Intelligence.postman_collection.json` has an accompanying file, `SAP Signavio Process Intelligence.postman_environment.json`.
3. In Postman, select **File** &rarr; **Import** and then **Upload Files**.<br>This opens a file selection dialogue.
4. Select the collection and/or environment files you downloaded, then **Open**.<br>This displays a summary of the files to be imported.
5. Select **Import**.<br>This adds the collection and any environment to your workspace.
6. For guidance on using a specific collection, refer to relevant subsection in 'Using the Postman Collections' below.

## Using the Postman Collections

Find guidance on using your Postman collection in the subsections below.

### SAP Signavio Process Intelligence

#### Ingestion API

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
4. In the table, add a new row for each data file for each file to be uploaded. Ensure each entry is of type 'File' and choose the file using the **Select Files** button.
5. Dispatch the Upload Data request with **Send**.<br>After a short wait, you should receive a repsonse containing `status` and `payload` properties.
6. Open the Get Upload Status request. In the Collections sidebar, select **SAP Signavio Process Intelligence** &rarr; **Ingestion API** &rarr; **Get Upload Status**.<br>This opens the Get Upload Status details view. The address of this request contains the `{{executionId}}` variable. It is assigned a value automatically after a successful Upload Data request. You don't need to enter a value for this variable.
7. Dispatch the Get Upload Status request with **Send**.<br>After a short wait, you should receive a response containing `status` and `payload` properties.


## Known Issues

### Process Intelligence Ingestion API

If you encounter errors, the documentation provides a [troubleshooting guide](https://documentation.signavio.com/suite/en-us/Content/process-intelligence/pdm-troubleshooting-ingestion-api.htm).



## How to obtain support
[Create an issue](https://github.com/SAP-samples/signavio-api/issues) in this repository if you find a bug or have questions about the content.
 
For additional support, [ask a question in SAP Community](https://answers.sap.com/questions/ask.html).

## Contributing
If you wish to contribute code, offer fixes or improvements, please send a pull request. Due to legal reasons, contributors will be asked to accept a DCO when they create the first pull request to this project. This happens in an automated fashion during the submission process. SAP uses [the standard DCO text of the Linux Foundation](https://developercertificate.org/).

## License
Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved. This project is licensed under the Apache Software License, version 2.0 except as noted otherwise in the [LICENSE](LICENSE) file.
