import { newSpecPage } from '@stencil/core/testing';
import { SimpleProgressbar } from '../simple-progressbar';

describe('simple-progressbar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SimpleProgressbar],
      html: `<simple-progressbar></simple-progressbar>`,
    });
    expect(page.root).toEqualHtml(`
      <simple-progressbar>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </simple-progressbar>
    `);
  });
});
