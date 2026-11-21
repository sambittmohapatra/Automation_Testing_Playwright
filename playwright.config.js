// @ts-check

import { defineConfig, devices } from '@playwright/test';
import reportingLabs from './reporting-labs.config';
import dotenv from 'dotenv';


dotenv.config();

export default defineConfig({

  testDir: './tests',

  timeout: 30000,

  expect: {
    timeout: 5000,
  },

  fullyParallel: true,

  workers: process.env.CI ? 1 : 3,

  retries: process.env.CI ? 2 : 0,

  forbidOnly: !!process.env.CI,

  reporter: [
    ['reporting-labs', reportingLabs], 
  ],

  use: {
    baseURL: process.env.BASEURL,

    headless: true,

    screenshot: 'only-on-failure',

    video: 'retain-on-failure',

    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
  ],
});