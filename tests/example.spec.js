import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.testcellmasouthamptonaudiology.com/cellmaWEB/index.do');
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill('manoj');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('Welcome@123');
  await page.getByRole('button', { name: 'LOG IN' }).click();
  await page.getByRole('button', { name: 'Set' }).click();
  await page.locator('#homePageIconContainer > .homePageIcon').first().click();
  await page.pause()
  //await page.locator('#patRefTxt').click();
 // await page.locator('#patRefTxt').fill('playwright');
  await page.locator('#patFirstnameTxt').click();
  await page.locator('#patFirstnameTxt').fill('automation');
  await page.getByRole('cell', { name: 'Search', exact: true }).locator('a').click();  
  await page.getByText('Select', { exact: true }).click();
  await page.getByRole('button', { name: 'Confirm Existing Details' }).click();
  await page.waitForTimeout(3000)
  await page.locator('#patientLocation').selectOption('6558');
  await page.getByRole('cell', { name: 'Data entry Data entry', exact: true }).locator('a').click();
  await page.waitForTimeout(5000)
  await page.locator('#assessment').click();
  await page.locator('#claId').selectOption('425');
  await page.getByRole('button', { name: 'Show' }).click();
  await page.waitForTimeout(3000)
 await page.getByRole('img', { name: 'Appointment' }).click()
  await page.getByText('Appointment reason', { exact: true }).click();
  await page.waitForTimeout(2000)
  await page.getByText('Initial tuning').click();
  await page.getByText('3 month review').click();
  await page.getByText('Post 3-year review').click();
  await page.getByText('Remote check').click();
  await page.waitForTimeout(2000)
  await page.locator('#edNotes').click();
  await page.locator('#edNotes').fill('Added for testing');
  await page.locator('#edSave').click();
  await page.waitForTimeout(3000)
  await page.pause()
  await page.getByRole('button', { name: 'Next' }).click();
  await page.waitForTimeout(3000)
  await page.locator('#table43257').getByRole('cell', { name: 'Left' }).click();
  await page.waitForTimeout(3000)

  await page.getByText('Abnormal').click();
  await page.locator('#edNotes').click();
  await page.locator('#edNotes').fill('Added notes for testing');
  await page.locator('#edSave').click();
  await page.waitForTimeout(3000)
  await page.pause()
  await page.getByRole('img', { name: 'Stored Extra Details' }).click();
  await page.locator('#table41698').getByRole('cell', { name: 'Tympanometry' }).click();
  await page.locator('#cesdate_1').click();
  await page.locator('#cesdate_1').fill('60');
  await page.locator('#cesdate_13').click();
  await page.locator('#cesdate_13').fill('65');
  await page.locator('#tableces_2').getByRole('cell', { name: 'NP' }).click();
  await page.locator('#tableces_14').getByRole('cell', { name: 'NP' }).click();
  await page.locator('#cesdate_3').click();
  await page.locator('#cesdate_3').fill('150');
  await page.locator('#cesdate_15').click();
  await page.locator('#cesdate_15').fill('120');
  await page.locator('#tableces_4').getByRole('cell', { name: 'NP' }).click();
  await page.locator('#tableces_16').getByRole('cell', { name: 'NP' }).click();
  await page.locator('#cesdate_5').click();
  await page.locator('#cesdate_5').fill('110');
  await page.locator('#cesdate_17').click();
  await page.locator('#cesdate_17').fill('90');
  await page.locator('#tableces_6').getByRole('cell', { name: 'Rounded' }).click();
  await page.locator('#tableces_20').getByRole('cell', { name: 'Flat' }).click();
  await page.locator('#tableces_10').getByRole('cell', { name: 'WNL' }).click();
  await page.locator('#tableces_22').getByRole('cell', { name: 'WNL' }).click();
  await page.locator('#cestextarea_12').click();
  await page.locator('#cestextarea_12').fill('Added left');
  await page.locator('#cestextarea_24').click();
  await page.locator('#cestextarea_24').fill('Added Right');
  await page.locator('#edNotes').click();
  await page.locator('#edNotes').fill('Added Notes');
  await page.locator('#edSave').click();
  
  await page.waitForTimeout(3000)
  await page.locator('#table44034').getByRole('cell', { name: 'Yes' }).click();
  await page.locator('#cestextarea_1').click();
  await page.locator('#cestextarea_1').fill('test');
 
  await page.waitForTimeout(3000)
  await page.pause()
  //await page.locator("xpath=//textarea[@id='edNotes']").click()
 // await page.locator("xpath=//textarea[@id='edNotes' and @name='edNotes']").click()
  await page.locator("xpath=//td[@id='edSave']").nth(1).click()
  await page.waitForTimeout(2000)
  await page.pause()
  await page.getByRole('cell', { name: 'Patient report' }).click();
  await page.pause()


});