export async function getCognitoAccessToken(username, password) {
    const clientId = "4nur5l5aqs5hp1tvurcc6gt5oj"; // Replace with your Cognito App Client ID
    const url = "https://cognito-idp.ap-south-1.amazonaws.com/";
  
    const body = JSON.stringify({
      AuthParameters: {
        USERNAME: username,
        PASSWORD: password,
      },
      AuthFlow: "USER_PASSWORD_AUTH",
      ClientId: clientId,
    });
  
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-amz-json-1.1",
          "X-Amz-Target": "AWSCognitoIdentityProviderService.InitiateAuth",
          "X-Amz-User-Agent": "aws-amplify/0.1.x js",
        },
        body: body,
      });
  
      if (response.ok) {
        const responseBody = await response.json();
        if (responseBody.AuthenticationResult && responseBody.AuthenticationResult.IdToken) {
          const token = responseBody.AuthenticationResult.IdToken;
          console.log("Token received: ", token);
          return { success: true, token: token };
        } else {
          return { success: false, message: "Failed to retrieve token." };
        }
      } else {
        const errorBody = await response.json();
        const errorMessage = errorBody.message || "HTTP error! status: " + response.status;
        return { success: false, message: errorMessage };
      }
    } catch (error) {
      console.error("Error fetching Cognito access token:", error);
      return { success: false, message: error.message };
    }
  }