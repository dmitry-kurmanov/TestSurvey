function CommonLogging(_AppName,_LogType,_ModuleName,_UserId,_IPAddress,_Message)
  {
  const params = new URLSearchParams();
  params.append('ApplicationName', _AppName);
  params.append('LogType', _LogType);
  params.append('ModuleName', _ModuleName);
  params.append('UserId', _UserId);
  params.append('BrowserIPAddress', _IPAddress);
  params.append('Message',_Message)
  axios({
    method: 'post',
    url: urlforLog,
    data: params
  }).catch((error)=> {
    console.log(error)
    
  }
  );
  
  }
  
   