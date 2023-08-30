 //apiRouter.js
  
 const express =require('express');
 const apiRouter = express.Router();
 const AgoraAccessToken = require('agora-access-token');
const appID = 'a0a11a1a456145e79244ab886d16ca1f';
const appCertificate = '70a4174e056b43369665fe3ebf75783f';
   
 apiRouter.post('/generate_token', (req, res) => {
        const { channelName, uid, role } = req.body;
        const token = generateAgoraToken(channelName, uid, role);
        res.json({ token });
});

function generateAgoraToken(channelName, uid, role) {
  const token = AgoraAccessToken.RtcTokenBuilder.buildTokenWithUid(
    appID,
    appCertificate,
    channelName,
    uid,
    role
  );

  return token;
}
 module.exports = apiRouter;