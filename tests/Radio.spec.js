import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.testcellmasouthamptonaudiology.com/cellmaWEB/index.do');
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill('mayur.trainer');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('Welcome@123');
  await page.getByRole('button', { name: 'LOG IN' }).click();
  await page.getByRole('button', { name: 'Set' }).click();
  await page.locator('#homePageIconContainer > .homePageIcon').first().click();
  await page.getByLabel('Barcode:').click();
  await page.getByLabel('Barcode:').fill('1774');
  await page.getByRole('cell', { name: 'Search', exact: true }).locator('a').click();
  await page.getByText('Select', { exact: true }).click();
  await page.getByRole('button', { name: 'Confirm Existing Details' }).click();
  await page.getByRole('cell', { name: 'Data entry Data entry', exact: true }).locator('a').click();
  await page.getByRole('cell', { name: 'X Index You are logged in as' }).locator('#closebtn').click();
  await page.locator('#assessment').click();
  await page.locator('#claId').selectOption('468');
  await page.getByRole('button', { name: 'Show' }).click();
  await page.waitForTimeout(3000)
  await page.locator('#table47260').getByRole('cell', { name: 'Initial Fit' }).click();
  await page.waitForTimeout(3000)
  await page.getByText('Normal', { exact: true }).click();
  await page.locator('#edNotes').click();
  await page.locator('#edNotes').fill('Add Notes');
  await page.locator('#edSave').click();
  await page.locator('#table47264').getByRole('cell', { name: 'USAIS' }).click();
  await page.waitForTimeout(3000)
  await page.getByText('Abnormal').click();
  await page.locator('#edNotes').click();
  await page.locator('#edNotes').fill('test notes');
  await page.locator('#edSave').click();
  await page.waitForTimeout(5000)
  await page.locator('#table47268').getByRole('cell', { name: 'Left' }).click();
  await page.waitForTimeout(3000)
  await page.locator('#cestextarea_1').click();
  await page.locator('#cestextarea_1').fill('test1');
  await page.locator('#cestextarea_2').click();
  await page.locator('#cestextarea_2').fill('test2');
  await page.locator('#cestextarea_3').click();
  await page.locator('#cestextarea_3').fill('test3');
  await page.locator('#edNotes').click();
  await page.locator('#edNotes').fill('notes');
  await page.locator('#edSave').click();
  await page.waitForTimeout(3000)
  await page.locator('#table47269').getByRole('cell', { name: 'Left' }).click();
  await page.waitForTimeout(3000)
  await page.locator('#cestextarea_2').click();
  await page.locator('#cestextarea_2').fill('test model 1');
  await page.locator('#cestextarea_3').click();
  await page.locator('#cestextarea_3').fill('Serial No 1');
  await page.locator('#cestextarea_4').click();
  await page.locator('#cestextarea_4').fill('Channel 1');
  await page.locator('#cestextarea_5').click();
  await page.locator('#cestextarea_5').fill('Volume1');
  await page.locator('#edNotes').click();
  await page.locator('#edNotes').fill('notes');
  await page.locator('#edSave').click();
  await page.locator('#table47282').getByRole('cell', { name: 'Evaluation' }).click();
  await page.locator('#cesdate_2').click();
  await page.locator('#cesdate_2').fill('70');
  await page.locator('#cesdate_5').click();
  await page.locator('#cesdate_5').fill('60');
  //await page.pause()
  await page.waitForTimeout(3000)
  await page.getByText('Man/Lamb', { exact: true }).click();
  await page.locator('#cestextarea_15').click();
  await page.locator('#cestextarea_15').fill('Added Comment');
  await page.getByRole('button', { name: 'Calculate All' }).click();
  await page.locator('#edNotes').click();
  await page.locator('#edNotes').fill('Add Notes');
  await page.locator('#edSave').click();
  await page.waitForTimeout(3000)
  await page.getByRole('button', { name: 'Next' }).click();
  await page.waitForTimeout(5000)
  await page.locator('#table44189').getByRole('cell', { name: 'Safeguarding Query' }).click();
  await page.locator('#edNotes').click();
  await page.locator('#edNotes').fill('Add Notes for Recomm');
  await page.locator('#edSave').click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.waitForTimeout(5000)
  await page.locator('#overview').click();
  await page.locator('#overview').fill('Overview Added');
  await page.waitForTimeout(3000)
  await page.getByRole('button', { name: 'Next' }).click();
  await page.waitForTimeout(3000)
  await page.getByText('Click to view details entered').click();
  await page.waitForTimeout(3000)
  await page.locator('#overview').click();
  await page.waitForTimeout(2000)
  await page.locator('#overview').fill('Add Overview');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(2000)
  //await page.pause()
  await page.locator('#end').getByRole('cell').click()
  await page.waitForTimeout(100)
  // Intercept and handle dialogs
  page.on('dialog', async (dialog) => {
    console.log(`Dialog message: ${dialog.message()}`);
    await dialog.accept(); // You can also use dialog.dismiss() to dismiss the dialog
  });
  await page.waitForTimeout(3000)
  //await page.waitForTimeout(2000)
  await page.locator('#end').getByRole('cell').click()
 // await page.goto('https://www.testcellmasouthamptonaudiology.com/cellmaWEB/MarkAssessmentAsComplete.do');
  await page.getByRole('button', { name: 'Save' }).click(); 
  await page.waitForTimeout(3000)
  await page.getByRole('img', { name: 'Riomed\'s CELLMA' }).click();
  await page.waitForTimeout(3000)
  await page.locator('#closebtnVersion').click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('button', { name: 'LOG OUT' }).click();
});