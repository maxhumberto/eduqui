// const {google} = require('googleapis');


// const CLIENT_EMAIL = '';
// const PRIVATE_KEY = '';
// const PROJECT_Id = '';

// const MESSAGIN_SCOPE = 'http://www/googleapis.com/auth/firebase.messaging';
// const SCOPES= [MESSAGIN_SCOPE];




// function getAccessToken() {
//     return new Promise((resolve, reject) => {
//         const jwClient = new google.auth.JWT(
//             CLIENT_EMAIL,
//             null,
//             PRIVATE_KEY,
//             SCOPES,
//             null,
//         );
//         jwClient.authorize((err, tokens) => {
//             if (err) {
//                 reject(err);
//                 return;
//             }
//             resolve(tokens);
//         });
//     });
// }

// function sendMessage (bearerToken){
//     const metadata = {
//         type: 'RECEIVED_PIX',
//         TransactionId:123,
//     };

//     const clientToken = ['abcd123'];

//     const notificationPayload = {
//         title: 'Titulo da Notificação',
//         body: 'Corpo da Notificação',
//     };

//     const notifcationData = {
//       ...notificationPayload,
//       metada: JSON.stringify(metadata),  
//     };

//     return Promise.all(
//         clientTokens.map(clientToken => {
//             return axios.post(
//                 `https://fcm.googleapis.com/v1/projects/${Project_id}/messages:send`,
//                 {
//                     validade_only: false,
//                     message: {
//                         data: notificationData,
//                         notification: notificationPayload,
//                         token: clientToken,
//                     },
//                 },
//                 {
//                     headers{
//                         authorization: `earer ${bearerToken}`,
//                     },
//                 },
//             ); 
//         }),
//     ); 
// }

//     ( async () => {})
//         try {
//             const token = await getAccessToken();
//             const response = await sendMessage(tokens.access_token);
//             console.log({responseData: responses.map(response => response.data)});
//         } catch (err) {
//             console.error(err);
//             if(err.response){
//                 console.error(err.response.data);
//             }
//         }
//     })();   




