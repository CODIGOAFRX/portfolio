import { defineConfig } from '@playwright/test';
export default defineConfig({testDir:'./tests',timeout:120000,workers:1,use:{baseURL:'http://127.0.0.1:5174',headless:true,viewport:{width:1440,height:1000}},webServer:{command:'npm run dev',url:'http://127.0.0.1:5174',reuseExistingServer:true}});
