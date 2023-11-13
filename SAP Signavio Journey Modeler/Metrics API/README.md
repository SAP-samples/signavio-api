# Postman Collection for SAP Signavio Journey Modeler Metrics API

## Description

Journey Modeler's Metrics API allows you to integrate third-party systems and manage metrics automatically.

To get started learning about the API, refer to [Using the Metrics API](https://help.sap.com/docs/signavio-journey-modeler/sap-signavio-journey-modeler-api-guide/manual-and-automated-data).

## Requirements

If you wish to use the Metrics API, first ensure:

* You've set up a journey model containing a metric whose entry source is 'SAP Signavio API'.
* You have the unique IDs of any journey or metric you wish to manage.
* You're authorized to read and write the relevant metrics.

Otherwise, refer to [Adding Metrics via API](https://help.sap.com/docs/signavio-journey-modeler/user-guide/adding-metrics-automatically).

## Using the Collection

Included in this directory are a Postman collection file and a Postman environment file.

* The collection provides a request called Update Metric that pushes a value to an existing metric via a `POST` request.
* The environment defines several variables for use in the collection. Select the environment 'SAP Signavio Journey Modeler' to enable them.

To use the collection, perform the following steps:

1. Send an authentication request to obtain an authentication token. To do this, follow the instructions in [Authentication and Authorization](https://help.sap.com/docs/signavio-journey-modeler/sap-signavio-journey-modeler-api-guide/authentication-and-authorization).
2. Enter suitable values for all variables. Open the 'SAP Signavio Journey Modeler' environment and provide values for:
   * `journeyId`: The ID of the journey to be updated.
   * `metricId`: The ID of the metric to be updated.
   * `baseUrl`: The region-specific base URL of the server. To determine the value for your region, see [Base URL](https://help.sap.com/docs/signavio-journey-modeler/sap-signavio-journey-modeler-api-guide/manual-and-automated-data#base-url).
   * `token`: The authentication token you obtained in step 1.
3. From the workspace sidebar, open **Collections** and select **SAP Signavio Journey Modeler** &rarr; **Metrics** &rarr; **Update Metric**.
4. Open the **Body** of the request and enter the payload value. The payload should adhere to the following format:
   ```
   {
        "value": {
            "promoters": <<numberOfPromoters>>,
            "passives": <<numberOfPassives>>,
            "detractors": <<numberOfDetractors>>,
            "time": <<timestamp>>
        },
        "type": "NPS"
    }
    ```
5. Dispatch the request with **Send**.<br>After a short wait, you should receive a response. Response codes for this request are documented in the [SAP Business Accelerator Hub](https://api.sap.com/api/MetricsExternal/path/addAutomaticMeasurementToMetric).

## Further Reading

Comprehensive documentation for the Metrics API is available on the [SAP Business Accelerator Hub](https://api.sap.com/api/MetricsExternal/overview).
