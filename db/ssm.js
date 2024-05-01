const AWS = require("aws-sdk");

// Configure AWS SDK with your credentials
AWS.config.update({ region: "us-east-1" }); // Replace with your AWS region

const ssm = new AWS.SSM({ region: "us-east-1" });

async function getParameter(paramName) {
  try {
    const params = {
      Name: paramName,
      WithDecryption: true, // Decrypt the SecureString parameter
    };
    const data = await ssm.getParameter(params).promise();
    return data.Parameter.Value;
  } catch (error) {
    console.error("Error retrieving parameter:", error);
    throw error; // Or handle the error gracefully
  }
}

module.exports = getParameter;
