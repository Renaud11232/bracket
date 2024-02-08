"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[841],{5660:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>d,toc:()=>i});var r=t(5893),c=t(1151);const a={sidebar_position:2},s="Developing",d={id:"community/development",title:"Developing",description:"This guide explains how to run Bracket without Docker. They cover database setup, configuration and",source:"@site/docs/community/development.md",sourceDirName:"community",slug:"/community/development",permalink:"/bracket/docs/community/development",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/community/development.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Contributing",permalink:"/bracket/docs/community/contributing"}},o={},i=[{value:"Database",id:"database",level:2},{value:"Running the frontend and backend",id:"running-the-frontend-and-backend",level:2},{value:"Frontend",id:"frontend",level:3},{value:"Backend",id:"backend",level:3}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"developing",children:"Developing"}),"\n",(0,r.jsxs)(n.p,{children:["This guide explains how to run Bracket without Docker. They cover database setup, configuration and\nhow to run the frontend and backend. If you quickly want to get up and running, please read\n",(0,r.jsx)(n.a,{href:"/bracket/docs/running-bracket/quickstart",children:"quickstart.md"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"database",children:"Database"}),"\n",(0,r.jsxs)(n.p,{children:["First create a ",(0,r.jsx)(n.code,{children:"bracket"})," cluster:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo pg_createcluster -u postgres -p 5532 13 bracket\npg_ctlcluster 13 bracket start\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Subsequently, create a new ",(0,r.jsx)(n.code,{children:"bracket_dev"})," database. First connect via ",(0,r.jsx)(n.code,{children:"sudo -Hu postgres psql -p 5532"}),", and then run:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"CREATE USER bracket_dev WITH PASSWORD 'bracket_dev';\nCREATE DATABASE bracket_dev OWNER bracket_dev;\n"})}),"\n",(0,r.jsx)(n.p,{children:"You can do the same but replace the user and database name with:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"bracket_ci"}),": for running tests"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"bracket_prod"}),": for a production database"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["The database URL can be specified per environment in the ",(0,r.jsx)(n.code,{children:".env"})," files (see\n",(0,r.jsx)(n.a,{href:"/bracket/docs/running-bracket/configuration",children:"config"}),")."]}),"\n",(0,r.jsx)(n.h2,{id:"running-the-frontend-and-backend",children:"Running the frontend and backend"}),"\n",(0,r.jsxs)(n.p,{children:["To run Bracket (frontend and backend) locally without Docker, one needs ",(0,r.jsx)(n.code,{children:"yarn"})," and ",(0,r.jsx)(n.code,{children:"pipenv"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"The following starts the frontend and backend for local development in the root\ndirectory of Bracket:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"./run.sh\n"})}),"\n",(0,r.jsxs)(n.p,{children:["If either the frontend or backend doesn't shut down correctly, you can run (on Linux)\n",(0,r.jsx)(n.code,{children:"killall gunicorn node"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["But ",(0,r.jsx)(n.strong,{children:"be careful"})," that this will also kill other gunicorn and node processes."]}),"\n",(0,r.jsx)(n.p,{children:"In case you want to run the frontend and backend yourself, see the following\ntwo sections."}),"\n",(0,r.jsx)(n.h3,{id:"frontend",children:"Frontend"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd frontend\nyarn run dev\n"})}),"\n",(0,r.jsx)(n.h3,{id:"backend",children:"Backend"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd backend\npipenv install -d\npipenv shell\n./run.sh\n"})})]})}function u(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>s});var r=t(7294);const c={},a=r.createContext(c);function s(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);