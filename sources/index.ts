import { Plugin } from '@yarnpkg/core';
import UpgradeInteractiveCommand from './interractive';

const plugin: Plugin = {
  hooks: {
    afterAllInstalled: () => {
      console.log(`What a great install, am I right?`);
    },
  },
  commands: [
    UpgradeInteractiveCommand,
  ],
};

export default plugin;
