
import { PutCommand } from "@aws-sdk/lib-dynamodb";
import { ddbDocClient } from "./libs/ddbDocClient.js";

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
        "key": "test2", // For example, 'Season': 2
        // sortKey: "VALUE_2", // For example,  'Episode': 2 (only required if table has sort key)
        "value": { "date": { "0": "2022-09-02", "1": "2022-09-03", "2": "2022-09-04", "3": "2022-09-05", "4": "2022-09-06", "5": "2022-09-07", "6": "2022-09-08", "7": "2022-09-09", "8": "2022-09-10", "9": "2022-09-11", "10": "2022-09-12", "11": "2022-09-13", "12": "2022-09-14", "13": "2022-09-15" }, "value": { "0": 1, "1": 5, "2": 0, "3": 2, "4": 2, "5": 3, "6": 3, "7": 2, "8": 5, "9": 0, "10": 2, "11": 0, "12": 3, "13": 0 } }, //For example 'Title': 'The Beginning'
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
