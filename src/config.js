export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    STRIPE_KEY: "pk_test_51H86vYJ8uaYUpck8xHKBwvxEIdUpz6icqu5cD3n37NpYRNJthjZdi0CPXkqKHjLaxrBefp9CUsSDuF92I3RjOrTa00Eja43MJ0",
    s3: {
      REGION: "us-east-1",
      BUCKET: "phils-notes-app-uploads"
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://y2qkh7zqr0.execute-api.us-east-1.amazonaws.com/prod"
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_oZbLRPPFW",
      APP_CLIENT_ID: "569ocjkokmvdu8q7obq0qp7eu7",
      IDENTITY_POOL_ID: "us-east-1:f19392e5-9ee3-44cd-bded-fca90e71c075"
    }
  };