(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{209:function(e,t,r){"use strict";r.r(t);var a=r(0),s=Object(a.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"🐋-awesome-ttrss"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#🐋-awesome-ttrss","aria-hidden":"true"}},[e._v("#")]),e._v(" 🐋 Awesome TTRSS")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://img.shields.io/docker/pulls/wangqiru/ttrss.svg",alt:"Docker Pulls"}}),e._v(" "),r("img",{attrs:{src:"https://img.shields.io/docker/stars/wangqiru/ttrss.svg",alt:"Docker Stars"}}),e._v(" "),r("img",{attrs:{src:"https://img.shields.io/docker/automated/wangqiru/ttrss.svg",alt:"Docker Automated build"}}),e._v(" "),r("img",{attrs:{src:"https://img.shields.io/docker/build/wangqiru/ttrss.svg",alt:"Docker Build Status"}}),e._v(" "),r("img",{attrs:{src:"https://app.fossa.com/api/projects/git%2Bgithub.com%2FHenryQW%2FAwesome-TTRSS.svg?type=shield",alt:"FOSSA Status"}})]),e._v(" "),r("h2",{attrs:{id:"about"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#about","aria-hidden":"true"}},[e._v("#")]),e._v(" About")]),e._v(" "),r("p",[e._v("🐋 Awesome TTRSS aims to provide a powerful "),r("strong",[e._v("Dockerized all-in-one")]),e._v(" solution for "),r("a",{attrs:{href:"https://tt-rss.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tiny Tiny RSS"),r("OutboundLink")],1),e._v(", an open source RSS feed reader and aggregator written in PHP, with enhanced user experience via simplified deployment and a list of curated plugins.")]),e._v(" "),r("h2",{attrs:{id:"special-thanks"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#special-thanks","aria-hidden":"true"}},[e._v("#")]),e._v(" Special Thanks")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://opencollective.com/awesome-ttrss#support",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://opencollective.com/awesome-ttrss/backers.svg",alt:"Backers"}}),r("OutboundLink")],1)]),e._v(" "),r("h2",{attrs:{id:"deployment"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#deployment","aria-hidden":"true"}},[e._v("#")]),e._v(" Deployment")]),e._v(" "),r("p",[e._v("A VPS is highly recommended to host your Awesome TTRSS instance, a VPS can be obtained from as little as $5/month at "),r("a",{attrs:{href:"https://m.do.co/c/d6ef3c80105c",target:"_blank",rel:"noopener noreferrer"}},[e._v("DigitalOcean"),r("OutboundLink")],1),e._v(". Alternatively, you may request for personalized support, fully-managed service or fully-managed VPS via sponsoring Awesome TTRSS on its "),r("a",{attrs:{href:"https://opencollective.com/Awesome-TTRSS/",target:"_blank",rel:"noopener noreferrer"}},[e._v("💰OpenCollective page"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("h3",{attrs:{id:"deployment-via-docker"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#deployment-via-docker","aria-hidden":"true"}},[e._v("#")]),e._v(" Deployment via docker")]),e._v(" "),r("div",{staticClass:"language-dockerfile extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("docker run -it --name ttrss --restart=always \\\n-e SELF_URL_PATH = [ your public URL ]  \\\n-e DB_HOST = [ your DB address ]  \\\n-e DB_PORT= [ your DB port ]  \\\n-e DB_NAME = [ your DB name ]  \\\n-e DB_USER = [ your DB user ]  \\\n-e DB_PASS = [ your DB password ]  \\\n-p [ public port ]:80  \\\n-d wangqiru/ttrss\n")])])]),r("h3",{attrs:{id:"deployment-via-docker-compose"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#deployment-via-docker-compose","aria-hidden":"true"}},[e._v("#")]),e._v(" Deployment via docker-compose")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/HenryQW/Awesome-TTRSS/blob/master/docker-compose.yml",target:"_blank",rel:"noopener noreferrer"}},[e._v("docker-compose.yml"),r("OutboundLink")],1),e._v(" include 4 docker images:")]),e._v(" "),r("ol",[r("li",[r("a",{attrs:{href:"https://hub.docker.com/r/wangqiru/ttrss",target:"_blank",rel:"noopener noreferrer"}},[e._v("TTRSS"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://hub.docker.com/r/sameersbn/postgresql",target:"_blank",rel:"noopener noreferrer"}},[e._v("PostgreSQL"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://hub.docker.com/r/wangqiru/mercury-parser-api",target:"_blank",rel:"noopener noreferrer"}},[e._v("Mercury Parser API"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://hub.docker.com/r/wangqiru/opencc-api-server",target:"_blank",rel:"noopener noreferrer"}},[e._v("OpenCC API"),r("OutboundLink")],1)])]),e._v(" "),r("h4",{attrs:{id:"steps"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#steps","aria-hidden":"true"}},[e._v("#")]),e._v(" Steps")]),e._v(" "),r("ol",[r("li",[e._v("Download "),r("a",{attrs:{href:"https://github.com/HenryQW/Awesome-TTRSS/blob/master/docker-compose.yml",target:"_blank",rel:"noopener noreferrer"}},[e._v("docker-compose.yml"),r("OutboundLink")],1),e._v(" to any directory.")]),e._v(" "),r("li",[e._v("Read "),r("code",[e._v("docker-compose.yml")]),e._v(" and change the settings (please ensure you have changed the password for postgres).")]),e._v(" "),r("li",[e._v("Run "),r("code",[e._v("docker-compose up -d")]),e._v(" and wait for the deployment to finish.")]),e._v(" "),r("li",[e._v("Access ttrss via port 181, with default credentials "),r("code",[e._v("admin")]),e._v(" and "),r("code",[e._v("password")]),e._v(", please change them asap.")]),e._v(" "),r("li",[r("code",[e._v("wangqiru/mercury-parser-api")]),e._v(" and "),r("code",[e._v("wangqiru/opencc-api-server")]),e._v(" are optional service containers to support additional features, removing them will not affect TTRSS's basic functionalities.")])]),e._v(" "),r("h3",{attrs:{id:"supported-environment-variables"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#supported-environment-variables","aria-hidden":"true"}},[e._v("#")]),e._v(" Supported Environment Variables")]),e._v(" "),r("ul",[r("li",[e._v("SELF_URL_PATH: the url to your TTRSS instance")]),e._v(" "),r("li",[e._v("DB_HOST: the address of your database")]),e._v(" "),r("li",[e._v("DB_PORT: the port of your database")]),e._v(" "),r("li",[e._v("DB_NAME: the name of your database, please keep the variable consistent in both "),r("code",[e._v("database.postgres")]),e._v(" and "),r("code",[e._v("service.rss")])]),e._v(" "),r("li",[e._v("DB_USER: the user of your database")]),e._v(" "),r("li",[e._v("DB_PASS: the password of your database")]),e._v(" "),r("li",[e._v("ENABLE_PLUGINS: the plugins you'd like to enable at system level, note that "),r("code",[e._v("auth_internal")]),e._v(" is required")]),e._v(" "),r("li",[e._v("SESSION_COOKIE_LIFETIME: the expiry time for your login session cookie in hours, default to "),r("code",[e._v("24")]),e._v(" hours")]),e._v(" "),r("li",[e._v("HTTP_PROXY: "),r("code",[e._v("ip:port")]),e._v(", the global proxy for your TTRSS instance, to set proxy on a per feed basis, use "),r("a",{attrs:{href:"#options-per-feed"}},[e._v("Options per Feed")])]),e._v(" "),r("li",[e._v("SINGLE_USER_MODE: "),r("code",[e._v("true")]),e._v(" will enable single user mode and disable user authentication, which means login will not be required. "),r("strong",[e._v("Please only enable this under a secure environment")])])]),e._v(" "),r("h3",{attrs:{id:"configure-https"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#configure-https","aria-hidden":"true"}},[e._v("#")]),e._v(" Configure HTTPS")]),e._v(" "),r("p",[e._v("TTRSS container itself doesn't handle HTTPS traffic. An example of configuring an Nginx reverse proxy with free SSL certificate from "),r("a",{attrs:{href:"https://letsencrypt.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Let's Encrypt"),r("OutboundLink")],1),e._v(" is shown below:")]),e._v(" "),r("div",{staticClass:"language-nginx extra-class"},[r("pre",{pre:!0,attrs:{class:"language-nginx"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("upstream")]),e._v(" ttrssdev "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("server")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("127.0")]),r("span",{pre:!0,attrs:{class:"token number"}},[e._v(".0")]),r("span",{pre:!0,attrs:{class:"token number"}},[e._v(".1")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("181")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("server")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("listen")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("80")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("server_name")]),e._v("  ttrssdev"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("henry"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("wang"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("return")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("301")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("https")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("ttrssdev"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("henry"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("wang"),r("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$request_uri")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("server")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("listen")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("443")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("ssl")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("gzip")]),e._v(" on"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("server_name")]),e._v("  ttrssdev"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("henry"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("wang"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n    "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("ssl_certificate")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("etc"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("letsencrypt"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("live"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("ttrssdev"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("henry"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("wang"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("fullchain"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("pem"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("ssl_certificate_key")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("etc"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("letsencrypt"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("live"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("ttrssdev"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("henry"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("wang"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("privkey"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("pem"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n    "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("access_log")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("var"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("log"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("nginx"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("ttrssdev_access"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("log combined"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("error_log")]),e._v("  "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("var"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("log"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("nginx"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("ttrssdev_error"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("log"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n    "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("location")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("proxy_redirect")]),e._v(" off"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n        "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("proxy_pass")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("http")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("ttrssdev"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n        "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("proxy_set_header")]),e._v("  Host                "),r("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$http_host")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n        "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("proxy_set_header")]),e._v("  X"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("Real"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("IP           "),r("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$remote_addr")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n        "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("proxy_set_header")]),e._v("  X"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("Forwarded"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Ssl")]),e._v("     on"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n        "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("proxy_set_header")]),e._v("  X"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("Forwarded"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("For     "),r("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$proxy_add_x_forwarded_for")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n        "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("proxy_set_header")]),e._v("  X"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("Forwarded"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("Proto   "),r("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$scheme")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n        "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("proxy_set_header")]),e._v("  X"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("Frame"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("Options     SAMEORIGIN"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n        "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("client_max_body_size")]),e._v("        "),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("100")]),e._v("m"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n        "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("client_body_buffer_size")]),e._v("     "),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("128")]),e._v("k"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n        "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("proxy_buffer_size")]),e._v("           "),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("4")]),e._v("k"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n        "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("proxy_buffers")]),e._v("               "),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("4")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("32")]),e._v("k"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n        "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("proxy_busy_buffers_size")]),e._v("     "),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("64")]),e._v("k"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n        "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("proxy_temp_file_write_size")]),e._v("  "),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("64")]),e._v("k"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),r("h2",{attrs:{id:"update"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#update","aria-hidden":"true"}},[e._v("#")]),e._v(" Update")]),e._v(" "),r("p",[e._v("Awesome-TTRSS automatically keeps up with TTRSS by mirroring the official releases, this means update can be issued frequently.")]),e._v(" "),r("p",[e._v("By default "),r("code",[e._v("wangqiru/ttrss:latest")]),e._v(" version is used, which contains the stable release from "),r("a",{attrs:{href:"https://git.tt-rss.org/fox/tt-rss/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("the official TTRSS repository"),r("OutboundLink")],1),e._v(". "),r("code",[e._v("wangqiru/ttrss:nightly")]),e._v(" is also available if you want to try out the latest features, however this may contain bugs. For older versions, please check "),r("a",{attrs:{href:"https://hub.docker.com/r/wangqiru/ttrss/tags",target:"_blank",rel:"noopener noreferrer"}},[e._v("this page"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("h3",{attrs:{id:"manual-update"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#manual-update","aria-hidden":"true"}},[e._v("#")]),e._v(" Manual Update")]),e._v(" "),r("p",[e._v("You can fetch the latest image manually:")]),e._v(" "),r("div",{staticClass:"language-shell extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("    docker pull wangqiru/ttrss:latest\n    # docker pull wangqiru/mercury-parser-api:latest\n    # docker pull wangqiru/opencc-api-server:latest\n    docker-compose up -d # If you didn't use docker-compose, I'm sure you know what to do.\n")])])]),r("h3",{attrs:{id:"auto-update"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#auto-update","aria-hidden":"true"}},[e._v("#")]),e._v(" Auto Update")]),e._v(" "),r("p",[e._v("The example "),r("a",{attrs:{href:"#deployment-via-docker-compose"}},[e._v("docker-compose")]),e._v(" includes "),r("a",{attrs:{href:"https://github.com/containrrr/watchtower",target:"_blank",rel:"noopener noreferrer"}},[e._v("Watchtower"),r("OutboundLink")],1),e._v(", which automatically pulls all containers included in Awesome-TTRSS (and other containers running on your system) and refreshes your running services. By default, it's disabled, "),r("strong",[e._v("make sure it will not affect your other service containers before enabling this.")])]),e._v(" "),r("p",[e._v("To exclude images, check the following for disabling auto update for containers:")]),e._v(" "),r("div",{staticClass:"language-yml extra-class"},[r("pre",{pre:!0,attrs:{class:"language-yml"}},[r("code",[e._v("  "),r("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("service.mercury")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),r("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("image")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" wangqiru/mercury"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("parser"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("api"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("latest\n    "),r("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("container_name")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" mercury\n    "),r("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("expose")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n      "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("3000")]),e._v("\n    "),r("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("restart")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" always\n    "),r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# ⬇️ this prevents Watchtower from auto updating mercury-parser-api")]),e._v("\n    "),r("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("labels")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n        "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" com.centurylinklabs.watchtower.enable=false\n")])])]),r("h2",{attrs:{id:"plugins"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#plugins","aria-hidden":"true"}},[e._v("#")]),e._v(" Plugins")]),e._v(" "),r("h3",{attrs:{id:"mercury-fulltext-extraction"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mercury-fulltext-extraction","aria-hidden":"true"}},[e._v("#")]),e._v(" "),r("a",{attrs:{href:"https://github.com/HenryQW/mercury_fulltext",target:"_blank",rel:"noopener noreferrer"}},[e._v("Mercury Fulltext Extraction"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("Fetch fulltext of articles via a self-hosted Mercury Parser API. A separate Mercury Parser API is required, the example "),r("a",{attrs:{href:"#deployment-via-docker-compose"}},[e._v("docker-compose")]),e._v(" has already included "),r("a",{attrs:{href:"https://github.com/HenryQW/mercury-parser-api",target:"_blank",rel:"noopener noreferrer"}},[e._v("such a server"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("h4",{attrs:{id:"steps-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#steps-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Steps")]),e._v(" "),r("ol",[r("li",[e._v("Enable "),r("code",[e._v("mercury-fulltext")]),e._v(" plugin in preference\n"),r("img",{attrs:{src:"https://share.henry.wang/92AGp5/x9xYB93cnX+",alt:"enable Mercury"}})]),e._v(" "),r("li",[e._v("Enter Mercury Parser API endpoint\n"),r("img",{attrs:{src:"https://share.henry.wang/KFrzMD/O2xonuy9ta+",alt:"enter Mercury Parser API endpoint"}})])]),e._v(" "),r("h3",{attrs:{id:"fever-api"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#fever-api","aria-hidden":"true"}},[e._v("#")]),e._v(" "),r("a",{attrs:{href:"https://github.com/HenryQW/tinytinyrss-fever-plugin",target:"_blank",rel:"noopener noreferrer"}},[e._v("Fever API"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("Provide Fever API simulate.")]),e._v(" "),r("p",[r("strong",[e._v("Plugin is enabled as a system plugin by default.")])]),e._v(" "),r("h4",{attrs:{id:"steps-3"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#steps-3","aria-hidden":"true"}},[e._v("#")]),e._v(" Steps")]),e._v(" "),r("ol",[r("li",[e._v("Enable API in preference\n"),r("img",{attrs:{src:"https://share.henry.wang/X2AnXi/bVVDg9mGDm+",alt:"enable API"}})]),e._v(" "),r("li",[e._v("Enter a password for Fever in preference\n"),r("img",{attrs:{src:"https://share.henry.wang/HspODo/xRSbZQheVN+",alt:"enter a Fever password"}})]),e._v(" "),r("li",[e._v("In supported RSS readers, use "),r("code",[e._v("https://[your url]/plugins/fever")]),e._v(" as the target server address, with your account and the password set in Step 2.")]),e._v(" "),r("li",[e._v("The plugin communicates with TTRSS using an unsalted MD5 hash, "),r("a",{attrs:{href:"#configure-https"}},[e._v("using HTTPS")]),e._v(" is strongly recommended.")])]),e._v(" "),r("h3",{attrs:{id:"opencc-simp-trad-chinese-conversion"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#opencc-simp-trad-chinese-conversion","aria-hidden":"true"}},[e._v("#")]),e._v(" "),r("a",{attrs:{href:"https://github.com/HenryQW/ttrss_opencc",target:"_blank",rel:"noopener noreferrer"}},[e._v("OpenCC Simp-Trad Chinese Conversion"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("Conversion between Traditional and Simplified Chinese via "),r("a",{attrs:{href:"https://github.com/BYVoid/OpenCC",target:"_blank",rel:"noopener noreferrer"}},[e._v("OpenCC"),r("OutboundLink")],1),e._v(" , a separate "),r("a",{attrs:{href:"https://github.com/HenryQW/OpenCC.henry.wang",target:"_blank",rel:"noopener noreferrer"}},[e._v("OpenCC API Server"),r("OutboundLink")],1),e._v(" is required. the example "),r("a",{attrs:{href:"#deployment-via-docker-compose"}},[e._v("docker-compose")]),e._v(" has already included "),r("a",{attrs:{href:"https://github.com/HenryQW/OpenCC.henry.wang",target:"_blank",rel:"noopener noreferrer"}},[e._v("such a server"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("h4",{attrs:{id:"steps-4"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#steps-4","aria-hidden":"true"}},[e._v("#")]),e._v(" Steps")]),e._v(" "),r("ol",[r("li",[e._v("Enable "),r("code",[e._v("opencc")]),e._v(" plugin in preference\n"),r("img",{attrs:{src:"https://share.henry.wang/EvN5Nl/2RHNnMV2iP+",alt:"enable opencc"}})]),e._v(" "),r("li",[e._v("Enter OpenCC API endpoint\n"),r("img",{attrs:{src:"https://share.henry.wang/JdJeUB/vIsRBk3EXn+",alt:"enter OpenCC API endpoint"}})])]),e._v(" "),r("p",[e._v("Demo instances, availability is not guaranteed: "),r("a",{attrs:{href:"https://opencc.henry.wang",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://opencc.henry.wang"),r("OutboundLink")],1),e._v(" or "),r("a",{attrs:{href:"http://opencc2.henry.wang",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://opencc2.henry.wang"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("h3",{attrs:{id:"feedreader-api"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#feedreader-api","aria-hidden":"true"}},[e._v("#")]),e._v(" "),r("a",{attrs:{href:"https://github.com/jangernert/FeedReader/tree/master/data/tt-rss-feedreader-plugin",target:"_blank",rel:"noopener noreferrer"}},[e._v("FeedReader API"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("Provide FeedReader API support.")]),e._v(" "),r("p",[e._v("System plugin, enabled by adding "),r("code",[e._v("api_feedreader")]),e._v(" to the environment variable "),r("strong",[e._v("ENABLE_PLUGINS")]),e._v(".")]),e._v(" "),r("p",[e._v("Refer to "),r("a",{attrs:{href:"https://github.com/jangernert/FeedReader/tree/master/data/tt-rss-feedreader-plugin",target:"_blank",rel:"noopener noreferrer"}},[e._v("FeedReader API"),r("OutboundLink")],1),e._v(" for more details.")]),e._v(" "),r("h3",{attrs:{id:"news-api"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#news-api","aria-hidden":"true"}},[e._v("#")]),e._v(" "),r("a",{attrs:{href:"https://github.com/voidstern/tt-rss-newsplus-plugin/",target:"_blank",rel:"noopener noreferrer"}},[e._v("News+ API"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("Provide a faster two-way synchronization for Android App "),r("a",{attrs:{href:"http://github.com/noinnion/newsplus/",target:"_blank",rel:"noopener noreferrer"}},[e._v("News+"),r("OutboundLink")],1),e._v(" and iOS App "),r("a",{attrs:{href:"http://cocoacake.net/apps/fiery/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Fiery Feeds"),r("OutboundLink")],1),e._v(" with TTRSS.")]),e._v(" "),r("p",[e._v("System plugin, enabled by adding "),r("code",[e._v("api_newsplus")]),e._v(" to the environment variable "),r("strong",[e._v("ENABLE_PLUGINS")]),e._v(".")]),e._v(" "),r("p",[e._v("Refer to "),r("a",{attrs:{href:"https://github.com/voidstern/tt-rss-newsplus-plugin/",target:"_blank",rel:"noopener noreferrer"}},[e._v("News+ API"),r("OutboundLink")],1),e._v(" for more details.")]),e._v(" "),r("h3",{attrs:{id:"feediron"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#feediron","aria-hidden":"true"}},[e._v("#")]),e._v(" "),r("a",{attrs:{href:"https://github.com/feediron/ttrss_plugin-feediron",target:"_blank",rel:"noopener noreferrer"}},[e._v("Feediron"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("Provide the ability to manipulate article DOMs.")]),e._v(" "),r("p",[e._v("Refer to "),r("a",{attrs:{href:"https://github.com/feediron/ttrss_plugin-feediron",target:"_blank",rel:"noopener noreferrer"}},[e._v("Feediron"),r("OutboundLink")],1),e._v(" for more details.")]),e._v(" "),r("h3",{attrs:{id:"options-per-feed"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#options-per-feed","aria-hidden":"true"}},[e._v("#")]),e._v(" "),r("a",{attrs:{href:"https://github.com/sergey-dryabzhinsky/options_per_feed",target:"_blank",rel:"noopener noreferrer"}},[e._v("Options per Feed"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("Provide the ability to configure proxy, user-agent and SSL certificate verification on a per feed basis.")]),e._v(" "),r("p",[e._v("Refer to "),r("a",{attrs:{href:"https://github.com/sergey-dryabzhinsky/options_per_feed",target:"_blank",rel:"noopener noreferrer"}},[e._v("Options per Feed"),r("OutboundLink")],1),e._v(" for more details.")]),e._v(" "),r("h2",{attrs:{id:"themes"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#themes","aria-hidden":"true"}},[e._v("#")]),e._v(" Themes")]),e._v(" "),r("h3",{attrs:{id:"feedly"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#feedly","aria-hidden":"true"}},[e._v("#")]),e._v(" "),r("a",{attrs:{href:"https://github.com/levito/tt-rss-feedly-theme",target:"_blank",rel:"noopener noreferrer"}},[e._v("Feedly"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("img",{attrs:{src:"https://share.henry.wang/f3WNje/Q7RoLBSUFp+",alt:"Feedly"}})]),e._v(" "),r("h3",{attrs:{id:"rsshub"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rsshub","aria-hidden":"true"}},[e._v("#")]),e._v(" "),r("a",{attrs:{href:"https://github.com/DIYgod/ttrss-theme-rsshub",target:"_blank",rel:"noopener noreferrer"}},[e._v("RSSHub"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("img",{attrs:{src:"https://share.henry.wang/E5Lifa/1ykvdTWuew+",alt:"RssHub"}})]),e._v(" "),r("h2",{attrs:{id:"recommendation"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#recommendation","aria-hidden":"true"}},[e._v("#")]),e._v(" Recommendation")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://docs.rsshub.app/en/",target:"_blank",rel:"noopener noreferrer"}},[e._v("RSSHub"),r("OutboundLink")],1),e._v(" is an interesting place for discovering RSS feeds.")]),e._v(" "),r("li",[e._v("For iOS and macOS user, the integrated "),r("a",{attrs:{href:"https://github.com/HenryQW/tinytinyrss-fever-plugin",target:"_blank",rel:"noopener noreferrer"}},[e._v("Fever plugin"),r("OutboundLink")],1),e._v(" supplies "),r("a",{attrs:{href:"http://reederapp.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Reeder 4"),r("OutboundLink")],1),e._v(" backend support.")]),e._v(" "),r("li",[e._v("For Android user, the integrated "),r("a",{attrs:{href:"https://github.com/HenryQW/tinytinyrss-fever-plugin",target:"_blank",rel:"noopener noreferrer"}},[e._v("Fever plugin"),r("OutboundLink")],1),e._v(" supplies "),r("a",{attrs:{href:"http://github.com/noinnion/newsplus/",target:"_blank",rel:"noopener noreferrer"}},[e._v("News+"),r("OutboundLink")],1),e._v(" backend support.")]),e._v(" "),r("li",[e._v("For Linux user, the integrated "),r("a",{attrs:{href:"https://github.com/jangernert/FeedReader/tree/master/data/tt-rss-feedreader-plugin",target:"_blank",rel:"noopener noreferrer"}},[e._v("FeedReader API"),r("OutboundLink")],1),e._v(" supplies "),r("a",{attrs:{href:"https://jangernert.github.io/FeedReader/",target:"_blank",rel:"noopener noreferrer"}},[e._v("FeedReader"),r("OutboundLink")],1),e._v(" backend support.")])]),e._v(" "),r("h2",{attrs:{id:"support-and-help"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#support-and-help","aria-hidden":"true"}},[e._v("#")]),e._v(" Support and Help")]),e._v(" "),r("ul",[r("li",[e._v("You may request for personalized support via sponsoring Awesome TTRSS on its "),r("a",{attrs:{href:"https://opencollective.com/Awesome-TTRSS/",target:"_blank",rel:"noopener noreferrer"}},[e._v("💰OpenCollective page"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("li",[e._v("Read "),r("a",{attrs:{href:"https://henry.wang/2018/04/25/ttrss-docker-plugins-guide.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("this guide"),r("OutboundLink")],1),e._v(" might help.")]),e._v(" "),r("li",[e._v("Open an issue via "),r("a",{attrs:{href:"https://github.com/HenryQW/Awesome-TTRSS/issues",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub issue"),r("OutboundLink")],1),e._v(".")])]),e._v(" "),r("h2",{attrs:{id:"donation"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#donation","aria-hidden":"true"}},[e._v("#")]),e._v(" Donation")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("PayPal")]),e._v(" "),r("th",[e._v("WeChat Pay")]),e._v(" "),r("th",[e._v("OpenCollective")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[r("a",{attrs:{href:"https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=MTM5L6T4PHRQS&source=url",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://www.paypalobjects.com/en_US/GB/i/btn/btn_donateCC_LG.gif",alt:"paypal"}}),r("OutboundLink")],1)]),e._v(" "),r("td",[r("img",{attrs:{src:"https://share.henry.wang/IKaxAW/duFgAuOnmk+",width:"200"}})]),e._v(" "),r("td",[r("a",{attrs:{href:"https://opencollective.com/Awesome-TTRSS/",target:"_blank",rel:"noopener noreferrer"}},[e._v("💰OpenCollective page"),r("OutboundLink")],1)])])])]),e._v(" "),r("h2",{attrs:{id:"license"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#license","aria-hidden":"true"}},[e._v("#")]),e._v(" License")]),e._v(" "),r("p",[e._v("MIT")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://app.fossa.com/projects/git%2Bgithub.com%2FHenryQW%2FAwesome-TTRSS?ref=badge_large",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://app.fossa.com/api/projects/git%2Bgithub.com%2FHenryQW%2FAwesome-TTRSS.svg?type=large",alt:"FOSSA Status"}}),r("OutboundLink")],1)])])},[],!1,null,null,null);t.default=s.exports}}]);