// Import required AWS SDK clients and commands for Node.js
import { PutItemCommand } from "@aws-sdk/client-dynamodb";
import { ddbClient } from "./libs/ddbClient.js";

// Set the parameters
export const params = {
    TableName: "plotsV2",
    Item: {
        "key": { "S": "test" },
        // okay this is weird
        // to put a number, it must be sent as a string
        // https://stackoverflow.com/questions/71488712/number-value-cannot-be-converted-to-string-when-updating-item
        "value": { "N": "42" },
    },
};

export const run = async () => {
    try {
        const data = await ddbClient.send(new PutItemCommand(params));
        console.log(data);
        return data;
    } catch (err) {
        console.error(err);
    }
};
run();
