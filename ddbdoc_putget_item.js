import { GetCommand } from "@aws-sdk/lib-dynamodb";
import { PutCommand } from "@aws-sdk/lib-dynamodb";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

const REGION = "us-east-2";
const ddbClient = new DynamoDBClient({ region: REGION });

const marshallOptions = {
    // Whether to automatically convert empty strings, blobs, and sets to `null`.
    convertEmptyValues: false, // false, by default.
    // Whether to remove undefined values while marshalling.
    removeUndefinedValues: false, // false, by default.
    // Whether to convert typeof object to map attribute.
    convertClassInstanceToMap: false, // false, by default.
};
const unmarshallOptions = {
    // Whether to return numbers as a string instead of converting them to native JavaScript numbers.
    wrapNumbers: false, // false, by default.
};
const translateConfig = { marshallOptions, unmarshallOptions };
const ddbDocClient = DynamoDBDocumentClient.from(ddbClient, translateConfig);

const put_params = {
    TableName: "plotsV2",
    Item: {
        "key": "test3",
        "value": { "date": { "0": "2022-09-02", "1": "2022-09-03", "2": "2022-09-04", "3": "2022-09-05", "4": "2022-09-06", "5": "2022-09-07", "6": "2022-09-08", "7": "2022-09-09", "8": "2022-09-10", "9": "2022-09-11", "10": "2022-09-12", "11": "2022-09-13", "12": "2022-09-14", "13": "2022-09-15" }, "value": { "0": 1, "1": 5, "2": 0, "3": 2, "4": 2, "5": 3, "6": 3, "7": 2, "8": 5, "9": 0, "10": 2, "11": 0, "12": 3, "13": 0 } }, //For example 'Title': 'The Beginning'
    },
};
const put = async () => {
    try {
        const data = await ddbDocClient.send(new PutCommand(put_params));
        console.log("Success - item added or updated", data);
        return data;
    } catch (err) {
        console.log("Error", err);
    }
};

const get_params = {
    TableName: "plotsV2",

    Key: {
        "key": "test3",
    },
};
const get = async () => {
    try {
        const data = await ddbDocClient.send(new GetCommand(get_params));
        console.log("Success :", data);
        console.log("Success :", data.Item.value);
        return data;
    } catch (err) {
        console.log("Error", err);
    }
};

// put();
get();


