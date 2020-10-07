import { angularOutputTarget, ValueAccessorConfig } from '@stencil/angular-output-target';
import { Config } from '@stencil/core';
import { reactOutputTarget } from "@stencil/react-output-target";
import { sass } from '@stencil/sass';
import { ComponentModelConfig, vueOutputTarget } from '@stencil/vue-output-target';

// This needs to be defined only for Form input controls to be used in reactive forms of angular
// There is also support for vue and react.

// https://github.com/ionic-team/stencil-ds-output-targets/issues/6
const angularValueAccessorBindings: ValueAccessorConfig[] = [
  {
    elementSelectors: ['simple-progressbar'],
    event: 'statusUpdate',
    targetAttr: 'value',
    type: 'number',
  },
];

const vueComponentModels: ComponentModelConfig[] = [
  {
    elements: ['simple-progressbar'],
    event: 'statusUpdate',
    targetAttr: 'value',
  },
];

export const config: Config = {
  namespace: 'simple-components',
  plugins: [
    sass()
  ],
  outputTargets: [
    angularOutputTarget({
      componentCorePackage: '@angularsc/components',
      directivesProxyFile: 'dist/angular/src/directives/proxies.ts',
      valueAccessorConfigs: angularValueAccessorBindings,
    }),
    reactOutputTarget({
      componentCorePackage: "@reactsc/components",
      proxiesFile: "dist/react/src/components.ts",
      loaderDir: "lib/loader"
    }),
    vueOutputTarget({
      componentCorePackage: '@vuesc/components',
      proxiesFile: 'dist/vue/src/proxies.ts',
      componentModels: vueComponentModels,
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
