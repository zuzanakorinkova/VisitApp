/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
const AWS = require('aws-sdk');

const docClient = new AWS.DynamoDB.DocumentClient();

//process.env
const env = process.env.ENV;
const AppSyncID = process.env.API_VISIT_GRAPHQLAPIIDOUTPUT;

const TableName = `User-${AppSyncID}-${env}`; //TableName-AppSync ID-env

const userExists = async id => {
  const params = {
    TableName,
    Key: id,
  };
  try {
    const response = await docClient.get(params).promise();
    return !!response?.item;
  } catch (e) {
    return false;
  }
};

const saveUser = async user => {
  const date = new Date();
  const timestamp = date.toISOString();
  const Item = {
    ...user,
    __typename: 'User',
    createdAt: timestamp,
    updatedAt: timestamp,
  };
  const params = {
    TableName,
    Item,
  };
  try {
    await docClient.put(params).promise();
  } catch (e) {
    console.log(e);
  }
};
exports.handler = async (event, context) => {
  // insert code to be executed by your lambda trigger
  console.log('Lambda function!!!');
  console.log(event);
  if (!event?.request.userAttributes) {
    console.log('No user data available');
    return;
  }

  const {sub, name, email} = event.request.userAttributes;

  const newUser = {
    id: sub,
    name: name,
    email: email,
    nofPosts: 0,
    nofLikes: 0,
  };

  // check if the user already exists

  // if not, save the user to db

  if (!(await userExists(newUser.id))) {
    await saveUser(newUser);
    console.log(`User ${newUser.id} has been saved to the database`);
  } else {
    console.log(`User ${newUser.id} already exists`);
  }

  return event;
};
