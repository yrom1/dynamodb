// Import required AWS SDK clients and commands for Node.js
import { GetItemCommand } from "@aws-sdk/client-dynamodb";
import { ddbClient } from "./libs/ddbClient.js";

// Set the parameters
export const params = {
    TableName: "plotsV2", //TABLE_NAME
    Key: {
        "key": { "S": "test" },
    },
    // ProjectionExpression: "ATTRIBUTE_NAME",
};

export const run = async () => {
    const data = await ddbClient.send(new GetItemCommand(params));
    console.log("Success", data.Item);
    return data;

};
run();

