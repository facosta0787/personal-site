const util = require('util')
const exec = util.promisify(require('child_process').exec)

module.exports = {
  devIndicators: {
    autoPrerender: false,
  },
  generateBuildId: async () => {
    // You can, for example, get the latest git commit hash here
    const { stdout, stderr } = await exec(
      'echo $(git log -n 1 --pretty=format:"%H")'
    )

    if (stderr) return '202004152203'

    return stdout
  },
}