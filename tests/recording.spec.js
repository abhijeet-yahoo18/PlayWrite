import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('OrangeHRM');
  await page.getByText('OrangeHRM', { exact: true }).click();
  await page.getByRole('link', { name: 'Human Resources Management' }).click();
  await page.goto('https://www.google.com/search?q=orangehrm&sca_esv=25dd1b6fd40bfe61&source=hp&ei=TvXgZ_HTL9PN5OUPufiY6A0&iflsig=ACkRmUkAAAAAZ-EDXrErj_-wkJLdDxuaVjuDh2clyobk&gs_ssp=eJzj4tTP1TdISzOuKlNgNGB0YPDizC9KzEtPzSjKBQBfagem&oq=OrangeHRM&gs_lp=Egdnd3Mtd2l6IglPcmFuZ2VIUk0qAggAMg4QLhiABBixAxjRAxjHATIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABEiQSFDeDVj_J3ABeACQAQCYAYMBoAHdCKoBAzAuObgBAcgBAPgBAZgCCqAC_gioAgrCAgoQABgDGOoCGI8BwgINEC4YAxjUAhjqAhiPAcICChAuGAMY6gIYjwHCAhEQLhiABBixAxjRAxiDARjHAcICDhAuGIAEGLEDGIMBGIoFwgILEAAYgAQYsQMYgwHCAggQABiABBixA8ICDhAAGIAEGLEDGIMBGIoFwgIIEC4YgAQYsQPCAg0QLhiABBjRAxjHARgKmAMI8QWas4gV2IdR8pIHAzEuOaAH4l6yBwMwLjm4B_YI&sclient=gws-wiz&sei=XPXgZ7GOOdmSseMP1LSNsQw');
  await page.getByRole('link', { name: 'Sign In', exact: true }).click();
  await page.getByRole('link', { name: 'Login here' }).click();
  await page.goto('https://www.google.com/search?q=orangehrm&sca_esv=25dd1b6fd40bfe61&source=hp&ei=TvXgZ_HTL9PN5OUPufiY6A0&iflsig=ACkRmUkAAAAAZ-EDXrErj_-wkJLdDxuaVjuDh2clyobk&gs_ssp=eJzj4tTP1TdISzOuKlNgNGB0YPDizC9KzEtPzSjKBQBfagem&oq=OrangeHRM&gs_lp=Egdnd3Mtd2l6IglPcmFuZ2VIUk0qAggAMg4QLhiABBixAxjRAxjHATIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABEiQSFDeDVj_J3ABeACQAQCYAYMBoAHdCKoBAzAuObgBAcgBAPgBAZgCCqAC_gioAgrCAgoQABgDGOoCGI8BwgINEC4YAxjUAhjqAhiPAcICChAuGAMY6gIYjwHCAhEQLhiABBixAxjRAxiDARjHAcICDhAuGIAEGLEDGIMBGIoFwgILEAAYgAQYsQMYgwHCAggQABiABBixA8ICDhAAGIAEGLEDGIMBGIoFwgIIEC4YgAQYsQPCAg0QLhiABBjRAxjHARgKmAMI8QWas4gV2IdR8pIHAzEuOaAH4l6yBwMwLjm4B_YI&sclient=gws-wiz&sei=XPXgZ7GOOdmSseMP1LSNsQw');
  await page.getByRole('link', { name: 'OrangeHRM OrangeHRM Demo' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Username' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: '' }).click();
});