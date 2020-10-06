import { newE2EPage } from '@stencil/core/testing';

describe('simple-progressbar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<simple-progressbar></simple-progressbar>');

    const element = await page.find('simple-progressbar');
    expect(element).toHaveClass('hydrated');
  });
});
