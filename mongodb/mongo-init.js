db.createUser({
    user: 'pdnCoahOAuth',
    pwd: 'pdnc04h04u7h',
    roles: [
      { role: 'readWrite', db: 's1-oauth' },
      { role: 'dbAdmin', db: 's1-oauth' }
    ]
  });
  
  db = db.getSiblingDB('s1-oauth'); // Cambiar a la base de datos s1-oauth
  
  db.oauths.insertOne({
    "username": "pdnCoahOauth",
    "password": "pdnc04Oauth",
    "scope": ["read"],
    "client_id": "pdnCoahOauth",
    "client_secret": "53CR37"
  });
  
  db = db.getSiblingDB('admin'); // Regresar a la base de datos admin
  
  db.createUser({
    user: 'pdnCoah_api',
    pwd: 'pdnc04h_api',
    roles: [
      { role: 'readWrite', db: 's1-api' },
      { role: 'dbAdmin', db: 's1-api' }
    ]
  });
  