## Custom Error Handling

## MAPQUEST Developer

```
$ yarn add node-geocoder
```

https://developer.mapquest.com/

## Mailtrap

```
$ yarn add nodemailer
```

https://mailtrap.io
<br>
https://nodemailer.com/about/

# API SECURITY

## mongo-sanitize

https://github.com/vkarpov15/mongo-sanitize#readme
<br>
https://github.com/fiznool/express-mongo-sanitize

```
$ yarn add exprss-mongo-sanitize
```

## helmet

여러 공격으로부터 보호해줌 아래사이트에서 확인

https://helmetjs.github.io/

```
$ yarn add helmet
```

## xss-clean

input 태그에 자바스크립트 입력하는 거방지

https://github.com/jsonmaur/xss-clean

```
$ yarn add xss-clean
```

## express-rate-limit

접속제한?

https://github.com/nfriedly/express-rate-limit

```
$ yarn add express-rate-limit
```

## hpp

동일한 파라메터를 배열로 받을 수 있다.

https://github.com/analog-nico/hpp

```
$ yarn add hpp
```

## cors

양방향통신가능하게..?

https://github.com/expressjs/cors

```
$ yarn add cors
```

# Documentation & Deploy

## docgen

https://github.com/thedevsaddam/docgen

- 백앤드 작업 시 postman쓸때
- 브라우저에서 http://localhost:5000/api/v1/bootcamps 와 같은 api에 접속할경우

1. install

   ```bash
   $ brew tap thedevsaddam/cli https://github.com/thedevsaddam/homebrew-cli.git

   $ brew install docgen
   ```

2. postman에서 export하기 (export된 파일은 json형식임)
3. 터미널 열고
   ```bash
   $ docgen build -i dc.postman_collection.json -o index.html
   ```
4. 생성된 index.html을 프로제트내 public폴더에 놓는다.

## digital ocean

https://www.digitalocean.com/products/droplets/?_campaign=DO_Dev_Awareness_G_Search_B_Generic_Alpha&_adgroup=digital_ocean&_keyword=digital%20ocean&_device=c&_copytype=nonbiz_ad&_adposition=1t1&_medium=brand_sem&_source=google&_dkitrig=&_2dkitrig=&gclid=Cj0KCQjwrrXtBRCKARIsAMbU6bGTuSXcoVZ47dbVbC1ydaGx1JAllxJRWLV0vHK7gB-1x7Z6dhPoyxoaAmkWEALw_wcB

## how to create ssh keys?

https://www.digitalocean.com/docs/droplets/how-to/add-ssh-keys/

```bash
$ ls ~/.ssh # enter
$ ssh-keygen # enter
```

```bash
Your identification has been saved in /home/username/.ssh/id_rsa.
Your public key has been saved in /home/username/.ssh/id_rsa.pub.
The key fingerprint is:
a9:49:EX:AM:PL:E3:3e:a9:de:4e:77:11:58:b6:90:26 username@203.0.113.0
The key's randomart image is:
+--[ RSA 2048]----+
|     ..o         |
|   E o= .        |
|    o. o         |
|        ..       |
|      ..S        |
|     o o.        |
|   =o.+.         |
|. =++..          |
|o=++.            |
+-----------------+
```

```bash
$ ls ~/.ssh
# id_rsa id_rsa.pub 가 생성되있을거임
```

```bash
$ cat ~/.ssh/id_rsa.pub
# 나오는 스트링을 카피
```

## Node.js Deploy

https://gist.github.com/bradtraversy/cd90d1ed3c462fe3bddd11bf8953a896

# Tamastudy API

> Backend API for Application, which is a bootcamp directory webise

## Usage

Rename "config/config.env.env" to "config/config.env" and uupdate the values/settings to your own

## Install Dependencies

```bash
$ yarn
```

## Run App

```
# Run in dev mode
$ yarn dev

# Run in prod mode
$ yarn start
```

- Version: 1.0.0
- Licence : MIT , Tamastudy

# Deploy on Server (digital Ocean)

## 서버접속

connect server

```bash
$ ssh root@[digital ocean IPaddress]
$ ssh root@206.189.181.179
```

node, yarn install

```bash
$ apt-get update
$ curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -

$ sudo apt install nodejs

$ node --version

$ curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -

$ echo "deb http://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
deb http://dl.yarnpkg.com/debian/ stable main

$ apt-get update

$ apt-get install yarn
```

git clone

