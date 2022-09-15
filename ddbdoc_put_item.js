
import { PutCommand } from "@aws-sdk/lib-dynamodb";
import { ddbDocClient } from "./libs/ddbDocClient";

// Set the parameters.
export const params = {
    TableName: "plotsV2",
    /*
      Convert the key JavaScript object you are adding to the
      required Amazon DynamoDB record. The format of values specifies
      the datatype. The following list demonstrates different
      datatype formatting requirements:
      String: "String",
      NumAttribute: 1,
      BoolAttribute: true,
      ListAttribute: [1, "two", false],
      MapAttribute: { foo: "bar" },
      NullAttribute: null
       */
    Item: {
        "key": "test", // For example, 'Season': 2
        // sortKey: "VALUE_2", // For example,  'Episode': 2 (only required if table has sort key)
        "value": "42", //For example 'Title': 'The Beginning'
    },
};

export const run = async () => {
    try {
        const data = await ddbDocClient.send(new PutCommand(params));
        console.log("Success - item added or updated", data);
        return data;
    } catch (err) {
        console.log("Error", err);
    }
};
run();