```
$ mkdir apps
$ cd apps
$ git clone https://github.com/rakutenjongseok/tamastudy_api
$ mv config/config.env.env config/config.env
```

config.env 수정

```
$ cd tamastudy_api
$ nano config/config.env
# 정보 입력
```

mongodb에 등록하기

- https://cloud.mongodb.com/v2/5ce73a12014b761dcc9cfb59#clusters

- SECURITY > Network Access

- ADD IP ADDRESS

```
Whitelist Entry : 206.189.181.179
Comment : TamaStudy Digital Ocean Production Server
```

## PM2 Process Manager Setup

> why ?

- 매번 서버를 On/Off 하는 것이 번거롭다.

1. digital ocean

- Snapshots 페이지

2. pm2 install (on Server!)

```bash
$ npm i -g pm2
```

```bash
$ pm2 start server.js
```

3. pm2 option

```
$ pm2 start app (or whatever your file name)

# Other pm2 commands
$ pm2 show app
$ pm2 status
$ pm2 restart app
$ pm2 stop app
$ pm2 logs (Show log stream)
$ pm2 flush (Clear logs)

# To make sure app starts when reboot
$ pm2 startup ubuntu
```

## nginx reverse proxy setup

> why ?

- 포트번호가 노출되기때문에

1. nginx install (on Server !!)

```bash
$ apt install nginx
```

2. ufw 설정

80번 포트 외엔 접속할 수 없게 셋팅

```bash
root@tamastudy-api:~/apps/tamastudy_api# ufw status
Status: inactive

root@tamastudy-api:~/apps/tamastudy_api# ufw enable
Command may disrupt existing ssh connections. Proceed with operation (y|n)? y
Firewall is active and enabled on system startup
root@tamastudy-api:~/apps/tamastudy_api# ufw allow ssh
Rule added
Rule added (v6)

root@tamastudy-api:~/apps/tamastudy_api# ufw status
Status: active

To                         Action      From
--                         ------      ----
22/tcp                     ALLOW       Anywhere
22/tcp (v6)                ALLOW       Anywhere (v6)

root@tamastudy-api:~/apps/tamastudy_api# ufw allow http
Rule added
Rule added (v6)

root@tamastudy-api:~/apps/tamastudy_api# ufw status
Status: active

To                         Action      From
--                         ------      ----
22/tcp                     ALLOW       Anywhere
80/tcp                     ALLOW       Anywhere
22/tcp (v6)                ALLOW       Anywhere (v6)
80/tcp (v6)                ALLOW       Anywhere (v6)

root@tamastudy-api:~/apps/tamastudy_api# ufw allow https
Rule added
Rule added (v6)

root@tamastudy-api:~/apps/tamastudy_api# ufw status
Status: active

To                         Action      From
--                         ------      ----
22/tcp                     ALLOW       Anywhere
80/tcp                     ALLOW       Anywhere
443/tcp                    ALLOW       Anywhere
22/tcp (v6)                ALLOW       Anywhere (v6)
80/tcp (v6)                ALLOW       Anywhere (v6)
443/tcp (v6)               ALLOW       Anywhere (v6)
```

요약

```
$ sudo ufw enable
$ sudo ufw status
$ sudo ufw allow ssh (Port 22)
$ sudo ufw allow http (Port 80)
$ sudo ufw allow https (Port 443)
```

## Install NGINX and configure

```
$ sudo apt install nginx

$ sudo nano /etc/nginx/sites-available/default
```

Add the following to the location part of the server block

```
server {
    server_name tamastudy.io www.tamastudy.io

    location / {
        proxy_pass http://localhost:5000;#whatever port your app runs on
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}

```

```bash
# Check NGINX config
$ sudo nginx -t

# Restart NGINX
$ sudo service nginx restart
```

## 도메인 구입

https://www.namecheap.com/

- 사버렸다.... 10달러!!!

## SSL (https) setting

- 90일무료라니까 나중에하자...

Register and/or setup domain from registrar
I prefer Namecheap for domains. Please use this affiliate link if you are going to use them https://namecheap.pxf.io/c/1299552/386170/5618

Choose "Custom nameservers" and add these 3

ns1.digitalocean.com
ns2.digitalocean.com
ns3.digitalocean.com
It may take a bit to propogate

Add SSL with LetsEncrypt
sudo add-apt-repository ppa:certbot/certbot
sudo apt-get update
sudo apt-get install python-certbot-nginx
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com

# Only valid for 90 days, test the renewal process with

certbot renew --dry-run
Now visit https://yourdomain.com and you should see your Node app
